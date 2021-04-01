import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../redux/operation";
import styled from "styled-components";

const Div = styled.div`
  width: 500px;
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
  const [userEmail, setUserEmail] = useState<string>("");
  const [userPassword, setUserPassword] = useState<string>("");
  const dispatch = useDispatch();

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserEmail(e.target.value);
  };
  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserPassword(e.target.value);
  };
  return (
    <Div>
      <H1>Log In</H1>
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
        <Link to="/signup">Signup</Link>
      </Column>
      <Column>
        <Button onClick={() => dispatch(login(userEmail, userPassword))}>
          Log In!
        </Button>
      </Column>
    </Div>
  );
}

export default Signup;
