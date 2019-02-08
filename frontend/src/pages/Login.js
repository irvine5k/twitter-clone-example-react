import React, { Component } from 'react';

import twitterlogo from '../twitter.svg'
import './Login.css'

// import { Container } from './styles';

export default class Login extends Component {
    state = {
        username: '',

    }

    handleSubmit = e => {
        e.preventDefault();

        const { username } = this.state

        if(!username.length) return

        localStorage.setItem('@GoTwitter:username', username)

        this.props.history.push('/timeline')
    }

    handleInputChange = (e) => {
        this.setState({ username: e.target.value })
    }
  render() {
    return (
        <div className = "login-wrapper">
            <img src = {twitterlogo} alt = "GoTwitter" />
            <form onSubmit = {this.handleSubmit}>
                <input
                    value = {this.state.username}
                    onChange = {this.handleInputChange}
                    placeholder = "Nome do Usuario"
                />
                <button type = "submit">Entrar</button>
            </form>
        </div>
    )
  }
}
