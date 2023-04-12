import React from 'react'
import { Button } from 'reactstrap'
import { useNavigate } from 'react-router-dom'

function Navbar() {

    const navigate = useNavigate()

    return (
        <div className='mb-4'>
            <nav className='navbar bg-ligth'>
                <div className="container-fluid">
                    <a className="navbar-brand" href="/"><h1 className='my-auto brand'>Blogify</h1></a>
                    <Button className="ms-auto btn-success" onClick={() => { navigate("/create-post") }}>🖊️ New Post</Button>
                </div>
            </nav>
        </div>

    )
}

export default Navbar
