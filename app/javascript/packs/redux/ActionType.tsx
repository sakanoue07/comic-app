export const SIGNUP = "SIGNUP";
export const SIGNOUT = "SIGNOUT";
export const LOGIN = "LOGIN";
export const COMICS = "COMICS";
export const REMOVE_C = "REMOVE_C";
export const COMIC = "COMIC";
export const RE_ONE = "RE_ONE";

export interface UserState {
  name: string;
  email: string;
  isSignedIn?: boolean;
}

export interface Comics {
  comicsTitle: [];
  comicsAuthor: [];
  comicsImage: [];
  comicsPublisher: [];
  comicsKey: [];
  comicLength: number;
}

export interface Comic {
  title: string;
  image: string;
  publisher: string;
  author: string;
  pubdate: string;
  text: string;
}
interface ComicOne {
  type: typeof COMIC;
  payload: Comic;
}

interface RemoveOne {
  type: typeof RE_ONE;
  paload: Comic;
}
interface GetComic {
  type: typeof COMICS;
  payload: Comics;
}

interface RemoveComic {
  type: typeof REMOVE_C;
  payload: Comics;
}

interface Signin {
  type: typeof SIGNUP;
  payload: UserState;
}

interface Login {
  type: typeof LOGIN;
  payload: UserState;
}

interface Signout {
  type: typeof SIGNOUT;
  payload: UserState;
}

export type UserActionType = Signin | Signout | Login;
export type ComicAtionType = GetComic | RemoveComic;
export type OneComicType = ComicOne | RemoveOne;
