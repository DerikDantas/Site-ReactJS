import React, { Component } from 'react';
import fire from './Config/fire';
import './login.css';


import Painel from './Class/Pages/PAINEL/painel';
import Login from './Class/Pages/loginPag';

class loginPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            user:{},
        }
    }

    componentDidMount(){
        this.authListener();
    }

    authListener() {
        fire.auth().onAuthStateChanged((user) => {
            console.log(user);
            if (user) {
                this.setState({ user });
                localStorage.setItem('user', user.uid);
            } else {
                this.setState({ user: null });
                localStorage.removeItem('user');
            }
        });
    }

    render() {
        
        return (
            <div>
                {this.state.user ? <Painel/> : <Login />}
            </div>
        )
    }
}
export default loginPage;