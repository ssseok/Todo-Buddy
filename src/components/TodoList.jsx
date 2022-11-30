import React from "react";
import Todo from "../components/Todo";
import { useDispatch } from "react-redux";
import TodoAdd from "../components/TodoAdd";
import { add, check, remove } from "../store";

export default function TodoList({ todo, filter }) {
  console.log(todo);
  const dispatch = useDispatch();
  const handleAdd = (todo) => {
    dispatch(add(todo));
  };
  const handleCheck = (update) => {
    dispatch(check(update));
  };
  const handleDelete = (deleted) => {
    dispatch(remove(deleted));
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
