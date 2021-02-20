import { combineReducers } from "redux";
import { formReducer } from "../../components/form/state/reducer";
import { bookshelfReducer } from "../../components/bookshelf/state/reducer";
import { authorReducer } from "../../components/author/state/reducer";

const reducers = combineReducers({
  ...formReducer,
  ...bookshelfReducer,
  ...authorReducer,
});
export default reducers;
