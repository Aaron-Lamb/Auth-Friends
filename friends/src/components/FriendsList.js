import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

class FriendsList extends React.Component {
    state = {
        friends: []
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

    render() {
        return(
            <div>
                <h1>Some Friends here</h1>
                {this.state.friends.map(buddy => {
                    return <div key={buddy.id}>
                        <h4>{buddy.name}</h4>
                        <h4>{buddy.age}</h4>
                        <h4>{buddy.email}</h4>
                    </div>
                })}
            </div>
        )
    }
}

export default FriendsList;