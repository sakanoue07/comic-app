import React from "react";
import { push } from "connected-react-router";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core";
import { useSelector } from "react-redux";
import { AppState } from "../../redux/Store";
import axios from "axios";
import { ComicShow, removeComic } from "../../redux/ActionCreater";
import { useDispatch } from "react-redux";
import media from "styled-media-query";
const useStyles = makeStyles((theme) => ({
  root: {
    overflow: "scroll",
    width: "96%",
    height: "85%",
    margin: "0 auto",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "#221c1c",
  },
  grid: {
    textAlign: "center",
    alignItems: "center",
    border: "1px solid #787575",
    opacity: "0.6",
    backgroundColor: "#e9e8e8",
    transition: "all 0.4s",
    borderRadius: "10px",
    cursor: "pointer",
    margin: "0 auto",
    "&:hover": {
      opacity: "1",
      backgroundColor: "#fff",
    },
  },
}));
const Div = styled.div`
  width: 90%;
  height: 90%;
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
    width: 100%;
    height: 100%;
    border-radius: 0px;
    overflow-y: scroll;
    padding: 10px 30px 10px;
  `}
`;

const Title = styled.p`
  font-size: 17px;
  width: 214px;
  height: 52px;
  overflow: scroll;
  margin: 0 auto 10px auto;
`;

const Author = styled.p`
  margin-bottom: 10px;
  overflow: scroll;
  width: 214px;
  height: 48px;
  margin: 0 auto;
`;

const PageTitle = styled.h2`
  margin-bottom: 25px;
  margin: 0 auto;
`;

const ComicImg = styled.img`
  width: 200px;
  height: 285px;
`;

const Button = styled.p`
  background-color: #e2d1c3;
  padding: 10px 10px;
  border-radius: 10px;
  width: 50%;
  margin: 30px auto;
  opacity: 0.7;
  transition: all 0.4s;
  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`;
function Top() {
  const comicTitle = useSelector(
    (state: AppState) => state.getComics.comicsTitle
  );
  console.log(comicTitle);
  const comicAuthor = useSelector(
    (state: AppState) => state.getComics.comicsAuthor
  );
  const comicImage = useSelector(
    (state: AppState) => state.getComics.comicsImage
  );
  const comicPublisher = useSelector(
    (state: AppState) => state.getComics.comicsPublisher
  );
  const comicLength = useSelector(
    (state: AppState) => state.getComics.comicLength
  );
  const comicKey = useSelector((state: AppState) => state.getComics.comicsKey);
  const classes = useStyles();
  const dispatch = useDispatch();
  const oneComicInfo = async (isbn: string) => {
    await axios
      .post("/api/v1/comic/comicName", { isbn: isbn })
      .then((res) => {
        let text = "";
        try {
          text = res.data[0].onix.CollateralDetail.TextContent[1].Text;
        } catch {
          text = res.data[0].onix.CollateralDetail.TextContent[0].Text;
        }
        dispatch(
          ComicShow({
            title: res.data[0].summary.title,
            image: res.data[0].summary.cover,
            publisher: res.data[0].summary.publisher,
            author: res.data[0].summary.author,
            pubdate: res.data[0].summary.pubdate,
            text: text,
          })
        );
        dispatch(push("/comicName"));
      })
      .catch((e) => console.log(e));
  };
  const backSearch = () => {
    removeComic();
    dispatch(push("/search"));
  };
  return (
    <Div>
      <PageTitle>漫画一覧です</PageTitle>
      {(() => {
        let items: Array<JSX.Element> = [];
        for (let i = 0; i < comicLength; i++) {
          items.push(
            <Grid
              item
              xs={10}
              sm={4}
              md={3}
              key={comicKey[i]}
              className={classes.grid}
              onClick={() => oneComicInfo(comicKey[i])}
            >
              <Title>{comicTitle[i]}</Title>
              {comicImage[i] != "" ? (
                <ComicImg src={comicImage[i]} alt={comicTitle[i]} />
              ) : (
                <ComicImg
                  src="https://saketorock.com/wp-content/uploads/2014/09/no-img.png"
                  alt={comicTitle[i]}
                />
              )}
              {comicAuthor[i] != "" ? (
                <Author>{comicAuthor[i]}</Author>
              ) : (
                <Author>データがありませんでした</Author>
              )}
            </Grid>
          );
        }
        return (
          <Grid container className={classes.root}>
            {items}
          </Grid>
        );
      })()}
      <Button onClick={backSearch}>検索に戻る</Button>
    </Div>
  );
}

export default Top;
