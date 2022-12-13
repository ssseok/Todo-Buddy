import React, { useEffect, useState } from "react";
import Todo from "../components/Todo";
import { useDispatch } from "react-redux";
import TodoAdd from "../components/TodoAdd";
import { add, check, remove, update } from "../store";
import styled from "styled-components";
import axios from "axios";

export default function TodoList({ filter }) {
  // const dispatch = useDispatch();
  const [todos, setTodos] = useState(() => readTodo());

  // const handleAdd = (todo) => {
  //   axios.post("http://localhost:3001/todo", todo).then(() => {
  //     setTodos((prev) => [...prev, todo]);
  //   });
  // };
  // const handleAdd = (todo) => dispatch(add(todo));

  // const handleCheck = (check) =>
  //   setTodo(todo.map((t) => (t.id === check.id ? check : t)));

  // const handleCheck = (checked) => dispatch(check(checked));

  // const handleDelete = (deleted) => {
  //   axios.delete(`http://localhost:3001/todo/${deleted}`).then(() => {
  //     setTodo(todo.filter((t) => t.id !== deleted.id));
  //     window.location.reload();
  //   });
  // };

  // const handleDelete = (deleted) => dispatch(remove(deleted));

  // const handleUpdate = (updated, text) => dispatch(update(updated, text));

  const handleAdd = (todo) => setTodos((prev) => [...prev, todo]);
  const handleCheck = (updated) =>
    setTodos(todos.map((t) => (t.id === updated.id ? updated : t)));
  const handleDelete = (deleted) =>
    setTodos(todos.filter((t) => t.id !== deleted.id));
  const handleUpdate = (updated, text) => {
    setTodos(todos.map((el) => (el.id === updated.id ? text : el)));
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const filtered = getFilteredItems(todos, filter);

  return (
    <Section>
      <Ul>
        {filtered.map((el) => (
          <Todo
            key={el.id}
            todo={el}
            onCheck={handleCheck}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </Ul>
      <div>
        <TodoAdd onAdd={handleAdd} />
      </div>
    </Section>
  );
}

function readTodo() {
  const todos = localStorage.getItem("todos");
  return todos ? JSON.parse(todos) : [];
}

function getFilteredItems(todos, filter) {
  if (filter === "메인 페이지") {
    return todos;
  }
  return todos.filter((todo) => todo.status === filter);
}

const Section = styled.section`
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Ul = styled.ul`
  overflow: scroll;
`;
