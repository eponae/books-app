import { BookShelfType } from "../../bookshelf.type";
import { SET_BOOKSHELVES, SET_SELECTED_BOOKSHELF } from "../action-types";
import { BookshelfActionType } from "../bookshelfState.type";

type ReducerType = { selectedBookshelf: BookShelfType["slug"] | null };
const defaultState: ReducerType = { selectedBookshelf: null };

export function selectedBookshelf(
  state: ReducerType = defaultState,
  action: BookshelfActionType
) {
  switch (action.type) {
    case SET_BOOKSHELVES: {
      const bookshelves = action.payload;
      return { selectedBookshelf: bookshelves[0].slug };
    }
    case SET_SELECTED_BOOKSHELF: {
      const bookshelfSlug = action.payload;
      return { selectedBookshelf: bookshelfSlug };
    }
    default: {
      return state;
    }
  }
}
