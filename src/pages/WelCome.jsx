import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function WelCome() {
  const navigate = useNavigate();
  const login = () => {
    navigate("/login");
  };
  const signup = () => {
    navigate("/signup");
  };
  return (
    <Wrap>
      <ImgWrap>
        <Img src="/buddy_logo.png" alt="logo" />
        <Title>
          buddy
          <br />
          BUDDY
        </Title>
      </ImgWrap>
      <BtnBox>
        <Btn onClick={login}>로그인</Btn>
        <Btn onClick={signup}>회원가입</Btn>
      </BtnBox>
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const ImgWrap = styled.div`
  display: flex;
  margin-bottom: 10rem;
`;

const Title = styled.h1`
  display: flex;
  align-items: center;
  font-size: 48px;
`;

const BtnBox = styled.div`
  display: flex;
  flex-direction: column;
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

const Img = styled.img`
  width: 100px;
  height: 100px;
`;
