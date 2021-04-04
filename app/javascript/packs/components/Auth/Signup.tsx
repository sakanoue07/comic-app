import React, { useState } from "react";
import { Link } from "react-router-dom";
import { signup } from "../../redux/operation";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import media from "styled-media-query";

const Div = styled.div`
  width: 60%;
  color: #000;
  top: 50%;
  left: 50%;
  padding: 40px 30px;
  position: absolute;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
  box-shadow: 8px 8px 50px #000;
  background-color: #fff;
  border-radius: 20px;
  text-align: center;
  ${media.lessThan("medium")`
    width: 90%;
    height: 90%;
    overflow-y: scroll;
  `}
`;

const H1 = styled.h1`
  font-size: 20px;
`;

const H2 = styled.h2`
  font-size: 15px;
`;

const Input = styled.input`
  font-size: 15px;
`;
const Button = styled.p`
  background-color: #e2d1c3;
  padding: 10px 10px;
  border-radius: 10px;
  opacity: 0.7;
  transition: all 0.4s;
  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`;
const Column = styled.div`
  display: inline-block;
  margin: 10px auto;
  width: 80%;
`;

function Signup() {
  const [userName, setUserName] = useState<string>("");
  const [userEmail, setUserEmail] = useState<string>("");
  const [userPassword, setUserPassword] = useState<string>("");
  const [userCom, setUserCom] = useState<string>("");

  const dispatch = useDispatch();
  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };
  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserEmail(e.target.value);
  };
  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserPassword(e.target.value);
  };
  const handleChangeCom = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserCom(e.target.value);
  };

  return (
    <Div>
      <H1>漫画検索アプリ</H1>
      <H1>Sign Up</H1>
      <Column>
        <H2>Username</H2>
        <Input type="text" placeholder="Name" onChange={handleChangeName} />
      </Column>
      <Column>
        <H2>UserEmail</H2>
        <Input type="text" placeholder="Email" onChange={handleChangeEmail} />
      </Column>
      <Column>
        <H2>Password</H2>
        <Input
          type="password"
          placeholder="Password"
          onChange={handleChangePassword}
        />
      </Column>
      <Column>
        <H2>Password confirmation</H2>
        <Input
          type="password"
          placeholder="Confirmation"
          onChange={handleChangeCom}
        />
      </Column>
      <Column>
        <Button
          onClick={() =>
            dispatch(signup(userName, userEmail, userPassword, userCom))
          }
        >
          Sign Up
        </Button>
      </Column>
    </Div>
  );
}

export default Signup;
