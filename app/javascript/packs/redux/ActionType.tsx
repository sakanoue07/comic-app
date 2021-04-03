export const SIGNUP = "SIGNUP";
export const SIGNOUT = "SIGNOUT";
export const LOGIN = "LOGIN";
export const COMICS = "COMICS";
export const REMOVE_C = "REMOVE_C";
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
