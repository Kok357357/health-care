import React, { useState, useEffect } from 'react';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';
import pathToRegexp from 'path-to-regexp';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import AuthorizedRoute from './containers/auth/shared/AuthorizedRoute';
import defaultTheme from '../style/themes';
import views from './views';
import Page404 from './views/Page404';
import ModalContainer from './containers/shared/desktop/ModalContainer';
import LoadingSplash from './presentation/shared/LoadingSplash/LoadingSplash';
import selectors from '@evry-member-app/shared/store/selectors';
import actions from '@evry-member-app/shared/store/actions';
import SessionTimeout from './views/SessionTimeout';
import { insightsPlugin } from '../insights/microsoft/appInsights';
import { AppInsightsErrorBoundary } from '@microsoft/applicationinsights-react-js';
import apis from '@evry-member-app/shared/interfaces/apis/evry/index';

const { isAuthenticated, getCurrentModal } = selectors;

// Extract global style
const { GlobalStyle } = defaultTheme.components;

const layouts = views.reduce((previous, view) => {
  const { layout: component, route } = view;
  const current = previous.slice();
  let layout = current.find(item => item.component === component);
  if (!layout) {
    layout = {
      component,
      views: [],
      routes: []
    };
    current.push(layout);
  }
  layout.views.push(view);
  layout.routes.push(route);
  return current;
}, []);

function renderPage(isAuthenticated, currentModal, store) {
  return (
    <AppInsightsErrorBoundary
      onError={() => {
        if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
          //Todo: display better errors dev and production
          console.log('Unhandled exception occured');
        }
        return null;
      }}
      appInsights={insightsPlugin}
    >
      <ThemeProvider theme={defaultTheme}>
        <>
          {/*
            Fragment is necessary b/c ThemeProvider can only accept a single child component
          */}
          <GlobalStyle />
          <Switch>
            <Route
              path="/"
              exact
              render={() => {
                return <Redirect to={isAuthenticated ? '/plan' : '/sign-in'} />;
              }}
            />
            {layouts &&
              layouts.map(({ component: Layout, routes, views }) => (
                <Route
                  key={`(${routes.join('|')})`}
                  path={routes}
                  render={({ match }) => (
                    <Layout
                      {...(views.find(view => pathToRegexp(view.route).exec(match.url)) || {})
                        .layoutProps}
                    >
                      {views.map(view => {
                        return (
                          <AuthorizedRoute
                            key={view.route}
                            path={view.route}
                            forAuthorized={view.forAuthorized}
                            component={view.component}
                          />
                        );
                      })}
                    </Layout>
                  )}
                />
              ))}
            <Route component={Page404} />
          </Switch>
          {isAuthenticated && <SessionTimeout />}
          <ModalContainer currentModal={currentModal} />
        </>
      </ThemeProvider>
    </AppInsightsErrorBoundary>
  );
}

const Root = ({ isAuthenticated, currentModal, store }) => {
  const [pageMayLoad, setPageMayLoad] = useState(false);

  useEffect(() => {
    let storeState = store.getState();

    if (!pageMayLoad && storeState?.user?.auth?.auth_token) {
      apis
        .fetchBasicInfo({ token: storeState.user.auth.auth_token })
        .then(response => {
          store.dispatch(actions.initializeBasicInfo(response.data));

          setPageMayLoad(true);
        })
        .catch(() => {
          store.dispatch(actions.clearAuthError());

          setPageMayLoad(true);
        });
    } else {
      setPageMayLoad(true);
    }
  }, []);

  if (pageMayLoad) {
    return renderPage(isAuthenticated, currentModal, store);
  } else {
    return <LoadingSplash />;
  }
};

Root.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  currentModal: PropTypes.string
};

Root.defaultProps = {
  currentModal: null
};

const mapStateToProps = state => ({
  isAuthenticated: isAuthenticated(state),
  currentModal: getCurrentModal(state)
});

export default withRouter(connect(mapStateToProps)(Root));
