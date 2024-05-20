
import React from 'react';
import { useLanguage } from '../../language';
import "../../language";

const AboutUs =() =>{

    const { language, resources} = useLanguage();
    const {aboutUs, aboutUsText,aboutUsPhrase,aboutUsPhraseBold} = resources[language];

    return(
        <section className="about-us" >
                <div className="col-12 p-0">
                    <h1>{aboutUs.title}</h1>
                    <p>{aboutUs.text}</p>
                    <p>{aboutUs.phrase} <span>{aboutUs.phraseBold}</span></p>
                </div>
        </section>
    )
}


export default AboutUs;