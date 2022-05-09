import React from 'react';
import styled from 'styled-components';
import { ReactComponent as DeleteIcon } from 'assets/icons/delete-icon.svg';
const StyledButton = styled.button`
  width: 25px;
  height: 25px;
  background-color: #f115f5;
  border: none;
  border-radius: 50px;

  svg {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
  }
`;
const Button = () => (
  <StyledButton>
    <DeleteIcon />
  </StyledButton>
);
