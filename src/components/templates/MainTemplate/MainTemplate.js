import styled from 'styled-components';
import Navigation from 'components/organisms/Navigation/Navigation';
import React from 'react';
import { Input } from 'components/atoms/Input/Input';
import { Wrapper } from 'components/templates/MainTemplate/MainTemplate.styles';
import { SearchBar } from '../../organisms/SearchBar/SearchBar';

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
