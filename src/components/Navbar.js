import React from 'react';

const Navbar = () => { 
    return (
        <nav className="navbar navbar-expand-lg sticky-lg-top navbar-light bg-light">
            <div className="container">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarText">
                    <ul className="navbar-nav mb-2 mb-lg-0" style={{gap: '3rem'}}>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#"> <i className='fa fa-home'></i> Accueil</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><i className='fa fa-user'></i> A propos de moi</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><i className='fa fa-cog'></i> Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><i className='fa fa-project-diagram'></i> Projets</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><i className='fa fa-phone'></i> contact</a>
                        </li>
                    </ul>
                </div>
                <span className="navbar-text">
                    <i className='fa fa-sun'></i>
                </span>
            </div>
      </nav>
    )
 };  

 export default Navbar;