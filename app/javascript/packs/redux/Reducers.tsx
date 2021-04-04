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
  Comic,
  OneComicType,
  COMIC,
  RE_ONE,
} from "./ActionType";

const initialUser: UserState = {
  name: "",
  email: "",
  isSignedIn: false,
};

const initialComic: Comic = {
  title: "",
  image: "",
  publisher: "",
  author: "",
  pubdate: "",
  text: "",
};
const initialComics: Comics = {
  comicsTitle: [],
  comicsAuthor: [],
  comicsImage: [],
  comicsPublisher: [],
  comicsKey: [],
  comicLength: 0,
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
      return { ...state, ...action.payload };
    case REMOVE_C:
      return initialComics;
    default:
      return state;
  }
};

export const oneComic = (state = initialComic, action: OneComicType) => {
  switch (action.type) {
    case COMIC:
      console.log("oneComic", action.payload);
      return { ...state, ...action.payload };
    case RE_ONE:
      return initialComic;
    default:
      return state;
  }
};
