import React from "react";
import ReactLoading from "react-loading";
import styled from "styled-components";
import media from "styled-media-query";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  bar: {
    margin: "30px auto",
  },
}));
const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  top: 50%;
  left: 50%;
  z-index: 9;
  position: absolute;
  transform: translate(-50%, -50%);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Div = styled.div`
  width: 30%;
  height: 30%;
  color: #000;
  top: 50%;
  left: 50%;
  padding: 40px 30px;
  position: absolute;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
  box-shadow: 8px 8px 50px #000;
  background-color: #2f2e2e;
  border-radius: 20px;
  text-align: center;
  z-index: 10;
  ${media.lessThan("medium")`
    width: 90%;
    height: 90%;
    overflow-y: scroll;
  `}
`;
const H2 = styled.h2`
  color: #fff;
  justify-content: center;
`;
const Button = styled.p`
  background-color: #f1f0ef;
  color: #000;
  padding: 10px 10px;
  border-radius: 10px;
  opacity: 0.7;
  width: 50%;
  margin: 0 auto;
  cursor: pointer;
`;

const Loading = (props: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const classes = useStyles();
  return (
    <>
      {props.open && (
        <Background>
          <Div>
            <H2>データを取得中です</H2>
            <ReactLoading type="bars" color="#41d365" className={classes.bar} />
            <Button onClick={() => props.setOpen(false)}>close</Button>
          </Div>
        </Background>
      )}
    </>
  );
};

export default Loading;
