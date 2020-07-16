import React from 'react';
import axios from 'axios';

 class Login extends React.Component {
         state = {
            credentials: {
                username: '',
                password: ''
            }
         }

      handleChanges = event => {
         this.setState({
             credentials: {
                ...this.state.credentials,
                [event.target.name]: event.target.value
             }
         })
     }

      handleSubmit = event => {
         event.preventDefault();
         axios.post('http://localhost:5000/api/login', this.state.credentials)
         .then(response => {
             console.log(response);
             localStorage.setItem('token', response.data.payload);
             this.props.history.push('/friends');
         })
         .catch(error => console.log(error))
     }
    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <label htmlFor='username'>Username: </label>
                <input name='username' id='username' type='text' value={this.state.credentials.username} onChange={this.handleChanges}/>
                <label htmlFor='password'>Password: </label>
                <input name='password' id='password' type='password' value={this.state.credentials.password} onChange={this.handleChanges}/>
                <button type='submit'>Log in</button>
                {this.props.isLoading && (
                    <div>
                        <p>Loading</p>
                    </div>
                )}
            </form>
        )
    }
}

export default Login;