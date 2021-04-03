import { createStore, combineReducers, applyMiddleware } from "redux";
import { userAuth, getComics } from "./Reducers";
import { createBrowserHistory } from "history";
import { connectRouter, routerMiddleware } from "connected-react-router";
import thunk, { ThunkMiddleware } from "redux-thunk";
import { UserActionType, ComicAtionType } from "./ActionType";
type AppActions = UserActionType | ComicAtionType;
export const history = createBrowserHistory();
export const rootReducers = combineReducers({
  router: connectRouter(history),
  userAuth: userAuth,
  getComics: getComics,
});
export type AppState = ReturnType<typeof rootReducers>;
export const store = createStore<AppState, AppActions, {}, {}>(
  rootReducers,
  applyMiddleware(
    thunk as ThunkMiddleware<AppState, AppActions>,
    routerMiddleware(history)
  )
);
