interface ChildProps {
  color: string;
  onClick: () => void;
}

// option 1
// const Child = ({ color, onClick }: ChildProps) => {
//   return <div>{color}</div>;
// };

// option 2
const Child: React.FC<ChildProps> = ({ color, onClick }) => {
  return (
    <div>
      {color}
    <button onClick={onClick}>Change Color</button>
    </div>
  );
}

export default Child;
