import React, { Component } from 'react';

import Toolbar from '../HOME/Toolbar/toolbar';
import SideDrawer from '../HOME/SideDrawer/sideDrawer';
import Backdrop from '../HOME/Backdrop/backDrop';

import Footer from '../HOME/Footer/footer';

function SobreNos(){
    return (
        <div className="container" style={{marginTop: '70px', marginBottom: '50px'}}>
            <h1 className="text_bemvindo ">Sobre Nós</h1>
            <hr className="divider1"/>
            <div className="text ">
                <p> O conceito de energia limpa existe há muito tempo, desde que a grande demanda de fontes energéticas que vem crescendo a cada dia no mundo todo e a percepção de que as principais fontes de energia atuais são degradantes para o meio ambiente, além de serem limitadas.
                A CBS Energia é comprometida desde antes da sua fundação a desenvolver uma eficaz e econômica tecnologia de fonte renovável. Isso acontece devido a crença de o sol ser uma fonte de energia limpa e renovável infinita, que com a tecnologia certa, pode ser muito mais eficaz que fontes de energia não-renováveis. 
                Possuímos diversos projetos em andamento e muitos outros em fase de desenvolvimento; todos eles voltados para a sustentabilidade. Para desenvolvermos nossos empreendimentos, atuamos seguindo um padrão de sustentabilidade e ética, para sempre trazer aos nossos clientes e parceiros produtos e serviços com alto grau de excelência.
                Acreditamos que o sucesso de nossa empresa está ligado ao grande interesse da nossa equipe em sempre buscar por inovações tecnológicas, ao desenvolvimento de nossos projetos e o bom relacionamento com nossos parceiros e clientes.
                Nossa empresa hoje está localizada na cidade de Louveira, mas nosso objetivo é nos expandirmos para o Brasil e o mundo. Somos uma empresa que sempre se empenhará em evoluir as fontes energéticas existentes e outras tecnologias sustentáveis, com a intenção de solucionar problemas atuais e futuros.
                </p>
            </div>
            
        </div>
    )
}

export default class SobrePag extends Component {
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

            <SobreNos/>
            <Footer/>
        </div>
    )
  }
}
