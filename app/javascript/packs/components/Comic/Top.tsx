import React, { useEffect } from "react";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core";
import { useSelector } from "react-redux";
import { AppState } from "../../redux/Store";

const useStyles = makeStyles((theme) => ({
  root: {
    overflow: "scroll",
    width: "96%",
    height: "96%",
    margin: "0 auto",
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
    "&:hover": {
      opacity: "1",
      backgroundColor: "#fff",
    },
  },
}));
const Div = styled.div`
  width: 960px;
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
`;

const Title = styled.p`
  font-size: 17px;
  width: 214px;
  height: 52px;
  overflow: scroll;
`;

const Author = styled.p`
  margin-bottom: 10px;
  overflow: scroll;
  width: 214px;
  height: 48px;
`;

const PageTitle = styled.h2`
  margin-bottom: 25px;
`;

const ComicImg = styled.img`
  width: 200px;
  height: 285px;
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
  const comicKey = useSelector((state: AppState) => state.getComics.comicsKey);
  const classes = useStyles();
  return (
    <Div>
      <PageTitle>漫画一覧です</PageTitle>
      {(() => {
        let items = [];
        for (let i = 0; i < 20; i++) {
          items.push(
            <Grid
              item
              xs={10}
              sm={4}
              md={3}
              key={comicKey[i]}
              className={classes.grid}
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
    </Div>
  );
}

export default Top;
