import {
  SIGNUP,
  LOGIN,
  SIGNOUT,
  COMICS,
  REMOVE_C,
  COMIC,
  RE_ONE,
  Comic,
} from "./ActionType";
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
export const removeComic = () => {
  return {
    type: REMOVE_C,
  };
};

export const getComics = (Comics: {
  comicsTitle: [];
  comicsAuthor: [];
  comicsImage: [];
  comicsPublisher: [];
  comicsKey: [];
  comicLength: number;
}) => {
  return {
    type: COMICS,
    payload: {
      comicsTitle: Comics.comicsTitle,
      comicsAuthor: Comics.comicsAuthor,
      comicsImage: Comics.comicsImage,
      comicsPublisher: Comics.comicsPublisher,
      comicsKey: Comics.comicsKey,
      comicLength: Comics.comicLength,
    },
  };
};

export const ComicShow = (Comic: Comic) => {
  return {
    type: COMIC,
    payload: {
      title: Comic.title,
      image: Comic.image,
      author: Comic.author,
      publisher: Comic.publisher,
      pubdate: Comic.pubdate,
      text: Comic.text,
    },
  };
};
export const ReOne = () => {
  return {
    type: RE_ONE,
  };
};
