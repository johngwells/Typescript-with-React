import { Component } from 'react';

interface User {
  name: string;
  age: number;
}

interface UserSearchProps {
  users: User[];
}

interface UserSearchState {
  name: string;
  user: User | undefined;
}

class UserSearch extends Component<UserSearchProps> {
  state: UserSearchState = {
    name: '',
    user: undefined
  };

  onClick = () => {
    const findUser = this.props.users.find(user => {
      return (user.name === this.state.name);
    });
    this.setState({ user: findUser });
    console.log(findUser)
  }

  render() {
    const { name, user } = this.state;
    return (
      <div>
        <h1>Search</h1>
        <input
          value={name}
          onChange={e => this.setState({ name: e.target.value })}
        />
        <button onClick={this.onClick}>Search</button>

        <div>{user && 'User Found!'}</div>
        <div>{user && user.name}</div>
        <div>{user && user.age}</div>
      </div>
    );
  }
}

export default UserSearch;
