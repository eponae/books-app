import { combineReducers } from "redux";
import { formReducer } from "../../components/form/state/reducer";
import { bookshelfReducer } from "../../components/bookshelf/state/reducer";

const reducers = combineReducers({
  ...formReducer,
  ...bookshelfReducer,
});
export default reducers;
