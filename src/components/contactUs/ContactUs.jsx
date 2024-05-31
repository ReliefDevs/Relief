
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
                    <h1 className='contact-title '>{contactUs.title}</h1>
                </div>
                <div className="">
                    <form action="" className='d-flex flex-column'>

                        <md-filled-text-field 
                            type="text"
                            id="full-name"
                            label={contactUs.fullName} 
                            supporting-text={contactUs.fullNameSupportText} >
                        </md-filled-text-field>

                        <md-filled-text-field 
                            type="email" 
                            id="mail" 
                            label={contactUs.mail} 
                            supporting-text={contactUs.mailSupportText}>
                        </md-filled-text-field>

                        <md-filled-text-field 
                            type="textarea" 
                            id="input-text" 
                            rows="5" 
                            cols="33" 
                            label={contactUs.text} 
                            supporting-text={contactUs.textSupportText}>
                        </md-filled-text-field>
                    </form>
                </div>
        </section>
    )
}


export default ContactUs;