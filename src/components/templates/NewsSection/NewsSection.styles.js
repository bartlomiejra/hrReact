import styled from 'styled-components';
import { ViewWrapper } from '../../molecules/ViewWrapper/ViewWrapper';

export const Wrapper = styled.div`
  grid-row: 1/3;
  grid-column: 3/3;
  border-left: 1px solid ${({ theme }) => theme.colors.darkPurple};
  display: flex;
  flex-direction: column;
  justify-context: flex-start;
  align-items: flex-start;
  padding: 50px;
`;

export const NewsSectionHeader = styled.h2`
  margin-right: auto;
  color: ${({ theme }) => theme.colors.darkGrey};
`;

export const ArticleWrapper = styled(ViewWrapper)`
  margin: 30px 0;
  width: 100%;
  max-width: unset;
  border-radius: 12px;
  color: ${({ theme }) => theme.colors.darkGrey};
  p {
    line-height: 1.6;
  }
`;

export const TittleWrapper = styled.div`
  h3 {
    font-size: ${({ theme }) => theme.fontSize.l};
  }
  p {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;
