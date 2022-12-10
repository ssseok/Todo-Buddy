import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function SignUp() {
  const navigate = useNavigate();
  const welcome = () => {
    navigate("/");
  };
  const login = () => {
    navigate("/login");
  };
  return (
    <Wrap>
      <TextBox>
        <Title>회원가입</Title>
        <p>
          환영합니다.
          <br />
          일상들을 적어 습관이 되도록 실천하세요.
        </p>
      </TextBox>
      <form>
        <InputBox>
          <LabelBox>
            <Label htmlFor="ID">아이디</Label>
            <Input
              name="ID"
              id="ID"
              type="text"
              placeholder="아이디를 입력해주세요."
            />
          </LabelBox>
          <LabelBox>
            <Label htmlFor="NM">닉네임</Label>
            <Input
              id="NM"
              name="NN"
              type="text"
              placeholder="닉네임을 입력해주세요."
            />
          </LabelBox>
          <LabelBox>
            <Label htmlFor="PW">비밀번호</Label>
            <Input
              id="PW"
              name="PW"
              type="password"
              placeholder="비밀번호를 입력해주세요."
            />
          </LabelBox>
          <LabelBox>
            <Label htmlFor="PW2">비밀번호 확인</Label>
            <Input
              id="PW2"
              name="PW2"
              type="password"
              placeholder="비밀번호를 입력해주세요."
            />
          </LabelBox>
        </InputBox>
        <LoinBox>
          <Btn onClick={login}>회원가입</Btn>
          <Btn onClick={welcome}>나가기</Btn>
        </LoinBox>
      </form>
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 1rem;
`;

const TextBox = styled.div`
  padding: 3rem 3rem 0 3rem;
`;

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem 3rem 0 3rem;
`;

const Input = styled.input`
  border-bottom: 2px solid black;
  width: 100%;
  padding: 5px;
  margin-bottom: 1rem;
`;

const LabelBox = styled.div`
  margin-bottom: 0.5rem;
`;

const LoinBox = styled.div`
  text-align: center;
`;

const Label = styled.label`
  color: ${(props) => props.theme.bgBtn};
  font-weight: bold;
`;

const Btn = styled.button`
  background-color: ${(props) => props.theme.bgBtn};
  color: ${(props) => props.theme.rootBg};
  font-size: 24px;
  border-radius: 0.8rem;
  padding: 1rem;
  margin: 1rem;
  width: 20rem;
`;
