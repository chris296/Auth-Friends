import React, {useState} from 'react';
import axios from 'axios';
import {axiosWithAuth} from '../utils/axiosWithAuth';



const FriendForm = props => {
    const [newFriend, setNewFriend] = useState({
        name: '',
        age: '',
        email: ''
    });

    const handleChange = event => {
        setNewFriend({...newFriend, [event.target.name]: event.target.value});
    };

    const handleSubmit = event => {
        event.preventDefault();
        console.log(newFriend);
        axiosWithAuth()
        .post('http://localhost:5000/api/friends', newFriend)
        .then(res => {
            console.log("post success", res);
            setNewFriend({
                name: '',
                age: '',
                email:''
            })
        })
    }


    return (
        <div>
            <h1>Add A New Friend</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <form onSubmit={event => handleSubmit(event)}>
                        <label>Name</label>
                        <input name='name' type='text' value={newFriend.name} onChange={event => handleChange(event)}/>
                        <label>Age</label>
                        <input name='age' type='text' value={newFriend.age} onChange={event => handleChange(event)}/>
                        <label>email</label>
                        <input name='email' type='text' value={newFriend.email} onChange={event => handleChange(event)}/>
                        <button>Submit</button>
                    </form>
                </div>
            </form>
        </div>
    )
}

export default FriendForm;