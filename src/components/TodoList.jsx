import React from "react";
import Todo from "../components/Todo";
import { useDispatch } from "react-redux";
import TodoAdd from "../components/TodoAdd";
import { addTodo, checkTodo, removeTodo } from "../actions";

export default function TodoList({ todo, filter }) {
  console.log(todo);
  const dispatch = useDispatch();
  const handleAdd = (todo) => {
    dispatch(addTodo(todo));
  };
  const handleCheck = (update) => {
    dispatch(checkTodo(update));
  };
  const handleDelete = (deleted) => {
    dispatch(removeTodo(deleted));
  };

  const filtered = getFilteredItems(todo, filter);

  return (
    <section>
      <ul>
        {filtered.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            onDelete={handleDelete}
            onCheck={handleCheck}
          />
        ))}
      </ul>
      <div>
        <TodoAdd onAdd={handleAdd} />
      </div>
    </section>
  );
}

function getFilteredItems(todo, filter) {
  if (filter === "메인 페이지") {
    return todo;
  }
  return todo.filter((todo) => todo.status === filter);
}
