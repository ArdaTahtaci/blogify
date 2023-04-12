import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk"
import logger from "redux-logger"
import { composeWithDevTools } from "@redux-devtools/extension"
import rootReducer from "./rootReducer.js";

const store = createStore(rootReducer, {}, compose(
    applyMiddleware(logger, thunk),
    composeWithDevTools()
))

export default store


