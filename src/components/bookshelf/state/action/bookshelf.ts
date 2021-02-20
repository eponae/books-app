import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { resetAuthors } from "../../../author/state/action";
import { getBookshelvesForUser } from "../../bookshelf.api";
import { BookShelfType } from "../../bookshelf.type";
import { SET_BOOKSHELVES } from "../action-type";

type Dispatch = ThunkDispatch<{}, {}, AnyAction>;

export const setBookshelves = (bookshelves: Array<BookShelfType>) =>
  <const>{ type: SET_BOOKSHELVES, payload: bookshelves };

export const getBookshelves = () => async (dispatch: Dispatch) => {
  dispatch(resetAuthors());
  const bookshleves = await getBookshelvesForUser();
  dispatch(setBookshelves(bookshleves));
};
