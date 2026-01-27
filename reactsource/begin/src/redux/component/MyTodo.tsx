import Counter from './Counter';
import Todos from './Todos';

function MyTodo() {
  return (
    <>
      <div className="flex flex-col items-center">
        <Counter number={0}></Counter>
        <hr />
        <Todos></Todos>
      </div>
    </>
  );
}

export default MyTodo;
