import { RESET_AUTHORS, SET_AUTHORS } from "../action-type";
import { AuthorActionType, AuthorReducerType } from "../authorState.type";

type ReducerType = AuthorReducerType["authorIds"];
export const defaultState: ReducerType = [];

function authorIds(
  state: ReducerType = defaultState,
  action: AuthorActionType
) {
  switch (action.type) {
    case RESET_AUTHORS: {
      return defaultState;
    }
    case SET_AUTHORS: {
      const authors = action.payload;
      const newAuthorIds = authors.reduce((acc: ReducerType, author) => {
        if (!state.includes(author.id)) {
          acc.push(author.id);
        }
        return acc;
      }, []);

      return state.concat(newAuthorIds);
    }
    default: {
      return state;
    }
  }
}

export default authorIds;
