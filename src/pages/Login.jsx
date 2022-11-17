import React from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const welcome = () => {
    navigate("/");
  };
  const main = () => {
    navigate("/todo_list");
  };
  return (
    <div>
      <div>
        <p>로그인</p>
        <p>
          환영합니다.
          <br />
          일상들을 적어 습관이 되도록 실천하세요.
        </p>
      </div>
      <div>
        <label htmlFor="1">아이디</label>
        <input id="1" type="text" />
      </div>
      <div>
        <label htmlFor="2">비밀번호</label>
        <input id="2" type="text" />
      </div>
      <div>
        <button onClick={main}>로그인</button>
        <button onClick={welcome}>나가기</button>
      </div>
    </div>
  );
}
