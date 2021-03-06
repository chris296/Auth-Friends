import React from 'react';

import {axiosWithAuth} from '../utils/axiosWithAuth';
import axios from 'axios';

class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    };

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        })
    }

    login = e => {
        e.preventDefault();

        axios
        .post('http://localhost:5000/api/login', this.state.credentials)
        .then(res => {
            console.log(res);
            localStorage.setItem('token', JSON.stringify(res.data.payload));
            this.props.history.push('/protected');
        })
        .catch(err => console.log(err.response));
    };

    render() {
        return (
            <div>
                <form onSubmit={this.login}>
                    <input type='text' name='username' value={this.state.credentials.username} onChange={this.handleChange}/>
                    <input type='text' name='password' value={this.state.credentials.password} onChange={this.handleChange} />
                    <button>Log in</button>
                </form>
            </div>
        )
    }
}

export default Login;