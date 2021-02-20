import { SET_SELECTED_BOOKSHELF } from "../action-types";
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
    case SET_SELECTED_BOOKSHELF: {
      const bookshelfId = action.payload;
      return bookshelfId;
    }
    default: {
      return state;
    }
  }
}
