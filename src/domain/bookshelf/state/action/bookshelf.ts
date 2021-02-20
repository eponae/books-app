import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { getBookshelvesForUser } from "../../bookshelf.api";
import { BookShelfType } from "../../bookshelf.type";
import { SET_BOOKSHELVES } from "../action-type";

type Dispatch = ThunkDispatch<{}, {}, AnyAction>;

export const setBookshelves = (bookshelves: Array<BookShelfType>) =>
  <const>{ type: SET_BOOKSHELVES, payload: bookshelves };

export const getBookshelves = () => async (dispatch: Dispatch) => {
  const bookshleves = await getBookshelvesForUser();
  dispatch(setBookshelves(bookshleves));
};
