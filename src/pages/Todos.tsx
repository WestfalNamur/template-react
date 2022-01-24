import type { NextPage } from "next";

import TodoList from "../features/todos/TodoList";

const Todos: NextPage = () => {
  return (
    <div className="bg-slate-800 grid place-items-center h-screen">
      <TodoList />
    </div>
  );
};

export default Todos;
