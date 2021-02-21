import { combineReducers } from "redux";
import authorSlugs, {
  defaultState as authorSlugsDefaultState,
} from "./authorSlugs";
import authorNames, {
  defaultState as authorNamesDefaultState,
} from "./authorNames";
import authorIds, { defaultState as authorIdsDefaultState } from "./authorIds";

export const authorInitialState = {
  authors: {
    authorIds: authorIdsDefaultState,
    authorSlugs: authorSlugsDefaultState,
    authorNames: authorNamesDefaultState,
  },
};

export const authorReducer = {
  authors: combineReducers({
    authorIds,
    authorSlugs,
    authorNames,
  }),
};
