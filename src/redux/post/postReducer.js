import { CREATE_POST, DELETE_POST, FETCH_BY_ID, FETCH_POSTS } from "./postTypes.js";

const initialState = {
    posts: [],
    wantedPost: undefined
}

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POSTS: return {
            ...state,
            posts: action.payload
        }
        case CREATE_POST: return {
            ...state,
            posts: [...state.posts, action.payload]
        }
        case FETCH_BY_ID: return {
            ...state,
            wantedPost: action.payload
        }
        case DELETE_POST: return {
            ...state,
            posts: state.posts.filter((post) => post.postId !== action.payload)
        }
        default: return state
    }
}

export default postReducer