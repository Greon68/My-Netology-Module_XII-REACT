import { combineReducers, createStore } from "redux";
import { likesReduser } from "./reduser";

const reducer = combineReducers({
    likesRd: likesReduser
})

export const store = createStore(reducer)

// import { combineReducers, createStore } from "redux";
// import { likeReducer } from "./reducers";

// // const reducer = combineReducers

// const reducer = combineReducers({
//   // likes: likeReducer,
//   likesRd: likeReducer,
// });

// export const store = createStore(reducer);