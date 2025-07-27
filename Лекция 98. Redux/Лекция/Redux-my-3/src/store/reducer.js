import { addLikes, reserLikes } from "./actioncreators";
import { ADD_LIKES, RESET_LIKES } from "./actionTypes";
const initialState = {
    likes: 0 
}


export const likeReducer = (state = initialState , action) => {
    switch(action.type) {
        case ADD_LIKES :
            return {
                ...state,
                likes: state.likes + action.payload.value
            };
        case RESET_LIKES :
            return {
                ...state,
                likes: 0
            }
    }

    return state
}