import React, { useEffect } from 'react'
import { Card, CardGroup, Col, Container, Row } from 'reactstrap';
import PostCard from './PostCard';
import { useSelector } from 'react-redux';



function PostList() {

    const allPosts = useSelector(state => state.post.posts)

    return (
        <div>
            <Container className='my-4'>
                <Row>
                    {allPosts.map((post, index) => {
                        return (
                            <PostCard key={index} post={post} />
                        )
                    })}
                </Row>
            </Container>
        </div>
    )
}

export default PostList
