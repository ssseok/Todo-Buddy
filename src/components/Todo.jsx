import React from "react";
import { FaTrashAlt } from "react-icons/fa";

export default function Todo({ todo, onDelete, onCheck }) {
  const { text, status } = todo;
  console.log(text);

  const handleDelete = () => onDelete(todo);

  const handleChange = (e) => {
    const status = e.target.checked ? "할 일 완료" : "할 일 목록";
    onCheck({ ...todo, status });
  };
  return (
    <li>
      <input
        type="checkbox"
        id="checkbox"
        checked={status === "할 일 완료"}
        onChange={handleChange}
      />
      <label htmlFor="checkbox">{text}</label>
      <button onClick={handleDelete}>
        <FaTrashAlt />
      </button>
    </li>
  );
}
