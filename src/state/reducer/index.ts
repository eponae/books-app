import { combineReducers } from "redux";
import { formReducer } from "../../domain/form/state/reducer";
import { bookshelfReducer } from "../../domain/bookshelf/state/reducer";
import { authorReducer } from "../../domain/author/state/reducer";

const reducers = combineReducers({
  ...formReducer,
  ...bookshelfReducer,
  ...authorReducer,
});
export default reducers;
