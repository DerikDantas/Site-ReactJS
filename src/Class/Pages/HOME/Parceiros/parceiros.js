import React from 'react';

import './parceiros.css';
import logoCBS from '../assets/logoCBS.jpg';

const parceiros = props => (
    <div>
        <div className="container">
            <h1 className="text_sobre">Parceiros</h1>
            <hr className="divider2" align="left"/>
        </div>
        <div className="row" style={{margin: '10px'}}>
            <div className="col-lg-3 col-md-4 col-sm-6 position-static">
            <img src={logoCBS} className="img-thumbnail my-3" alt=""></img>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 position-static">
            <img src="https://cdn-cms.f-static.com/uploads/1772451/400_5d9b25bfcbb5e.png" className="img-thumbnail my-3" alt=""></img>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 position-static">
            <img src="https://cdn-cms.f-static.com/uploads/1772451/400_5d78ea16db04d.png" className="img-thumbnail my-3" alt=""></img>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 position-static">
            <img src="https://cdn-cms.f-static.com/uploads/1772451/400_5d80c00ba98e3.png" className="img-thumbnail my-3" alt=""></img>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 position-static">
            <img src={logoCBS} className="img-thumbnail my-3" alt=""></img>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 position-static">
            <img src="https://cdn-cms.f-static.com/uploads/1772451/400_5d9b25bfcbb5e.png" className="img-thumbnail my-3" alt=""></img>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 position-static">
            <img src="https://cdn-cms.f-static.com/uploads/1772451/400_5d78ea16db04d.png" className="img-thumbnail my-3" alt=""></img>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 position-static">
            <img src="https://cdn-cms.f-static.com/uploads/1772451/400_5d80c00ba98e3.png" className="img-thumbnail my-3" alt=""></img>
            </div>    
        </div>   
        
        
            
           
    </div>
);


export default parceiros;