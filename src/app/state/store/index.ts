import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/logOnly";
import thunk from "redux-thunk";

const reducer = {};
const composeEnhancer = composeWithDevTools({ features: { test: false } });
export default createStore(reducer, composeEnhancer(applyMiddleware(thunk)));
