import React, { useState } from 'react';
import styled from 'styled-components';
import { Mobile } from '../layouts';
import defaultTheme from '../../style/themes';
import { Sparse } from '../layouts';
import { Helmet } from 'react-helmet-async';

import { connect } from 'react-redux';
import actions from '@evry-member-app/shared/store/actions';
import selectors from '@evry-member-app/shared/store/selectors';

const { LayoutWrapper, MobileContentWrapper } = defaultTheme.components;

const Container = styled.div`
  justify-content: center;
`;

const ActionButton = styled.button`
  box-sizing: border-box;
  padding: 18px;
  font-size: 20px;
  font-weight: 500;    
  width: 100%;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-align: center;
  background:#022B40;
  color: ${props => props.theme.colors.shades.white};
  outline: none;
  border: none;
  border-radius: 4px;
  box-shadow: 0px 20px 30px rgb(0 0 0 / 15%);
  margin: 100px 0 50px 0;

  &:hover {
    opacity: 0.8;
  }
`;

const Header = styled.div`
  color: #00263A;
  font-weight: 500;
  font-size: 28px;
`;

const Separator = styled.div`
  border-bottom: 1px solid #ddd;
  width: 100%;
  margin: 25px 0;
`;

const Body = styled.div`
  font-size: 16px;
  padding: 25px 0 50px 0;
  width: 100%;

  @media ${props => props.theme.device.tabletXL} {
    width: 60%;
  }
`;

const VerificationContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Center = styled.div`
  align-self: center;
  max-width: 250px;
  width: 100%;
`;

const EmailResentAlert = styled.div`
  text-align: center;
  color: #8ED081;
  font-size: 16px;
  font-weight: 500;
  text-transform: uppercase;
`;

const ContentWrapper = styled.div`
  padding-top: 48px;
`;

const EmailVerificationSent = props => {
  const [ buttonClicked, setButtonClicked ] = useState(false);

  function handleResend(e) {
    e.preventDefault();

    setButtonClicked(true);

    props.handleSubmit(props.token);
  }

  return (
    <LayoutWrapper>
      <Helmet>
        <title>{reflection.layoutProps.title} - Evry Health</title>
      </Helmet>
      <ContentWrapper>
        <Container>
          <VerificationContainer>
            <Header>Email Verification</Header>
            <Separator />
            <Body>
              After pressing the button below, please check your email for the email verification link.
              If you haven't got it, you can use the button below to send it again.
            </Body>
            <Separator />
            <Center>
              <ActionButton onClick={handleResend}>Send Link</ActionButton>
              {buttonClicked && <EmailResentAlert>Your email verification has been submitted. Please check your email inbox.</EmailResentAlert>}
            </Center>
          </VerificationContainer>
        </Container>
      </ContentWrapper>
    </LayoutWrapper>
  );
};

const mapStateToProps = state => ({
  token: selectors.getToken(state)
});

const mapDispatchToProps = dispatch => ({
  handleSubmit: (token) => {
    dispatch(actions.verifyEmail(token));
  }
});

const ConnectedEmailVerificationSent = connect(
  mapStateToProps,
  mapDispatchToProps
)(EmailVerificationSent);

const reflection = {
  component: ConnectedEmailVerificationSent,
  layout: Sparse,
  layoutProps: {
    title: 'Evry Member Portal',
    subtitle: "Verify your email."
  },
  route: '/email-verification-sent'
};

export default EmailVerificationSent;

export { reflection };
