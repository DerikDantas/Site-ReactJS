import React from 'react';
import { Link } from 'react-router-dom';
import './toolbar.css';
import  ToggleButton from '../SideDrawer/toggleButton';

const toolbar = props => (

    
    <header className="toolbar">
        <nav className="toolbar_nav">
            <div className="toolbar_button">
                <ToggleButton click={props.drawerClick}/>
            </div>
            <div className="toolbar_logo"><a href="/"><h1>CBS Network</h1></a></div>
            <div className="space" />
            <div className="toolbar_item">
                <ul>
                    <li><a href="/" > <i class="fa fa-home"><div style={{width: 20}}></div></i>Home</a></li>
                    <li><Link to="../../sobrePag"> <i class="fas fa-address-card"><div style={{width: 20}}></div></i>Sobre Nós</Link></li>
                    <li><Link to="../../produtosPag"> <i class="fas fa-cogs"><div style={{width: 25}}></div></i>Serviços</Link></li>
                    <li><Link to="../../contatoPag"> <i class="fa fa-phone"><div style={{width: 20}}></div></i>Contatos</Link></li>
                    <li><Link to="../../login"> <i class="fas fa-user"><div style={{width: 20}}></div></i>Login</Link></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default toolbar;