// import { Reducer, Action } from "redux";
import {
  SIGNUP,
  LOGIN,
  SIGNOUT,
  COMICS,
  REMOVE_C,
  UserState,
  UserActionType,
  Comics,
  ComicAtionType,
} from "./ActionType";

const initialUser: UserState = {
  name: "",
  email: "",
  isSignedIn: false,
};

const initialComics: Comics = {
  comicsTitle: [],
  comicsAuthor: [],
  comicsImage: [],
  comicsPublisher: [],
  comicsKey: [],
};
export const userAuth = (state = initialUser, action: UserActionType) => {
  switch (action.type) {
    case SIGNUP:
      return { ...state, ...action.payload };
    case LOGIN:
      return { ...state, ...action.payload };
    case SIGNOUT:
      return initialUser;
    default:
      return state;
  }
};

export const getComics = (state = initialComics, action: ComicAtionType) => {
  switch (action.type) {
    case COMICS:
      console.log("payload  ", action.payload);
      return { ...state, ...action.payload };
    case REMOVE_C:
      return initialComics;
    default:
      return state;
  }
};
