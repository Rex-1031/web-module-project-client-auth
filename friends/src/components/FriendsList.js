import axios from 'axios'
import React, { Component } from 'react'
import axiosWithAuth from '../utils/axiosWithAuth';
import AddFriend from './AddFriend';

export class FriendsList extends Component {
    state ={
        friends: []
    }

    

    getFriends = () =>{
        axiosWithAuth()
        .get('/friends')
        .then( res =>{console.log(res)
            this.setState({
                ...this.state,
                friends: [...res.data]
            })
        })
        .catch(err => {
            console.log(err.res)
        })
    };

    componentDidMount(){
        this.getFriends();
    };

    render() {
        return (
            <div>
            
                {this.state.friends.map((friend) =>{
                    return(
                        <div className="friendsListContainer">
                            <h4>{friend.name}</h4>
                            <div className="friendsData">
                                <p>Age: {friend.age}</p>
                                <p>Email: {friend.email}</p>
                            </div>
                        </div>
                    )
                })}
                <AddFriend />
            </div>
        )
    }
}

export default FriendsList
