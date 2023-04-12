import React, { useEffect } from 'react'
import Navbar from './Navbar'
import PostList from './PostList'
import { useDispatch } from 'react-redux';
import { fetchPosts } from '../redux/post/postActions';

function Home() {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchPosts())
    }, [])

    return (
        <div>
            <Navbar />
            <PostList />
        </div>
    )
}

export default Home
