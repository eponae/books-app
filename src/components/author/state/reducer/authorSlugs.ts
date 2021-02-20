import { SET_AUTHORS, RESET_AUTHORS } from "../action-type";
import { AuthorActionType, AuthorReducerType } from "../authorState.type";

type ReducerType = AuthorReducerType["authorSlugs"];
const defaultState: ReducerType = {};

export function authorSlugs(
  state: ReducerType = defaultState,
  action: AuthorActionType
) {
  switch (action.type) {
    case RESET_AUTHORS: {
      return {};
    }
    case SET_AUTHORS: {
      const authors = action.payload;
      const newAuthorSlugs = authors.reduce((acc: ReducerType, author) => {
        acc[author.id] = author.slug;
        return acc;
      }, {});
      return { ...state, ...newAuthorSlugs };
    }
    default: {
      return state;
    }
  }
}
