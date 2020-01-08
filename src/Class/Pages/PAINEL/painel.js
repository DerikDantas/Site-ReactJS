import React, { Component } from '../../../../node_modules/react';
import fire from '../../../Config/fire';

import Toolbar from './Toolbar/toolbar';
import SideDrawer from './SideDrawer/sideDrawer';
import Backdrop from './Backdrop/backDrop';

import Footer from '../HOME/Footer/footer';

export default class Painel extends Component {
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
        this.logout = this.logout.bind(this);
        
    }

  logout(){
    fire.auth().signOut();
  }
  
  render() {
    let backdrop;
  
        if (this.state.sideDrawerOpen) {
            backdrop = <Backdrop click={this.backdropClick}/>
        }
    return (
       <div>
          <Toolbar drawerClick={this.drawerToggleClick}/>
          <SideDrawer show={this.state.sideDrawerOpen}/>
          {backdrop}

          <div className="toolbar_sub " style={{height: '50px', marginTop: '70px',background: 'rgba(51, 51, 51, 0.452)', width:'100%',  }}>
            <div className="container ">
              <div className="row">
                <div className="col-8 position-static">
                  <h1>Painel</h1>
                </div>
                <div className="col-4 position-static" >
                  <button className="btn btn-danger" style={{height: '40px', margin: '5px'}} onClick={this.logout}><i class="fas fa-sign-out-alt" style={{marginRight:'10px'}}></i>Sair</button>
                </div>
               
              </div>
            </div>
        </div>
          <div >
            <iframe className="embed-responsive-item" src="http://luminariateste.000webhostapp.com" title=" " style={{width: '100%', height: '600px'}}></iframe>
        </div>
        <Footer />
       </div>
        
    )
  }
}
