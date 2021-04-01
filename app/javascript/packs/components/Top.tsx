import React, { useState } from "react";
import { Link } from "react-router-dom";
import { signout } from "../redux/operation";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import axios from "axios";

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

function Top() {
  const [comicDate, setComitDate] = useState("");
  const [comicInfo, setComicInfo] = useState([]);
  const dispatch = useDispatch();

  const handleChangeDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComitDate(e.target.value);
  };
  const getComic = async (comicDate: string) => {
    let container = comicDate.split("-");
    let year = container[0];
    let month = container[1];
    await axios
      .get(
        `https://books.rakuten.co.jp/event/book/comic/calendar/${year}/${month}/js/booklist.json`,
        { withCredentials: true }
      )
      .then((res) => {
        setComicInfo(res.data.list);
        console.log(res.data);
      });
  };
  return (
    <Div>
      <Column>
        <Input
          type="month"
          name="example2"
          value={comicDate}
          onChange={handleChangeDate}
        />
      </Column>
      <Column>
        <Button onClick={() => getComic(comicDate)}>Search Comic</Button>
      </Column>
      <p onClick={() => dispatch(signout())}>Sign out</p>
      <Link to="/signup">SignUp</Link>
    </Div>
  );
}

export default Top;
