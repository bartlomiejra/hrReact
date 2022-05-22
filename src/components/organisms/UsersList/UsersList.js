import React from 'react';
import { users } from 'data/users';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { StyledList, Wrapper } from './UsersList.styles';

class UsersList extends React.Component {
  state = {
    isUsersList: true,
  };

  toggleListTitle = () => {
    this.setState((prevState) => ({ isUsersList: prevState.isUsersList }));
  };
  render() {
    //jeśli chcsz dokonać dstrokturyzacji w klasowym komonecie to najlepiej użyć desturkturyzacji wewnatrz funkcji render:
    const { title } = this.props;
    // jeśli trzeba coś wyciągnać ze stanu to:
    const { isUsersList } = this.state;
    //w ten sposób można wykorzystywać krótszych form w jsx, przykład poniżej w pierwszym h1
    return (
      <Wrapper>
        <h1>{title}</h1>
        <h1>{this.props.title}</h1>
        <h1>{this.props.isUsersList ? `User's List` : 'Students List'}</h1>
        <button onClick={this.toggleListTitle}>Change title</button>
        <StyledList>
          {users.map((userData, i) => (
            <UsersListItem index={i} key={userData.name} userData={userData} />
          ))}
        </StyledList>
      </Wrapper>
    );
  }
}
export default UsersList;
