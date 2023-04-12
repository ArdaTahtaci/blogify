import React, { useState } from 'react'
import Navbar from './Navbar'
import { Container, Button } from 'reactstrap'
import * as yup from "yup"
import { createPost } from "../redux/post/postActions.js"
import { useDispatch } from "react-redux"
import { useNavigate } from 'react-router-dom'
import alertify from "alertifyjs"
import uniqid from "uniqid"


const formSchema = yup.object().shape({
    title: yup.string().required(),
    subtitle: yup.string().required(),
    content: yup.string().min(50).max(5000).required(),
    tag: yup.string().required(),
})

export default function AddPost() {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [error, setError] = useState("")
    const [file, setFile] = useState(null)


    const formSubmit = async (e) => {

        e.preventDefault()
        const formData = {
            title: e.target[0].value,
            subtitle: e.target[1].value,
            content: e.target[2].value,
            tag: e.target[3].value,
        }

        let validatedData = await formSchema.validate(formData)
            .catch((err) => setError(err.message))
        if (validatedData) {
            setError("")
            validatedData = { ...validatedData, image: file, postId: uniqid() }
            dispatch(createPost(validatedData))
            setFile(null)
            alertify.success("Successfully posted")
            navigate("/")
        }
    }


    const convert2base64 = (file) => {
        const reader = new FileReader()

        reader.onloadend = () => {
            setFile(reader.result.toString())
        }
        reader.readAsDataURL(file)
    }

    return (
        <div>
            <Navbar />
            <div className='create-post-form'>

                <Container>
                    <h3 className='mb-4'>Create New Post</h3>
                    <form onSubmit={(e) => formSubmit(e)}>
                        <input type="text" name='title' className="form-control my-4" placeholder='Title' />
                        <input type="text" name='subtitle' className="form-control my-4" placeholder='Subtitle' />
                        <textarea type="textarea" name='content' className="form-control my-3" placeholder='Content' />
                        <label>Tag</label>
                        <select type='select' name='tag' className='form-select mt-2 mb-3' >
                            <option>fun</option>
                            <option>programming</option>
                            <option>health</option>
                            <option>science</option>
                        </select>

                        <input type="file" accept='image/*' className="custom-file-input"
                            onChange={({ target: { files } }) => convert2base64(files[0])}
                        />


                        <Button type='submit' name='submit' className='btn-success btn mt-4 mb-2'>Post</Button>
                        <p style={{ color: "red" }}>{error}</p>
                    </form>
                </Container>

            </div>

        </div>

    )
}
