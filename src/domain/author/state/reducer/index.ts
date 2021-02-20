import { combineReducers } from "redux";
import authorSlugs from "./authorSlugs";
import authorNames from "./authorNames";
import authorIds from "./authorIds";

export const authorReducer = {
  authors: combineReducers({
    authorIds,
    authorSlugs,
    authorNames,
  }),
};
