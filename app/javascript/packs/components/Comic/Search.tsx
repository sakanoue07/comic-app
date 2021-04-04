import React, { useState, useEffect } from "react";
import { signout } from "../../redux/operation";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";
import styled from "styled-components";
import axios from "axios";
import { getComics } from "../../redux/ActionCreater";
import media from "styled-media-query";
import Loading from "./Loading";

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

const Input = styled.input`
  font-size: 15px;
`;
const Button = styled.p`
  background-color: #e2d1c3;
  padding: 10px 10px;
  border-radius: 10px;
  opacity: 0.7;
  width: 50%;
  margin: 0 auto;
  transition: all 0.4s;
  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`;
const BackButton = styled.p`
  background-color: #fff;
  color: #dfb999;
  border: 3px solid #dfb999;
  padding: 10px 10px;
  border-radius: 10px;
  width: 50%;
  margin: 30px auto;
  &:hover {
    cursor: pointer;
  }
`;
const Column = styled.div`
  display: inline-block;
  margin: 10px auto;
  width: 80%;
`;

interface ComicTitle {
  comicTitle: [];
}
function Search() {
  const [comicDate, setComitDate] = useState("");
  const [comicIsbn, setComicIsbn] = useState([]);
  const [open, setOpen] = useState<boolean>(false);

  const openModal = () => {
    setOpen((prev) => !prev);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    const getComic = async () => {
      if (comicIsbn.length !== 0) {
        await axios
          .post("/api/v1/comic/openDB", { comicIsbn: comicIsbn })
          .then((res) => {
            console.log(res.data.length);
            dispatch(
              getComics({
                comicsTitle: res.data.map(
                  (comic: any) => comic[0].summary.title
                ),
                comicsAuthor: res.data.map(
                  (comic: any) => comic[0].summary.author
                ),
                comicsImage: res.data.map(
                  (comic: any) => comic[0].summary.cover
                ),
                comicsPublisher: res.data.map(
                  (comic: any) => comic[0].summary.publisher
                ),
                comicsKey: res.data.map(
                  (comic: any) => comic[0].onix.RecordReference
                ),
                comicLength: res.data.length,
              })
            );
            dispatch(push("/top"));
          });
      }
    };
    getComic();
  }, [comicIsbn]);
  const handleChangeDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComitDate(e.target.value);
  };
  const getComic = async (comicDate: string) => {
    let container = comicDate.split("-");
    let year = container[0];
    let month = container[1];
    await axios
      .post("/api/v1/comic", {
        comic: {
          year: year,
          month: month,
        },
      })
      .then((res) => {
        setComicIsbn(res.data.list.map((isbn: any) => isbn[3]));
      })
      .catch((e) => console.log(e));
  };
  return (
    <>
      <Loading open={open} setOpen={setOpen} />
      <Div>
        <Column>
          <h2>漫画検索</h2>
          <p>検索に時間がかかります。</p>
          <Input
            type="month"
            name="example2"
            value={comicDate}
            onChange={handleChangeDate}
          />
          <p>2015~2021の5月くらいまで</p>
        </Column>
        <Column>
          <Button
            onClick={() => {
              getComic(comicDate), openModal();
            }}
          >
            Search Comic
          </Button>
        </Column>
        <Column>
          <BackButton onClick={() => dispatch(signout())}>Sign out</BackButton>
        </Column>
      </Div>
    </>
  );
}

export default Search;
