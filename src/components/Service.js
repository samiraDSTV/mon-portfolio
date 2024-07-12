import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodepen, faPhp} from '@fortawesome/free-brands-svg-icons'
import { faPaintBrush, faPaintRoller, faPaintbrush, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'


const Service = () => { 
    const text1 = "Concevoir, développer et maintenir des applications web dynamiques en utilisant PHP et le framework Laravel.Implémenter les fonctionnalités et la logique métier de l'application.Créer et gérer les différentes couches de l'architecture MVC (Modèle, Vue, Contrôleur). Intégrer des bases de données (MySQL, PostgreSQL, etc.) à l'aide d'Eloquent, l'ORM de Laravel. Développer des API REST pour permettre l'interaction avec l'application. Mettre en place des tests unitaires et d'intégration pour assurer la fiabilité du code."
    const [isExpanded, setIsExpanded] = useState(false);
    function toggleExpansion (){
        setIsExpanded(!isExpanded);
    }
    return (
        <div className="container">
        
            <h3 className='text-warning text-center'> ---------------------   Mes Services  ------------------------</h3>
            <br/><br/>
            <div className="row">
                <div className="col-lg-4 col-md-6 col-md-12 p-2">
                    <div className="card bg-transparent border-light">
                        <div className="card-header mt-2">
                            <span className="rounded-circle p-2 bg-white bg-opacity-25 opacity-100 text-success"><FontAwesomeIcon icon={faPaintbrush} size="1x" /></span>
                        </div>
                        <div className="card-body">
                            <p className={`fs-4 ${isExpanded ? 'text-light' : 'text-warning'}`}>{isExpanded ? text1 : `${text1.substring(0, 300)}...`}</p>
                            
                            <button className='text-success border-0 bg-white rounded-2 p-1 fs-5 opacity-100' onClick={toggleExpansion}>
                                {isExpanded ? 'Voir moins ' : 'Voir plus '} <FontAwesomeIcon icon={faArrowCircleRight} size="1x" />
                            </button>
                        </div>
                        <div className="card-footer">

                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-md-12 p-2">
                    <div className="card bg-transparent border-light">
                        <div className="card-header mt-2">
                            <span className="rounded-circle p-2 bg-white bg-opacity-25 opacity-100 text-success"><FontAwesomeIcon icon={faPhp} size="1x" /></span>
                            <h3 className="text-warning mt-3">Developpement PHP / LARAVEL</h3>
                        </div>
                        <div className="card-body">
                            <p className="text-light fs-4">
                            Concevoir, développer et maintenir des applications web dynamiques en utilisant PHP et le framework Laravel.
                            Implémenter les fonctionnalités et la logique métier de l'application.
                            Créer et gérer les différentes couches de l'architecture MVC (Modèle, Vue, Contrôleur).
                            Intégrer des bases de données (MySQL, PostgreSQL, etc.) à l'aide d'Eloquent, l'ORM de Laravel.
                            Développer des API REST pour permettre l'interaction avec l'application.
                            Mettre en place des tests unitaires et d'intégration pour assurer la fiabilité du code.
                            </p>
                        </div>
                        <div className="card-footer">

                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-md-12 p-2">
                    <div className="card bg-transparent border-light">
                        <div className="card-header mt-2">
                            <span className="rounded-circle p-2 bg-white bg-opacity-25 opacity-100 text-success"><FontAwesomeIcon icon={faCodepen} size="1x" /></span>
                            <h3 className="text-warning mt-3 mt-3">Web Design</h3>
                        </div>
                        <div className="card-body">
                            <p className="text-light fs-4">
                                Responsive design : Conception adaptative aux différents appareils et tailles d'écran.faPaintBrush
                                Design visuel : Choix de la typographie, des couleurs, des images, des icônes.
                                Composition et mise en page : Organisation des éléments sur la page.
                                Interactions et animations : Effets d'interaction et de transition.
                                Optimisation des performances : Rapidité de chargement et d'affichage.
                                Coherence de la marque : Respect de l'identité visuelle de la marque.
                            </p>
                        </div>
                        <div className="card-footer">

                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-md-12 p-2">
                    <div className="card bg-transparent border-light">
                        <div className="card-header mt-2">
                            <span className="rounded-circle p-2 bg-white bg-opacity-25 opacity-100 text-success"><FontAwesomeIcon icon={faPaintBrush} size="1x" /></span>
                            <h3 className="text-warning mt-3">Developpement Front-End</h3>
                        </div>
                        <div className="card-body">
                            <p className="text-light fs-4">
                            créer l’interface utilisateur d’un site web ou d’une application web. 
                            Afin d’y parvenir, il intervient le plus souvent sur l’ensemble des éléments apparaissent à l’écran et gérés par le navigateur web de l’utilisateur. 
                            Dans son travail se côtoient donc une partie design et ergonomie et une partie développement.
                            </p>
                        </div>
                        <div className="card-footer">

                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-md-12 p-2">
                    <div className="card bg-transparent border-light">
                        <div className="card-header mt-2">
                            <span className="rounded-circle p-2 bg-white bg-opacity-25 opacity-100 text-success"><FontAwesomeIcon icon={faCodepen} size="1x" /></span>
                            <h3 className="text-warning mt-3">UI / UX Design</h3>
                        </div>
                        <div className="card-body">
                            <p className="text-light fs-4">
                                Expérience utilisateur (UX) : Étude et conception de l'interaction et de l'expérience de l'utilisateur avec un produit/service.
                                Interface utilisateur (UI) : Conception visuelle et interactive de l'interface graphique.
                                Wireframes et maquettes : Schémas de structure et design de l'interface.
                                Accessibilité : Conception inclusive pour une utilisation par tous les utilisateurs.
                                Prototype : Simulation interactive d'un design pour tests et itérations.
                                Recherche utilisateur : Études et analyse des besoins, comportements et préférences des utilisateurs.
                                Ergonomie : Optimisation de l'ergonomie et de l'utilisabilité.
                            </p>
                        </div>
                        <div className="card-footer">

                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-md-12 p-2">
                    <div className="card bg-transparent border-light">
                        <div className="card-header mt-2">
                            <span className="rounded-circle p-2 bg-white bg-opacity-25 opacity-100 text-success"><FontAwesomeIcon icon={faPaintRoller} size="1x" /></span>
                        </div>
                        <div className="card-body">

                        </div>
                        <div className="card-footer">

                        </div>
                    </div>
                </div>
                
                {/* <div className="col-lg-4 col-md-6 col-md-12 p-2">
                    <div className="card">
                        <div className="card-header">
                            <span className="rounded-circle p-2 bg-white bg-opacity-25 opacity-100 text-success"><i className='fa fa-computer'></i></span>
                        </div>
                        <div className="card-body">

                        </div>
                        <div className="card-footer">

                        </div>
                    </div>
                </div> */}
            </div>
        
        </div>
    )
 };  

 export default Service;