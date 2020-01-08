import React, { Component } from 'react';

import Toolbar from '../HOME/Toolbar/toolbar';
import SideDrawer from '../HOME/SideDrawer/sideDrawer';
import Backdrop from '../HOME/Backdrop/backDrop';

import Footer from '../HOME/Footer/footer';

import imagem2 from '../../Pages/HOME/assets/imagem2.png';

class Servicos extends Component{ 
        render() {
            return(
            <div style={{ marginBottom: 40, marginTop: '70px' }}>
            <div className="container">
                <h1 className="text_bemvindo">Serviços</h1>
                <hr className="divider1" />
            </div>
            <div className="how-section1 container">
                    <div className="row">
                        <div className="col-md-6 how-img position-static">
                            <img  src="https://cdn-cms.f-static.com/uploads/1772451/800_5c657474393c4.png" className="img-fluid" alt=""/>
                        </div>
                        <div className="col-md-6 position-static">
                            <h4 className="text-center">BATERIA</h4>
                            <hr style={{color: 'linear-gradient(to right, rgb(85, 183, 216), rgb(241, 244, 245), rgb(85, 183, 216))',
background: 'linear-gradient(to right, rgb(85, 183, 216), rgb(241, 244, 245), rgb(85, 183, 216))', height: '3px', width: '50px', align: 'left'}}/>
                            <p className="text-muted">Nova tecnologia de acumuladores à base de gel com alto desempenho que apresenta as seguintes vantagens:</p>
                            <p className="text-muted">- Capacidade em acumular carga e descarga 2 vezes superior à do lítio;</p>  
                            <p className="text-muted">- Formato desenvolvido das baterias segue padrão e personalizado;</p>
                            <p className="text-muted">- Design aprimorado, para atender todo segmento que utiliza os acumuladores tradicional, rígido ou flexível;</p>
                            <p className="text-muted">- Promove uma sinergia perfeita com os painéis solares da CBS.</p>  



                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 position-static">
                            <h4 className="text-center">MEMBRANA</h4>
                            <hr style={{color: 'linear-gradient(to right, rgb(85, 183, 216), rgb(241, 244, 245), rgb(85, 183, 216))',
background: 'linear-gradient(to right, rgb(85, 183, 216), rgb(241, 244, 245), rgb(85, 183, 216))', height: '3px', width: '50px', align: 'left'}}/>
                            <p className="text-muted">A Organic Power Photovoltaic 4ª geração (OPP), são membranas solares flexíveis que apresentam um alto desempenho de funcionamento, com uma potência default de 600 a 800 watts por metro quadrado.</p>
                            <p className="text-muted">Ela é destinada aos mais diversos tipos segmentos e pode ser utilizada para os mais variados consumidores, principalmente se utilizada em conjunto com a Bateria em Gel Solar (BGS).</p>
                        </div>
                        <div className="col-md-6 how-img position-static" >
                            <img src={imagem2} className="img-fluid" alt="" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 how-img position-static">
                             <img src="https://cdn-cms.f-static.com/uploads/1772451/800_crop_5d53134089e32_5d53132fb1e9e.jpg" className=" img-fluid" alt=""/>
                        </div>
                        <div className="col-md-6 position-static">
                        <h4 className="text-center">LUMINÁRIA</h4>
                            <hr style={{color: 'linear-gradient(to right, rgb(85, 183, 216), rgb(241, 244, 245), rgb(85, 183, 216))',
background: 'linear-gradient(to right, rgb(85, 183, 216), rgb(241, 244, 245), rgb(85, 183, 216))', height: '3px', width: '50px', align: 'left'}}/>
                            <p className="text-muted">As Luminárias CBS detêm tecnologia inovadora, pois possuem a vantagem de serem constituídas por corpo híbrido, em parte por material biodegradável e 
    resistente e outra por alumínio, para facilitar a dissipação de calor. Possui também grau de proteção IP65, Grau de Resistência Mecânica da lente IK08, possuem potência de 70W, 150 W e 250W, entre outros benefícios.</p>
                            <p className="text-muted">As luminárias são divididas em cinco grupos, da mais básica, que utiliza fonte de energia elétrica, até os modelos mais complexos, que podem possuir:</p>
                            <ul className="text-muted">
                                <li>Autonomia, quando utilizada em conjunto com a Bateria CBS</li>
                                <li>Funcionamento através de energia solar com a OPP</li>
                                <li>Sistema GPS</li>
                                <li>Sistema meteorológico</li>
                                <li>Câmera de monitoramento</li>
                                <li>Sensor de presença</li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
               
            
            
        </div>
            )
            
        }
    
};


export default class ProdutoPag extends Component {
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
        <div>
            <Toolbar drawerClick={this.drawerToggleClick}/>
            <SideDrawer show={this.state.sideDrawerOpen}/>
            {backdrop}
            <Servicos />
        <Footer/>
    </div>
    )
  }
}
