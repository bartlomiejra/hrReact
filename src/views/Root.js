import UsersList from 'components/orgamisms/UsersList/UsersList';
import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as DeleteIcon } from 'assets/icons/delete-icon.svg';
import styled from 'styled-components';
import UsersListItem from 'components/molecules/UsersListItem';

const Wrapper = styled.div`
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;
const Root = () => (
  <Wrapper>
    <UsersList />
  </Wrapper>
);

export default Root;
