import { Reducer, Action } from "redux";
import {
  SIGNUP,
  LOGIN,
  SIGNOUT,
  UserState,
  UserActionType,
} from "./ActionType";

const initialUser: UserState = {
  name: "",
  email: "",
  isSignedIn: false,
};

export const userAuth = (state = initialUser, action: UserActionType) => {
  switch (action.type) {
    case SIGNUP:
      console.log("payload  ", action.payload);
      return { ...state, ...action.payload };
    case LOGIN:
      console.log("payload", action.payload);
      return { ...state, ...action.payload };
    case SIGNOUT:
      return initialUser;
    default:
      return state;
  }
};
