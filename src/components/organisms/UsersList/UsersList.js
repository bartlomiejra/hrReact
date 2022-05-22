import React from 'react';
import { users } from 'data/users';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { StyledList, Wrapper } from './UsersList.styles';

const mockApi = (success) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (users) {
        resolve([...users]);
      } else {
        reject({ message: 'Error' });
      }
    }, 2000);
  });
};
class UsersList extends React.Component {
  state = {
    users: [],
    isLoading: false,
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    mockApi().then((data) => {
      this.setState({ isLoading: false });
      this.setState({ users: data });
    });
  }

  componentDidUpdate(prevState) {
    if (prevState.isLoading !== this.state.isLoading) {
      console.log('Loading state has changed');
    }
  }

  deleteUser = (name) => {
    const filteredUsers = this.state.users.filter((user) => user.name !== name);
    this.setState({ users: filteredUsers });
  };
  render() {
    return (
      <Wrapper>
        <h1>{this.state.isLoading ? 'Loading' : 'Users List'} </h1>
        {/* <h1>{this.props.title}</h1> */}
        {/* <h1>{this.props.isUsersList ? `User's List` : 'Students List'}</h1> */}
        <button onClick={this.toggleListTitle}>Change title</button>
        <StyledList>
          {this.state.users.map((userData, i) => (
            <UsersListItem deleteUser={this.deleteUser} index={i} key={userData.name} userData={userData} />
          ))}
        </StyledList>
      </Wrapper>
    );
  }
}
export default UsersList;
