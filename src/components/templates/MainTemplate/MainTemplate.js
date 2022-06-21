import React from 'react';
import styled from 'styled-components';
import Navigation from 'components/organisms/Navigation/Navigation';
import { Input } from 'components/atoms/Input/Input';
import { Wrapper } from 'components/templates/MainTemplate/MainTemplate.styles';

const SearchBarWrapper = styled.div`
  grid-row: 1/1;
  grid-column: 2/3;
  border-bottom: 1px solid ${({ theme }) => theme.colors.darkPurple};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 40px;

  ${Input} {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
`;

const StatusInfo = styled.div`
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: ${({ theme }) => theme.fontSize.l};
  margin-right: 40px;
  right p {
    margin: 5px;
  }
`;

const SearchBar = () => (
  <SearchBarWrapper>
    <StatusInfo>
      <p>Logged as: </p>
      <p>
        <strong>Teacher</strong>
      </p>
    </StatusInfo>
    <Input />
  </SearchBarWrapper>
);

const News = styled.div`
  grid-row: 1/3;
  grid-column: 3/3;
  border-left: 1px solid ${({ theme }) => theme.colors.darkPurple};
`;
const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <Navigation />
      <SearchBar />
      {children}
      <News>
        <p>Lorem imsum</p>
        <p>Lorem imsum</p>
        <p>Lorem imsum</p>
        <p>Lorem imsum</p>
        <p>Lorem imsum</p>
      </News>
    </Wrapper>
  );
};

export default MainTemplate;
