import React, { useState } from "react";
import Header from "../components/Header";
import { useSelector } from "react-redux";
import TodoList from "../components/TodoList";

const filters = ["메인 페이지", "할 일 목록", "할 일 완료"];
export default function Main() {
  const todo = useSelector((state) => state.todo);

  const [filter, setFilter] = useState(filters[0]);

  return (
    <div>
      <Header filters={filters} filter={filter} onFilterChange={setFilter} />
      <TodoList todo={todo} filter={filter} />
    </div>
  );
}
