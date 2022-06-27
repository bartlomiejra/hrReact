import styled from 'styled-components';
import { Input } from 'components/atoms/Input/Input';

export const SearchBarWrapper = styled.div`
  grid-row: 1/1;
  grid-column: 2/3;
  border-bottom: 1px solid ${({ theme }) => theme.colors.darkPurple};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 40px;

  ${Input} {
    font-size: ${({ theme }) => theme.fontSize.xl};
    width: 100px;
    max-width: 350px;
    border: 2px solod ${({ theme }) => theme.colors.lightPurple};
  }
`;

export const StatusInfo = styled.div`
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: ${({ theme }) => theme.fontSize.l};
  margin-right: 40px;
  right p {
    margin: 5px;
  }
`;
