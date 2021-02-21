import { SET_BOOKSHELF_FORM_COUNT } from "../action-type";
import {
  BookshelfActionType,
  BookshelfReducerType,
} from "../bookshelfState.type";

type ReducerType = BookshelfReducerType["bookshelfFormCount"];
const defaultState: ReducerType = {};

function bookshelfFormCount(
  state: ReducerType = defaultState,
  action: BookshelfActionType
) {
  switch (action.type) {
    case SET_BOOKSHELF_FORM_COUNT: {
      const { bookshelfId, formCount } = action.payload;
      return { ...state, [bookshelfId]: formCount };
    }
    default: {
      return state;
    }
  }
}

export default bookshelfFormCount;
