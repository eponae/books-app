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

export const appInitialState = {
  ...formInitialState,
  ...bookshelfInitialState,
  ...authorInitialState,
};

const reducers = combineReducers({
  ...formReducer,
  ...bookshelfReducer,
  ...authorReducer,
});
export default reducers;
