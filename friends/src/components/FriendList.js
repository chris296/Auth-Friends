import React, {useEffect, useState} from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import axios from 'axios';
import Friend from './Friend';
import FriendForm from './FriendForm';

class FriendList extends React.Component {
    state = {
        friends: []
    };

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        axiosWithAuth()
        .get('http://localhost:5000/api/friends')
        .then(res => {
            console.log(res);
            this.setState({
                    friends: res.data
            })
        })
    }


    render() {
        return (
            <div>
                {this.state.friends.map(friend =>(
                    <Friend key={friend.id} friend={friend} />
                ))}
                <FriendForm />
            </div>
        )
    }
}

export default FriendList;