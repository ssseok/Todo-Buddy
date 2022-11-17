import React from "react";
import { useNavigate } from "react-router-dom";

export default function WelCome() {
  const navigate = useNavigate();
  const login = () => {
    navigate("/login");
  };
  const signup = () => {
    navigate("/signup");
  };
  return (
    <div>
      <div>
        <div>
          <img src="/buddy_logo.png" alt="logo" />
        </div>
        <span>
          buddy
          <br />
          BUDDY
        </span>
      </div>
      <div>
        <button onClick={login}>로그인</button>
        <button onClick={signup}>회원가입</button>
      </div>
    </div>
  );
}
