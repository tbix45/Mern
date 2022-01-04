import React, { useEffect, useState } from 'react';
import axios from 'axios'

export default () => {
    const [message, setMessage] = useState("Loading...");

    useEffect(() => {
        axios.get('http://localhost:8000/api')
            .then(res => {
                setMessage(res.data.message)
            })
    }, [])

    return (
        <div>
            <h1>Welcome to the fullstack</h1>
            <h2>Message from the backend: {message}</h2>
        </div>
    )
}