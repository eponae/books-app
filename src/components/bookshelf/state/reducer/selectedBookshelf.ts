import { SET_BOOKSHELVES, SET_SELECTED_BOOKSHELF } from "../action-types";
import {
  BookshelfActionType,
  BookshelfReducerType,
} from "../bookshelfState.type";

type ReducerType = BookshelfReducerType["selectedBookshelf"];
const defaultState: ReducerType = null;

export function selectedBookshelf(
  state: ReducerType = defaultState,
  action: BookshelfActionType
) {
  switch (action.type) {
    case SET_BOOKSHELVES: {
      const bookshelves = action.payload;
      return bookshelves[0].slug;
    }
    case SET_SELECTED_BOOKSHELF: {
      const bookshelfSlug = action.payload;
      return bookshelfSlug;
    }
    default: {
      return state;
    }
  }
}
