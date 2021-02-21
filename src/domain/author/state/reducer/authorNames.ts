import { RESET_AUTHORS, SET_AUTHORS } from "../action-type";
import { AuthorActionType, AuthorReducerType } from "../authorState.type";

type ReducerType = AuthorReducerType["authorNames"];
export const defaultState: ReducerType = {};

function authorNames(
  state: ReducerType = defaultState,
  action: AuthorActionType
) {
  switch (action.type) {
    case RESET_AUTHORS: {
      return defaultState;
    }
    case SET_AUTHORS: {
      const authors = action.payload;
      const newAuthorNames = authors.reduce((acc: ReducerType, author) => {
        acc[author.id] = author.name;
        return acc;
      }, {});
      return { ...state, ...newAuthorNames };
    }
    default: {
      return state;
    }
  }
}

export default authorNames;
