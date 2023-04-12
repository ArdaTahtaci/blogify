import React, { useEffect, useState } from 'react'
import Navbar from "./Navbar"
import { Button, Container } from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { deletePostById, fetchById } from '../redux/post/postActions.js'
import Loader from './Loader'
import { useNavigate } from 'react-router-dom'

export default function IndividualPosts(props) {

    const dispatch = useDispatch()
    const params = useParams()
    const id = params.id
    const navigate = useNavigate()

    const thisPost = useSelector(state => state.post.wantedPost)
    const [isLoadeed, setIsLoaded] = useState(true)

    useEffect(() => {
        dispatch(fetchById(id))
    }, [id])

    useEffect(() => {
        if (thisPost != undefined)
            setIsLoaded(false)
    }, [thisPost])


    const deletePost = () => {
        dispatch(deletePostById(id))
        navigate("/")
    }

    return (
        <div>
            <Navbar />
            {isLoadeed ? <Loader /> : (
                <div className='pb-4'>
                    <Container>
                        <h2 className='my-3'>{thisPost.title}</h2>
                        <h4 className='subtitle my-3'>{thisPost.subtitle}</h4>
                        <p className='tag'>#{thisPost.tag}</p>
                        <img className='my-4 post-img' src={thisPost.image} />
                        <Container >
                            <p className='content my-4'>{thisPost.content}</p>
                        </Container>

                    </Container>
                    <Button onClick={deletePost} className='btn-info btn-lg'>Delete</Button>
                </div>
            )}

        </div>
    )
}
