import { useState, useRef, useEffect } from 'react';

const users = [
  { name: 'Johnny', age: 99},
  { name: 'Katelyn', age: 21},
  { name: 'Misu', age: 9}
]

const RefsSearch: React.FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [name, setName] = useState('');
  const [user, setUser] = useState<{ name: string, age: number} | undefined>();

  // [] invokes only one time 
  useEffect(() => {
    if (!inputRef.current) return;
    inputRef.current.focus();
  }, []);

  const onClick = () => {
    const findUser = users.find((user) => {
      return user.name.toLowerCase() === name.toLowerCase();
    });

    setUser(findUser);
  }

  return (
    <div>
      <h1>Search</h1>
      <input ref={inputRef} value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={onClick}>Search</button>
      <div>{user && 'User Found!'}</div>
      <div>{user && user.name}</div>
      <div>{user && user.age}</div>
    </div>
  );
};

export default RefsSearch;
