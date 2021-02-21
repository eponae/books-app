import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { getBookshelvesForUser } from "../../bookshelf.api";
import { BookShelfType } from "../../bookshelf.type";
import { SET_BOOKSHELF_FORM_COUNT, SET_BOOKSHELVES } from "../action-type";

type Dispatch = ThunkDispatch<{}, {}, AnyAction>;

export const setBookshelves = (bookshelves: Array<BookShelfType>) =>
  <const>{ type: SET_BOOKSHELVES, payload: bookshelves };

export const setBookshelfFormCount = (bookshelfId: string, formCount: number) =>
  <const>{
    type: SET_BOOKSHELF_FORM_COUNT,
    payload: { bookshelfId, formCount },
  };

export const getBookshelves = () => async (dispatch: Dispatch) => {
  const { data: bookshleves } = await getBookshelvesForUser();
  dispatch(setBookshelves(bookshleves));
};
