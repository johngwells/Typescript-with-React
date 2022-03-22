const Events: React.FC = () => {
  // Other types of events
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
  };

  const onDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    console.log(event)
  }

  return (
    <div>
      <span>Events</span>
      <input onChange={onChange} />
      <div draggable onDragStart={onDragStart}>Drag me!</div>
    </div>
  );
};

export default Events;
