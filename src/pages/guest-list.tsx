import { useState } from 'react';

import Search from './search';

const GuestList: React.FC = () => {
  const [name, setName] = useState('');
  const [guests, setGuests] = useState<string[]>([]);

  const onClick = () => {
    setName('');
    setGuests([...guests, name]);
  }

  return (
    <div>
      <h3>Guest List</h3>
      <Search />
      <input value={name} onChange={e => setName(e.target.value)} />
      <button onClick={onClick}>Add Guset</button>
      <ul>
        {guests.map(name => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default GuestList;
