import React from "react";
/* import { Link } from "react-router-dom"; */
import photo1 from '../img/photo1.png';
/* import photo2 from './img/photo2.png'; */

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {
    
    return ( 
        
        <div className="container-fluid h-100">
            <div className="row">
                <div className="col-lg-5 col-12 text-end">
 

                    <img className="img-fluid w-75 opacity-75 fade" src={photo1} alt="Description de mon image" />
                </div>
                <div className="col-lg-7 col-12 text-light py-4  pt-5 mt-5 pb-0">
                    <p className="fs-5 mb-2">Je suis <span className="fs-4"> TEMGOUA SAMIRA</span></p>
                    <p className="fs-2 text-warning mb-2">Developpeuse Web / Infographe /...</p>
                    <a href="" className="mb-4">Télécharger mon CV <i className="fa fa-arrow-right"></i> </a>
                    <br/>
                    <div className="row mt-5">
                        <div className="col-1 "><span className="rounded-circle p-2 bg-white bg-opacity-25 opacity-100 text-success"><FontAwesomeIcon icon={faWhatsapp} size="1x" /></span></div>
                        <div className="col-1 "><span className="rounded-circle p-2 bg-white bg-opacity-25 text-primary"><FontAwesomeIcon icon={faFacebookF} size="1x" /></span></div>
                        <div className="col-1 "><span className="rounded-circle p-2 bg-white bg-opacity-25"><FontAwesomeIcon icon={faTwitter} size="1x" /></span></div>
                        <div className="col-1 "><span className="rounded-circle p-2 bg-white bg-opacity-25"><FontAwesomeIcon icon={faInstagram} size="1x" /></span></div>
                        <div className="col-1 "><span className="rounded-circle p-2 bg-white bg-opacity-25 text-primary"><FontAwesomeIcon icon={faLinkedinIn} size="1x" /></span></div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Sidebar;