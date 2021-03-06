import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Desktop small button for general use (Negative prop for negative button styles)

const Button = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 24px;
  background: ${props => (props.negative ? 'none' : props.theme.colors.shades.tealBlue)};
  color: ${props =>
    props.negative ? props.theme.colors.roles.danger : props.theme.colors.shades.white};
  padding: 0 16px;
  border: 1px solid ${props => (props.negative ? props.theme.colors.roles.danger : 'transparent')};
  border-radius: 4px;
  font-weight: 300;
  font-size: 12px;
  cursor: pointer;
  outline: none;

  &:hover {
    background: ${props => (props.negative ? props.theme.colors.roles.danger : '#1C4C66')};
    color: ${props => props.theme.colors.shades.white};
  }
  &:disabled {
    opacity: 0.65;
    cursor: not-allowed;
  }
`;

const SmallButton = React.memo(({ className, text, onClick, negative, disabled }) => (
  <Button className={className} negative={negative} onClick={onClick} disabled={disabled}>
    {text}
  </Button>
));

SmallButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  negative: PropTypes.bool
};

SmallButton.defaultProps = {
  onClick: null,
  negative: false
};

export default SmallButton;
