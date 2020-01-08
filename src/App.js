import React, {Component} from 'react';

import Toolbar from './Class/Pages/HOME/Toolbar/toolbar';
import SideDrawer from './Class/Pages/HOME/SideDrawer/sideDrawer';
import Backdrop from './Class/Pages/HOME/Backdrop/backDrop';
import Header from './Class/Pages/HOME/Header/header';
import SobreNos from './Class/Pages/HOME/SobreNos/sobreNos';
import Servicos from './Class/Pages/HOME/NossosServicos/nossosServ';
import Promo from './Class/Pages/HOME/Promo/promo';
import Parceiros from './Class/Pages/HOME/Parceiros/parceiros';
import Contatos from './Class/Pages/HOME/Contatos/contatos';
import Footer from './Class/Pages/HOME/Footer/footer';
import GoTop from './Class/Pages/HOME/goTop';

class App extends Component {
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

    render() {
        let backdrop;

        if (this.state.sideDrawerOpen) {
            backdrop = <Backdrop click={this.backdropClick}/>
        }

        return (
            <div style={{height:'100%'}}>
               <Toolbar drawerClick={this.drawerToggleClick}/>
               <SideDrawer show={this.state.sideDrawerOpen}/>
               {backdrop}
               <Header />
               <SobreNos/>
               <Promo/>
               <Servicos/>
               <Parceiros/>
               <Contatos />
               
                <Footer/>
                <GoTop/>
            </div>
        )
    }
}

export default App;