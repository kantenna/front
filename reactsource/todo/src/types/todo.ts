export const initialTodos = [
  {
    id: 1,
    title: 'react 기초 알아보기',
    completed: true,
    important: true,
    createDate: new Date(),
    updateDate: new Date(),
  },
  {
    id: 2,
    title: '컴포넌트 스타일링 공부',
    completed: false,
    important: false,
    createDate: new Date(),
    updateDate: new Date(),
  },
  {
    id: 3,
    title: '일정관리 앱 작성',
    completed: false,
    important: true,
    createDate: new Date(),
    updateDate: new Date(),
  },
];

export type Todo = {
  id: number;
  title: string;
  completed: boolean;
  important: boolean;
  createDate: Date;
  updateDate: Date;
};

// create 용(직접)
export type TodoCreate = Omit<Todo, 'createDate' | 'updateDate'>;

// 서버 연동 데이터 타입
// 입력 / 수정
export type TodoInsert = Omit<Todo, 'id' | 'createDate' | 'updateDate'>;
// 삭제 : id(number)
// 조회(서버로부터 넘어오는 데이터 담기) : Todo 그대로

// 조회요청시 parameter 타입
export type boolParam = '' | 'true' | 'false';
export function toCompleteQuery(completed: boolean): boolParam {
  return completed ? 'true' : 'false';
}

// TodoList에서 사용할 props 타입
export type Todos = {
  todos: Todo[];
  onDeleteTodo: (id: number) => void;
  onChangeTodo: (todo: TodoInsert) => void;
};
