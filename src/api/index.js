import axios from "axios"

const apiEndPoint = "https://blogify-backend.onrender.com/posts/"

export const fetchPosts = async () => await axios.get(apiEndPoint)

export const createPost = async (post) => await axios.post(apiEndPoint, post)

export const fetchById = async (id) => await axios.get(apiEndPoint + "/" + id)

export const deleteById = async (id) => await axios.delete(apiEndPoint + "/" + id)
