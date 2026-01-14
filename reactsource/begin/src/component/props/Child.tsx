// type od interface
type ChildProps = {
  name: string;
  color: string;
  age?: number;
};

function Child({ name, color, age = 20 }: ChildProps) {
  // function Child(props: ChildProps) {
  // Cannot assign to read only property 'name' of object
  // props.name += ' from Parent';
  // name += ' from Parent';

  return (
    <>
      <h1 className="text-3x1">자식 컴포넌트</h1>
      {/* <h2 className="text-x1">{props.name}</h2> */}
      {/* <h2 className="text-x1">{props.color}</h2> */}
      <h2 className="text-xl">{name}</h2>
      <h2 className="text-x1">{color}</h2>
      <h2 className="text-x1">{age}</h2>
    </>
  );
}

export default Child;
