import React, { useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

export default function TodoAdd({ onAdd }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length === 0) {
      return;
    }
    onAdd({ id: uuidv4(), text, status: "할 일 목록" });
    setText("");
  };
  const handleChange = (e) => {
    setText(e.target.value);
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="할 일을 입력하세요."
        value={text}
        onChange={handleChange}
      />
      <button>Add</button>
    </Form>
  );
}

const Form = styled.form`
  display: flex;
  justify-content: space-between;
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
`;
