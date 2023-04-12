import { FETCH_POSTS, CREATE_POST, FETCH_BY_ID, DELETE_POST } from "./postTypes.js"
import * as api from "../../api/index.js"


export const fetchPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts()

        dispatch({
            type: FETCH_POSTS,
            payload: data
        })
    } catch (error) {
        console.log(error)
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post)
        dispatch({
            type: CREATE_POST,
            payload: data
        })
    } catch (error) {
        console.log(error)
    }

}
export const fetchById = (id) => async (dispatch) => {
    try {
        const { data } = await api.fetchById(id)
        dispatch({
            type: FETCH_BY_ID,
            payload: data
        })
    } catch (error) {
        console.log(error)
    }
}

export const deletePostById = (id) => async (dispatch) => {
    try {
        await api.deleteById(id)
        dispatch({
            type: DELETE_POST,
            payload: id
        })
    } catch (error) {
        console.log(error)
    }
}