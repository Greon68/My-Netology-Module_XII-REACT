import { likeReducer } from "./reducer"
import { combineReducers, createStore } from "redux";

const reducer = combineReducers({
    likesRd: likeReducer
})

export const store = createStore(reducer)