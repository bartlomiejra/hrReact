import React from 'react';
import { users } from '../../data/users';
import UsersListItem from '../../molecules/UsersListItem/UsersListItem';
import styled from 'styled-components';
// import UsersListItem from './components/molecules/UsersListItem';
import { Wrapper, StyledList } from 'components/molecules/UsersList.styles';
const UsersList = () => (
  <Wrapper>
    <StyledList>
      {users.map((userData) => (
        <UsersListItem userData={userData} />
      ))}
    </StyledList>
  </Wrapper>
);

UsersList.propTypes = {};

export default UsersList;
