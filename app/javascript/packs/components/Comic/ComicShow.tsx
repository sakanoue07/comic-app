import React from "react";
import Grid from "@material-ui/core/Grid";
import { useSelector, useDispatch } from "react-redux";
import { push } from "connected-react-router";
import { ReOne } from "../../redux/ActionCreater";
import { AppState } from "../../redux/Store";
import styled from "styled-components";
import media from "styled-media-query";
const Div = styled.div`
  width: 90%;
  height: auto;
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
  `}
`;

const ComicImg = styled.img`
  width: 80%;
  height: 90%;
  ${media.lessThan("medium")`
    width: 70%;
    height: 80%;
  `}
`;
const ComicTitle = styled.h2`
  font-size: 25px;
  margin: 10px auto;
  color: #6b6969;
  border-bottom: 1px solid #a3a0a0;
  width: 90%;
  padding-bottom: 20px;
  ${media.lessThan("medium")`
    font-size: 20px;
    margin: 0 auto;
  `}
`;
const Pub = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto 20px auto;
  width: 90%;
  padding-bottom: 10px;
  border-bottom: 1px solid #a3a0a0;
  ${media.lessThan("medium")`
    display: inline-block;
  `}
`;

const ComicPubdate = styled.p`
  font-size: 17px;
  color: #6b6969;
`;
const ComicPublisher = styled.p`
  font-size: 17px;
  color: #6b6969;
  margin-right: 10px;
  ${media.lessThan("medium")`
    margin-bottom: 10px;
  `}
`;
const ComicAuthor = styled.p`
  font-size: 20px;
  margin: 10px auto;
  color: #6b6969;
  ${media.lessThan("medium")`
    font-size: 17px;
  `}
`;
const ComicText = styled.p`
  font-size: 20px;
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
function ComicShow() {
  const dispatch = useDispatch();
  const title = useSelector((state: AppState) => state.oneComic.title);
  const image = useSelector((state: AppState) => state.oneComic.image);
  const publisher = useSelector((state: AppState) => state.oneComic.publisher);
  const pubdate = useSelector((state: AppState) => state.oneComic.pubdate);
  const author = useSelector((state: AppState) => state.oneComic.author);
  const text = useSelector((state: AppState) => state.oneComic.text);

  console.log(title);
  const backPage = () => {
    dispatch(ReOne());
    dispatch(push("/top"));
  };
  return (
    <Div>
      <Grid container>
        <Grid item xs={12} md={4}>
          <ComicImg src={image} alt={title} />
        </Grid>
        <Grid item xs={12} md={8}>
          <ComicTitle>{title}</ComicTitle>
          <ComicAuthor>{author}</ComicAuthor>
          <Pub>
            <ComicPublisher>出版社: {publisher}</ComicPublisher>
            <ComicPubdate>発売日： {pubdate}</ComicPubdate>
          </Pub>
          <ComicText>{text}</ComicText>
          <Button onClick={backPage}>戻る</Button>
        </Grid>
      </Grid>
    </Div>
  );
}

export default ComicShow;
