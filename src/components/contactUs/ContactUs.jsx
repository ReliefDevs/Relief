
import React from 'react';
import "./contactUs.css" 
import { useLanguage } from '../../language';
import "../../language";
import '@material/web/textfield/filled-text-field.js';


const ContactUs =() =>{

    const {language, resources} = useLanguage();
    const {contactUs} = resources[language];

    return(
        <section className="contact-us" >
                <div className="col-12">
                    <h1 className='contact-title'>{contactUs.title}</h1>
                </div>
                <div className="col-12">
                    <md-filled-text-field  className="full-name" label={contactUs.fullName} supporting-text={contactUs.fullNameSupportText} value="" ></md-filled-text-field>
                    <md-filled-text-field  className="full-name" label={contactUs.mail} supporting-text={contactUs.mailSupportText} value="" ></md-filled-text-field>
                    <md-filled-text-field  className="full-name" label={contactUs.text} supporting-text={contactUs.mailSupportText} value="" ></md-filled-text-field>
                </div>
        </section>
    )
}


export default ContactUs;