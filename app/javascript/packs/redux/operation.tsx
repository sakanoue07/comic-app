import { Action, Dispatch } from "redux";
import { AppState } from "./Store";
import { signinUser, loginUser, signoutUser } from "./ActionCreater";
import { push } from "connected-react-router";
import axios from "axios";
export const signup = (
  userName: string,
  userEmail: string,
  userPassword: string,
  userCom: string
) => {
  return async (dispatch: Dispatch<Action>, getState: () => AppState) => {
    const state = getState();
    const isSignedIn = state.userAuth.isSignedIn;
    if (!isSignedIn) {
      await axios
        .post(
          "/api/v1/users",
          {
            user: {
              username: userName,
              email: userEmail,
              password: userPassword,
              password_confirmation: userCom,
            },
          },
          { withCredentials: true }
        )
        .then((res) => {
          console.log(res.data);
          if (res.data.status === "created") {
            dispatch(
              signinUser({
                name: res.data.user.username,
                email: res.data.user.email,
                isSignedIn: true,
              })
            );
            dispatch(push("/top"));
          }
        })
        .catch((e) => console.log(e));
    }
  };
};

export const login = (userEmail: string, userPassword: string) => {
  return async (dispatch: Dispatch<Action>, getState: () => AppState) => {
    const state = getState();
    const isSignedIn = state.userAuth.isSignedIn;
    if (!isSignedIn) {
      await axios
        .post(
          "/api/v1/sessions",
          {
            session: {
              email: userEmail,
              password: userPassword,
            },
          },
          { withCredentials: true }
        )
        .then((res) => {
          console.log(res.data);
          if (res.data.status === "created") {
            dispatch(
              loginUser({
                name: res.data.user.username,
                email: res.data.user.email,
                isSignedIn: true,
              })
            );
            dispatch(push("/top"));
          }
        })
        .catch((e) => console.log(e));
    }
  };
};

export const signout = () => {
  return async (dispatch: Dispatch<Action>, getState: () => AppState) => {
    axios
      .delete("api/v1//sessions/logout", { withCredentials: true })
      .then((res) => {
        console.log(res.data);
        dispatch(signoutUser());
        dispatch(push("/"));
      })
      .catch((e) => {
        console.log(e);
      });
  };
};
