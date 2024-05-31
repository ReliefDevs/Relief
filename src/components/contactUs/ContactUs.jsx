
import React from 'react';
import "./contactUs.css" 
import { useLanguage } from '../../language';
import "../../language";
import '@material/web/textfield/filled-text-field.js';
import '@material/web/button/filled-button'

/* import React, { useRef } from 'react';
import emailjs from '@emailjs/browser'; */


const ContactUs =() =>{

    const {language, resources} = useLanguage();
    const {contactUs} = resources[language];
    //const form = useRef();

/*     const sendEmail = (e) => {
        e.preventDefault();

        emailjs
        .sendForm(
            'service_c6fs9wo', 
            'template_y9j1u5n', 
            form.current, {
            publicKey: 'uFf7_zN6AGSiJap4v',
        })
        .then(
            () => {
            console.log('SUCCESS!');
            },
            (error) => {
            console.log('FAILED...', error.text);
            },
        );
    }; */




    return(
        <section className="contact-us" >
                <div className="col-12">
                    <h1 className='contact-title '>{contactUs.title}</h1>
                </div>
                <div className="row ">
                <div className="col-6">
                    <form action=""  className='d-flex flex-column'>

                        <md-filled-text-field 
                            type="text"
                            id="full-name"
                            name="user_name"
                            label={contactUs.fullName} 
                            supporting-text={contactUs.fullNameSupportText} >
                        </md-filled-text-field>

                        <md-filled-text-field 
                            type="email" 
                            id="mail" 
                            name="user_email"
                            label={contactUs.mail} 
                            supporting-text={contactUs.mailSupportText}>
                        </md-filled-text-field>

                        <md-filled-text-field 
                            type="textarea" 
                            id="input-text" 
                            name="message"
                            rows="5" 
                            cols="33" 
                            label={contactUs.text} 
                            supporting-text={contactUs.textSupportText}>
                        </md-filled-text-field>
                        <md-filled-button 
                        id="complete-button"
                        type="submit"
                        value={contactUs.sendButton}
                        ></md-filled-button>       
                        </form>
                </div>
                <div className="col-6 d-flex justify-content-center">
                    <img 
                        src={require('./img/g10.png')} 
                        className='img-fluid contact-img'
                        alt=""/>
                </div>
                </div>
        </section>
    )
}


export default ContactUs;