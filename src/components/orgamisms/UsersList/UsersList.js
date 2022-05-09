import React from 'react';
import { users } from '../../data/users';
import UsersListItem from '../../molecules/UsersListItem';
import styled from 'styled-components';
// import UsersListItem from './components/molecules/UsersListItem';
const Wrapper = styled.div`
  background-color: white;
  width: 100%;
  max-width: 500px;
  padding: 40px 30px;
  border-radius: 25px;
  box-shadow: 0px 5px 15px -10px rgba(0, 0, 0, 0.3);
`;

const StyledList = styled.ul`
list-style: none;
marging 0;
padding 0;
`;
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
