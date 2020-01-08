import React, { Component } from 'react';
import fire from '../../Config/fire';

import Toolbar from '../Pages/HOME/Toolbar/toolbar';
import SideDrawer from '../Pages/HOME/SideDrawer/sideDrawer';
import Backdrop from '../Pages/HOME/Backdrop/backDrop';

import '../../style.css';

const erro = 'Usuario ou Senha não encontrados!';

export default class Login extends Component {
    state = {
        sideDrawerOpen: false
    };

    drawerToggleClick = () => {
        this.setState((prevState) => {
            return {sideDrawerOpen: !prevState.sideDrawerOpen};
        })
    };

    backdropClick = () => {
        this.setState({sideDrawerOpen: false})
    };

    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            email: '',
            password: ''
        }
    }
    
    login(e) {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
            alert('Login Efetuado! Bem-Vindo ' + this.state.email);
        }).catch((error) => {
            alert(erro);
        });
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value});
    }

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
        backdrop = <Backdrop click={this.backdropClick}/>
    }
    return (
        <div className="login-form">
            <Toolbar drawerClick={this.drawerToggleClick}/>
            <SideDrawer show={this.state.sideDrawerOpen}/>
                
            {backdrop}

            <div className="container " >
                
            <div id="login-row" className="row justify-content-center align-items-center" >
                <div id="login-column" className="col-md-6 position-static">
                    <div className="box">
                        <div className="shape1"></div>
                        <div className="shape2"></div>
                        <div className="shape3"></div>
                        <div className="shape4"></div>
                        <div className="shape5"></div>
                        <div className="shape6"></div>
                        <div className="shape7"></div>
                        <div className="float">
                            <form className="form" action="">
                                <div className="form-group">
                                    <label for="username" className="text-white">Email:</label><br/>
                                    <input type="text" name="email" className="form-control" value={this.state.email} onChange={this.handleChange} placeholder="example@hotmail.com"></input>
                                </div>
                                <div className="form-group">
                                    <label for="password" className="text-white">Senha:</label><br/>
                                    <input type="password" name="password" className="form-control" value={this.state.password} onChange={this.handleChange} placeholder="*******"></input>
                                </div>
                                <div className="form-group">
                                    <input type="submit" onClick={this.login} name="submit" className="btn btn-info btn-md" value="Entrar"></input>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        
            </div>
        </div>
        
    )
  }
}
