import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

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
        <Btn onClick={main}>로그인</Btn>
        <Btn onClick={welcome}>나가기</Btn>
      </div>
    </div>
  );
}

const Btn = styled.button`
  background-color: ${(props) => props.theme.bgBtn};
  color: ${(props) => props.theme.rootBg};
  font-size: 24px;
  border-radius: 0.8rem;
  padding: 1rem;
  margin: 1rem;
  width: 20rem;
`;
