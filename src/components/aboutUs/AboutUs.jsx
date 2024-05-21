
import React from 'react';
import "./aboutUs.css" 
import { useLanguage } from '../../language';
import "../../language";

const AboutUs =() =>{

    const {language, resources} = useLanguage();
    const {aboutUs} = resources[language];

    return(
        <section className="about-us pt-4" >
                <div className="col-12 p-0">
                    <h4 className='about-us-title'>{aboutUs.title}</h4>
                    <div className="col-11 pb-4"><p className='about-us-text'>{aboutUs.text}</p></div>
                    <div className="col-11">
                        <p className='about-us-phrase'>"{aboutUs.phrase}</p>
                    </div>
                    <div className="col-9 d-flex justify-content-end">
                        <p className='single'>en <span className='about-us-bold '>{aboutUs.phraseBold}"</span></p>
                    </div>
                </div>
        </section>
    )
}


export default AboutUs;