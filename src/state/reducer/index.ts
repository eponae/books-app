import { combineReducers } from "redux";
import { formReducer, formInitialState } from "../../domain/form/state/reducer";
import {
  bookshelfInitialState,
  bookshelfReducer,
} from "../../domain/bookshelf/state/reducer";
import {
  authorInitialState,
  authorReducer,
} from "../../domain/author/state/reducer";
import {
  errorInitialState,
  errorReducer,
} from "../../domain/error/state/reducer";

export const appInitialState = {
  ...formInitialState,
  ...bookshelfInitialState,
  ...authorInitialState,
  ...errorInitialState,
};

const reducers = combineReducers({
  ...formReducer,
  ...bookshelfReducer,
  ...authorReducer,
  ...errorReducer,
});
export default reducers;
