import React, { useState } from "react";
import { HiMoon, HiSun } from "react-icons/hi";
import { BiMenu, BiArrowBack } from "react-icons/bi";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function Header({ filters, filter, onFilterChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Wrap>
      <Btn>
        <HiSun />
      </Btn>
      <Btn2 onClick={() => navigate("/todo_list")}>
        <Img src="/buddy_logo.png" alt="logo" />
        <Title>TODO BUDDY</Title>
      </Btn2>
      <Btn>
        <BiMenu onClick={openModalHandler} />
      </Btn>
      {isOpen && (
        <ModalBackdrop>
          <ModalView>
            <Btn3>
              <BiArrowBack onClick={openModalHandler} />
            </Btn3>
            <ul>
              {filters.map((el, index) => (
                <li key={index} onClick={openModalHandler}>
                  <button onClick={() => onFilterChange(el)}>{el}</button>
                </li>
              ))}
              <li>
                <button onClick={() => navigate("/producer")}>
                  TODO BUDDY 제작자
                </button>
              </li>
            </ul>
          </ModalView>
        </ModalBackdrop>
      )}
    </Wrap>
  );
}

const Wrap = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Img = styled.img`
  width: 2rem;
  height: 2rem;
`;

const Btn = styled.button`
  display: flex;
  align-items: center;
  font-size: 2rem;
`;

const Btn2 = styled.button`
  display: flex;
  align-items: center;
`;

const Btn3 = styled.button``;

const Title = styled.h1``;

export const ModalBackdrop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const ModalView = styled.div`
  background-color: var(--color-white);
  width: 70%;
  height: 100%;
  position: absolute;
  right: 0;
`;
