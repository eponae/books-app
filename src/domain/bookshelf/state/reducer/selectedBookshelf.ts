import { SET_SELECTED_BOOKSHELF } from "../action-type";
import {
  BookshelfActionType,
  BookshelfReducerType,
} from "../bookshelfState.type";

type ReducerType = BookshelfReducerType["selectedBookshelf"];
export const defaultState: ReducerType = null;

function selectedBookshelf(
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

export default selectedBookshelf;
