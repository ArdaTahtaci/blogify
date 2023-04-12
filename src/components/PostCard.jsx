import React, { useEffect, useState } from 'react'
import { Card, CardGroup, Col } from "reactstrap"
import { useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom"

export default function PostCard(props) {


    const navigate = useNavigate()

    return (

        <Col lg="3" md="4" sm="12">

            <Card className='card my-4 mx-auto' id='cards'>
                <button className='card-btn' onClick={() => navigate("/posts/" + props.post.postId)}>
                    <img className='card-img' src={
                        props.post.image ? (props.post.image) : ("https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png")
                    } alt="image" />
                    <div className="card-body">
                        <h5 className="card-title">{props.post.title}</h5>
                        <h6 className='card-subtitle my-2'>{props.post.subtitle}</h6>

                        <p className="card-text mb-2">{props.post.content}</p>
                        <p className='tag'>#{props.post.tag}</p>
                    </div>
                </button>
            </Card>

        </Col>

    )
}
