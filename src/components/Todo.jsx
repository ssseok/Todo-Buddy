import React from "react";
import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import styled from "styled-components";

export default function Todo({ todo, onDelete, onCheck, onUpdate }) {
  const [editMode, setEditMode] = useState(false);
  const { id, text, status } = todo;
  const [newTodo, setNewTodo] = useState(text);
  const handleDelete = () => {
    onDelete(todo);
  };

  const handleChange = (e) => {
    const status = e.target.checked ? "할 일 완료" : "할 일 목록";
    onCheck({ ...todo, status });
  };

  const handleToEditMode = () => {
    setEditMode((prev) => !prev);
  };

  const handleUpdate = () => {
    if (newTodo.trim().length === 0) return;
    onUpdate(todo, newTodo.trim());
    handleToEditMode();
  };

  return (
    <Li>
      <input
        type="checkbox"
        id="checkbox"
        checked={status === "할 일 완료"}
        onChange={handleChange}
      />
      <label htmlFor="checkbox"></label>
      {editMode ? (
        <>
          <input
            type="text"
            defaultValue={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <button onClick={handleUpdate}>수정완료</button>
          <button onClick={handleToEditMode}>수정취소</button>
        </>
      ) : (
        <>
          {text}
          <button onClick={handleToEditMode}>수정</button>
        </>
      )}
      <button onClick={handleDelete}>
        <FaTrashAlt />
      </button>
    </Li>
  );
}

const Li = styled.li`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
`;
