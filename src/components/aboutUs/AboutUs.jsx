
import React from 'react';
import "./aboutUs.css" 
import { useLanguage } from '../../language';
import "../../language";

const AboutUs =() =>{

    const {language, resources} = useLanguage();
    const {aboutUs, ourTeam} = resources[language];

    return(
        <section className="about-us pt-4" >
                {/* Seccion About US */}
                <div className="col-12 p-0">
                    <h4 className='about-us-title'>{aboutUs.title}</h4>
                    <div className="col-11 pb-4"><p className='about-us-text'>{aboutUs.text}</p></div>
                    <div className="col-11">
                        <p className='about-us-phrase'>"{aboutUs.phrase}</p>
                    </div>
                    <div className="col-11 d-flex justify-content-end">
                        <p className='single'>en </p><span className='about-us-bold'>{aboutUs.phraseBold} "</span>
                    </div>
                </div>

                {/* Seccion OurTeam */}

                <div className="row d-flex justify-content-center our-team-container">
                    <div className="row">
                        <p className='about-us-phrase pt-4'>{ourTeam.title}</p>
                    </div>
                    <div className="row">
                        <div className="col-4  d-flex justify-content-center align-content-around">
                            <div className="card ">
                                <img className="img-fluid images" src={require('./img/alan.jpg')} alt="" />  
                                <h5 className='card-title text-center mt-2'>Alan Diaz</h5>
                                <p class="card-text text-center ">CEO - Scrum Master</p> 
                            </div>
                        </div>
                    
                        <div className="col-4  d-flex justify-content-center">
                            <img className="img-fluid images p-1" src={require('./img/tomi.png')} alt="" />  
                        </div>
                    
                        <div className="col-4 d-flex justify-content-center">
                            <img className="img-fluid p-5" src={require('./img/alan.jpg')} alt="" />  
                        </div>
                    
                        <div className="col-4  d-flex justify-content-center">
                            <img className="img-fluid p-5" src={require('./img/alan.jpg')} alt="" />  
                        </div>
                    
                        <div className="col-4  d-flex justify-content-center">
                            <img className="img-fluid p-5" src={require('./img/alan.jpg')} alt="" />  
                        </div>
                    </div>

                </div>

        </section>
    )
}


export default AboutUs;