import React, { useState } from "react";
import Header from "../components/Header";
import { useSelector } from "react-redux";
import TodoList from "../components/TodoList";
import styled from "styled-components";
import { useEffect } from "react";
import axios from "axios";

const filters = ["메인 페이지", "할 일 목록", "할 일 완료"];
export default function Main() {
  // const [todo, setTodo] = useState([]);
  const [filter, setFilter] = useState(filters[0]);
  // const todo = useSelector((state) => state.todo);
  // const todoData = async () => {
  //   try {
  //     const todoList = await (
  //       await axios.get("http://localhost:3001/todo")
  //     ).data;
  //     setTodo(todoList);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  // useEffect(() => {
  //   todoData();
  // }, []);

  return (
    <Wrap>
      <Header filters={filters} filter={filter} onFilterChange={setFilter} />
      <TodoList filter={filter} />
    </Wrap>
  );
}

const Wrap = styled.div`
  position: relative;
  height: 100%;
`;
