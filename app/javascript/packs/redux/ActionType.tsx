export const SIGNUP = "SIGNUP";
export const SIGNOUT = "SIGNOUT";
export const LOGIN = "LOGIN";

export interface UserState {
  name: string;
  email: string;
  isSignedIn?: boolean;
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
