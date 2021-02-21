import { BookShelfType } from "../../bookshelf.type";
import { SET_BOOKSHELVES } from "../action-type";
import {
  BookshelfActionType,
  BookshelfReducerType,
} from "../bookshelfState.type";

type ReducerType = BookshelfReducerType["bookshelfIds"];
export const defaultState: ReducerType = [];

function bookshelfIds(
  state: ReducerType = defaultState,
  action: BookshelfActionType
) {
  switch (action.type) {
    case SET_BOOKSHELVES: {
      const bookshelves = action.payload;
      return bookshelves.map((bookshelf: BookShelfType) => bookshelf.id);
    }
    default: {
      return state;
    }
  }
}

export default bookshelfIds;
