import React from 'react';
import { ReactComponent as DeleteIcon } from 'assets/icons/delete-icon.svg';
import { StyledButton } from './Button.styles';

// 'click' onClick
// 'mousenter'onMouseEnter

//react.createElement('button', { onClick: () => alert('clicked') }, 'Click me');

const Button = (props) => (
  <StyledButton {...props}>
    <DeleteIcon />
  </StyledButton>
);

export default Button;
