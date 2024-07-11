import React from "react";
/* import { Link } from "react-router-dom"; */
import photo1 from '../img/photo1.png';
import photo2 from '../img/back3.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

const Home = () => {
    
    return ( 
        
        <div className="container-fluid h-100 back mb-5">
            <div className="row mt-5">
                <div className="col-lg-5 col-12 text-center text-sm-center">
                    <div className=" ">
                        <img className="img-fluid w-75 opacity-75 fade border border-warning rounded-top-5 zoom" src={photo1} alt="" />
                    </div>
                </div>
                <div className="col-lg-7 col-12 text-light text-lg-start  text-center">
                    <p className="fs-4 mb-2">Je suis <span className="fs-2"> TEMGOUA SAMIRA</span></p>
                    <p className="fs-1 text-warning mb-2 typewriter text-uppercase">Developpeuse Web / Infographe /...</p>
                    <a href="/" className="mb-4 text-decoration-none btn border-warning text-warning">Télécharger mon CV <i className="fa fa-arrow-right"></i> </a><br/>
                    <div className="row mt-lg-5 d-inline">
                        <span className="rounded-pill p-2 m-2 fs-5 bg-white  opacity-100 text-success text-end"><FontAwesomeIcon icon={faWhatsapp} size="1x" /></span>
                        <span className="rounded-pill p-2 m-2 fs-5 bg-white  text-primary"><FontAwesomeIcon icon={faFacebookF} size="1x" /></span>
                        <span className="rounded-pill p-2 m-2 fs-5 bg-white text-black "><FontAwesomeIcon icon={faTwitter} size="1x" /></span>
                        <span className="rounded-pill p-2 m-2 fs-5 bg-white text-black"><FontAwesomeIcon icon={faInstagram} size="1x" /></span>
                        <span className="rounded-pill p-2 m-2 fs-5 bg-white  text-primary"><FontAwesomeIcon icon={faLinkedinIn} size="1x" /></span>
                    </div>
                    <img className="img-fluid w-75 opacity-50 d-lg-block d-none" src={photo2} alt="" />
                </div>
            </div>
        </div>
        /* <div class="container my-5">
    <div class="row">
      <div class="col-lg-7 col-12 d-flex justify-content-center">
        <div class="profile-image">
          <img src={photo1} alt="Profile Image" class="img-fluid"/>
          
        </div>
      </div>
      <div class="col-lg-5 col-12 text-end text-sm-center"><div class="content-overlay">
            <h2>TEMGOUA SAMIRA</h2>
            <p>Développeuse Web / Infographe / ...</p>
            <button class="btn btn-primary">Télécharger CV</button>
            <div class="mt-4">
              <a href="#" class="mx-2"><i class="fab fa-whatsapp"></i></a>
              <a href="#" class="mx-2"><i class="fab fa-facebook"></i></a>
              <a href="#" class="mx-2"><i class="fab fa-twitter"></i></a>
              <a href="#" class="mx-2"><i class="fab fa-instagram"></i></a>
              <a href="#" class="mx-2"><i class="fab fa-linkedin"></i></a>
            </div>
          </div>
      </div>
    </div>
  </div> */
        
    );

}

export default Home;