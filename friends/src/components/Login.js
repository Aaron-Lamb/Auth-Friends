import React, { useState } from 'react';
import axios from 'axios';

 const Login = () => {
     const [credentials, setCredentials] = useState({
         username: '',
         password: ''
     })

     const handleChanges = event => {
         setCredentials({
             ...credentials,
             [event.target.name]: event.target.value
         })
     }

     const handleSubmit = event => {
         event.preventDefault();
         axios.post('http://localhost:5000/api/login', credentials)
         .then(response => {
             console.log(response)
             localStorage.setItem('token', response.data.payload)
         })
         .catch(error => console.log(error))
         setCredentials({
             username: '',
             password: ''
         })
     }
    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor='username'>Username: </label>
            <input name='username' id='username' type='text' value={credentials.username} onChange={handleChanges}/>
            <label htmlFor='password'>Password: </label>
            <input name='password' id='password' type='password' value={credentials.password} onChange={handleChanges}/>
            <button type='submit'>Log in</button>
        </form>
    )
}

export default Login;