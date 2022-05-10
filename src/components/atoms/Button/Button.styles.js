import styled from 'styled-components';

export const StyledButton = styled.button`
  width: 25px;
  height: 25px;
  background-color: ${({ theme }) => theme.colors.grey};
  border: none;
  border-radius: 50px;

  svg {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
  }
`;
