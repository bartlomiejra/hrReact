import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { Wrapper } from './Root.styles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Switch } from 'react-router';

import { users as usersData } from 'data/users';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import AddUser from 'views/AddUser';
import Dashboard from 'views/Dashboard';
import UsersPrivider from 'providers/UsersPrivider';
const Root = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainTemplate>
          <UsersPrivider>
            <Wrapper>
              <Routes>
                <Route path="/add-user" element={<AddUser />} />

                <Route path="/" element={<Dashboard />} />
              </Routes>
            </Wrapper>
          </UsersPrivider>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
