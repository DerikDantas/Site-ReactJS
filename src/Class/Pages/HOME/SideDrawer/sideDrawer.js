import React from 'react';
import './sideDrawer.css';
import { Link } from 'react-router-dom';


const SideDrawer = props => {
    let drawerClass = 'side-drawer';
    if (props.show) {
        drawerClass = 'side-drawer open';
    }

    return (
        <nav className={drawerClass}>
        <ul>
            <li><a href="/"> <i class="fa fa-home"><div style={{width: 50}}></div></i>Home</a></li>
            <li><Link to="../../sobrePag"> <i class="fas fa-address-card"><div style={{width: 50}}></div></i>Sobre Nós</Link></li>
            <li><Link to="../../produtosPag"> <i class="fas fa-cogs"><div style={{width: 50}}></div></i>Serviços</Link></li>
            <li><Link to="../../contatoPag"> <i class="fa fa-phone"><div style={{width: 50}}></div></i>Contato</Link> </li>
            <li><Link to="../../login"> <i class="fas fa-user"><div style={{width: 50}}></div></i>Login</Link></li>
        </ul>
    </nav>
    );
};

export default SideDrawer;