import React from 'react';
import './nossosServ.css';
import imagem2 from '../assets/imagem2.png';

function Servicos() {
    return (
        <div style={{marginBottom: 40}}>
            <div className="container">
                <h1 className="text_serv">Serviços</h1>
                <hr className="divider2" align="left"/>
            </div>
        <div className="container-fluid d-flex justify-content-center">
            <center><div className="row">
                <div className="col-md-4" style={{position: 'static'}}>
                <div className="card text-center shadow" style={{position: 'static'}}>
                    <div className="overflow" >
                        <img  className="card-img-top"  src="https://cdn-cms.f-static.com/uploads/1772451/800_crop_5d53134089e32_5d53132fb1e9e.jpg" alt="Luminária"></img>
                    </div>
                    <div className="card-body text-dark">
                        <h4 className="card-title">Luminária</h4>
                        <p className="card-text text-secondary">Produtos especialmente desenvolvidos para setor público.</p>
                        <a href="/" className="btn btn-outline-primary">Ler mais</a>
                    </div>
                </div>
                </div>
                <div className="col-md-4" style={{position: 'static'}}>
                <div className="card text-center shadow" style={{position: 'static'}}>
                    <div className="overflow">
                        <img className="card-img-top" src="https://cdn-cms.f-static.com/uploads/1772451/800_5c657474393c4.png" alt="Bateria"></img>
                    </div>
                    <div className="card-body text-dark">
                        <h4 className="card-title">Bateria</h4>
                        <p className="card-text text-secondary">Bateria com nova Tecnologia de acumuladores.</p>
                        <a href="/" className="btn btn-outline-primary">Ler mais</a>
                    </div>
                </div>
                </div>
                <div className="col-md-4" style={{position: 'static'}}>
                <div className="card text-center shadow" style={{position: 'static'}}>
                    <div className="overflow">
                        <img className="card-img-top" src={imagem2} alt="Membrana"></img>
                    </div>
                    <div className="card-body text-dark">
                        <h4 className="card-title">Membrana Solar</h4>
                        <p className="card-text text-secondary" style={{fontSize: 10}}>Produto destinado para mercado de condomínios, residencias e instalação industrial.</p>
                        <a href="/" className="btn btn-outline-primary">Ler mais</a>
                    </div>
                </div>
                </div>
               
            </div></center>
           
        </div>

        


         {/*   
        <div className="container" >
            <div className="row" >
                <div className="col-xl-4" style={{backgroundColor: 'blue',}}>
                    <div className="our-services-wrapper mb-60" >
                        <div className="services-inner">
                            <div className="our-services-text">
                            <h4 style={{textAlign: 'center'}}>Luminária</h4>
                            <p className="descricao">Produtos especialmente desenvolvidos para setor público.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xl-4">
                    <div className="our-services-wrapper mb-60">
                        <div className="services-inner">            
                            <div className="our-services-text">
                            <h4 style={{textAlign: 'center'}}>Bateria</h4>
                            <p className="descricao">Bateria com nova Tecnologia de acumuladores.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xl-4">
                    <div className="our-services-wrapper mb-60">
                        <div className="services-inner">
                            <div className="our-services-text">
                            <h4 style={{textAlign: 'center'}}>Célula Solar</h4>
                            <p className="descricao">Produto destinado para mercado de condomínios, residencias e instalação industrial.</p>
                            </div>
                        </div>
                    </div>
                </div>
                
          </div>          
         </div>*/}
    </div>
    )
}

export default Servicos;