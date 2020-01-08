import React from 'react';
import './contatos.css';

const contatos = props => (
    <div>
        <div className="container">
          <h1 className="text_sobre">Contatos</h1>
          <hr className="divider2" align="left"/>
        </div>
    <section className="contact" id="contact">
            <div className="container">
                <div className="main wow fadeInUp" style={{visibility: 'visible', animationName: 'fadeInUp'}}>
                    <div className="row">
                        <div className="col-lg-8 left position-static">
                            <h3>Enviar Mensagem</h3>

                            <form>
                                <div className="row">
                                    <div className="col-sm-6 position-static">
                                        <input type="text" className="form-control" placeholder="Name"></input>
                                    </div>
                                    <div className="col-sm-6 position-static">
                                        <input type="email" className="form-control" placeholder="Email"></input>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <textarea className="form-control" rows="5" id="comment" placeholder="Mensagem"></textarea>
                                </div>
                                <button className="btn btn-block" type="submit">Enviar</button>
                            </form>
                        </div>
                        <div className="col-lg-4 position-static">
                            <div className="right">
                                <h4>Formas de contato</h4>
                                <div className="info d-flex align-items-center">
                                <i class="fas fa-map-pin"></i>
                                    <span>Av. José Mamprim, 545 - Louveira - SP</span>
                                </div>
                                <div className="info d-flex align-items-center">
                                    <i className="fa fa-phone" ></i>
                                    <span>+55 19 3878-7484</span>
                                </div>
                                <div className="info d-flex align-items-center">
                                <i class="far fa-envelope" aria-hidden="true"></i>
                                    <span>contato@cbsenergia.com.br</span>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <iframe title=" " className="mapa shadow" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1835.1271214768337!2d-46.97424273001176!3d-23.08778704943857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf2e79606f5bc9%3A0xb3e2c670e065fd87!2sCBS%20Energia!5e0!3m2!1spt-BR!2sbr!4v1570189225280!5m2!1spt-BR!2sbr" frameborder="0" style={{border:0}} allowfullscreen=""></iframe>
            </div>
        </section>
    </div>
    
    
    
);

export default contatos;