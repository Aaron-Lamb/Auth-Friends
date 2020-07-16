import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import axios from 'axios';

class FriendsList extends React.Component {
    state = {
        friends: [],
        newFriend: {
            id: Date.now(),
            name: '',
            age: '',
            email: ''
        }
    };

    componentDidMount() {
        this.getFriends();
    }

    getFriends = () => {
        axiosWithAuth().get('/friends')
        .then(response => {
            console.log({ response })
            this.setState({
                friends: response.data
            })
        })
        .catch(error => console.log({ error }))
    }

    handleChanges = event => {
        this.setState({
            ...this.state,
            newFriend: {
                ...this.state.newFriend,
                [event.target.name]: event.target.value
            }
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        axiosWithAuth().post('/friends', this.state.newFriend)
        .then(response => {
            console.log(response);
            this.setState({
                friends: response.data,
                newFriend: {
                    id: Date.now(),
                    name: '',
                    age: '',
                    email: ''
                }
            })
        })
    }

    render() {
        return(
            <div>
                <h1>Some Friends here</h1>
                {this.state.friends.map(buddy => {
                    return <div key={buddy.id}>
                        <h4>{buddy.name}</h4>
                        <h4>{buddy.age}</h4>
                        <h4>{buddy.email}</h4>
                        <button>Unfriend</button>
                    </div>
                })}
                <form onSubmit={this.handleSubmit}>
                    Add a new friend!
                    <label htmlFor='name'>Name: </label>
                    <input name='name' id='name' value={this.state.newFriend.name} type='text' onChange={this.handleChanges} />
                    <label htmlFor='age'>Age: </label>
                    <input name='age' id='age' value={this.state.newFriend.age} type='text' onChange={this.handleChanges} />
                    <label htmlFor='email'>Email: </label>
                    <input name='email' id='email' value={this.state.newFriend.email} type='text' onChange={this.handleChanges} />
                    <button type='submit'>Add</button>
                </form>
            </div>
        )
    }
}

export default FriendsList;