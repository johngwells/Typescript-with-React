import Child from './child';

const Parent = () => {
  return <Child color='blue' onClick={() => console.log('clicked')}/>;
};

export default Parent;
