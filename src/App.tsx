import './App.css';
import UserSearch from './classes/user-search';
import Events from './events/events';
import GuestList from './pages/guest-list';
import RefsSearch from './refs/refs-search';

const users = [
  { name: 'Johnny', age: 99},
  { name: 'Katelyn', age: 21},
  { name: 'Misu', age: 9}
]

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <RefsSearch />
        {/* <UserSearch users={users}/> */}
        {/* <Events /> */}
        {/* <GuestList /> */}
      </header>
    </div>
  );
}

export default App;
