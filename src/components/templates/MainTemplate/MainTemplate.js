import styled from 'styled-components';
import Navigation from 'components/organisms/Navigation/Navigation';
import React from 'react';
import { Input } from 'components/atoms/Input/Input';
import { Wrapper } from 'components/templates/MainTemplate/MainTemplate.styles';
import { SearchBar } from '../../organisms/SearchBar/SearchBar';
import NewsSection from '../NewsSection/NewsSection';

const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <Navigation />
      <SearchBar />
      {children}
      <NewsSection />
    </Wrapper>
  );
};

export default MainTemplate;
