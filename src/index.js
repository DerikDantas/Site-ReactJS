import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,Switch,Route } from 'react-router-dom';

import './style.css';

import App from './App';
import loginPage from './login';
import Painel from './Class/Pages/PAINEL/painel';
import sobrePag from './Class/Pages/SOBRE/sobrePag';
import produtoPag from './Class/Pages/PRODUTOS/produtoPag';
import contatoPag from './Class/Pages/CONTATOS/contatoPag';

import * as serviceWorker from './serviceWorker';


ReactDOM.render(
<BrowserRouter>
    <Switch>
        <Route exact path='/' component={App}></Route>
        <Route exact path='/login' component={loginPage}></Route>
        <Route exact path='/painel' component={Painel}></Route>
        <Route exact path='/sobrePag' component={sobrePag}></Route>
        <Route exact path='/produtosPag' component={produtoPag}></Route>
        <Route exact path='/contatoPag' component={contatoPag}></Route>
    </Switch>
</BrowserRouter>  
, document.getElementById('root'));

serviceWorker.unregister()