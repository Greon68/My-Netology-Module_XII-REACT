import { ADD_LIKES, RESET_LIKES } from "./actionTypes"

export const addLikes =(value=1) => ({
    type: ADD_LIKES,
    payload : {
        value
    }
})

export const  resetLikes = () => ({
    type: RESET_LIKES
})