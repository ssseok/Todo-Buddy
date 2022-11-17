import React, { useState } from "react";
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
    <form action="" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="할 일을 입력하세요."
        value={text}
        onChange={handleChange}
      />
      <button>Add</button>
    </form>
  );
}
