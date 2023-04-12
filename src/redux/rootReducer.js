import postReducer from "./post/postReducer.js"
import { combineReducers } from "redux"

const rootReducer = combineReducers({
    post: postReducer
})

export default rootReducer