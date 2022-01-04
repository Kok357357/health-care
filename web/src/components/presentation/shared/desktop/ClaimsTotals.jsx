import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import defaultTheme from '../../../../style/themes';
import NumberTile from './NumberTile';
import actions from '@evry-member-app/shared/store/actions';
import selectors from '@evry-member-app/shared/store/selectors';
import constants from '@evry-member-app/shared/constants';

const { fetchClaimsSummary } = actions;
const { getClaimsSummary, getMemberId, getToken } = selectors;
const { INDIVIDUAL } = constants;

// 4 NumberTiles giving claims summary totals

const { LayoutWrapper, SpaceBetween } = defaultTheme.components;

class ClaimsTotals extends Component {
  componentDidMount() {
    const { claimsSummary, fetchClaimsSummary } = this.props;
    if (Object.getOwnPropertyNames(claimsSummary).length === 0) {
      fetchClaimsSummary();
    }
  }

  render() {
    const { claimsSummary } = this.props;
    return (
      <LayoutWrapper>
        <SpaceBetween>
          <NumberTile number={claimsSummary.total_claims} label="Total Claims" />
          <NumberTile number={claimsSummary.total_telehealth_claims} label="Telehealth Claims" />
          <NumberTile number={claimsSummary.total_costs} label="Total Costs" currency />
          <NumberTile number={claimsSummary.total_benefits} label="Total Benefits" currency green />
        </SpaceBetween>
      </LayoutWrapper>
    );
  }
}

const mapStateToProps = state => ({
  claimsSummary: getClaimsSummary(state),
  id: getMemberId(state),
  token: getToken(state)
});

const mapDispatchToProps = dispatch => ({
  fetchClaimsSummary: args => {
    dispatch(fetchClaimsSummary(args));
  }
});

const mergeProps = ({ id, token, ...stateProps }, { fetchClaimsSummary }, ownProps) => ({
  ...stateProps,
  fetchClaimsSummary: () => fetchClaimsSummary({ id, token, type: INDIVIDUAL }),
  ...ownProps
});

ClaimsTotals.propTypes = {
  claimsSummary: PropTypes.shape({}),
  fetchClaimsSummary: PropTypes.func.isRequired
};

ClaimsTotals.defaultProps = {
  claimsSummary: {}
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(ClaimsTotals);
