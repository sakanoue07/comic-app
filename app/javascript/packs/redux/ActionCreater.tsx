import { SIGNUP, LOGIN, SIGNOUT } from "./ActionType";
export const signinUser = (UserState: {
  name: string;
  email: string;
  isSignedIn: boolean;
}) => {
  return {
    type: SIGNUP,
    payload: {
      name: UserState.name,
      email: UserState.email,
      isSignedIn: UserState.isSignedIn,
    },
  };
};
export const loginUser = (UserState: {
  name: string;
  email: string;
  isSignedIn: boolean;
}) => {
  return {
    type: LOGIN,
    payload: {
      name: UserState.name,
      email: UserState.email,
      isSignedIn: UserState.isSignedIn,
    },
  };
};
export const signoutUser = () => {
  return {
    type: SIGNOUT,
  };
};
