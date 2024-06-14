
import "./contactUs.css" 
import { useLanguage } from '../../language';
import "../../language";
import '@material/web/textfield/filled-text-field.js';
import '@material/web/dialog/dialog.js' 
import '@material/web/button/text-button'
import '@material/web/button/filled-button'
import React, { useRef } from 'react';
import emailjs, { send } from '@emailjs/browser'; 




const ContactUs=(messageState) =>{
    
    const {language, resources} = useLanguage();
    const {contactUs} = resources[language];
    const form = useRef();
    var messageState ="ok";
    const sendEmail = (e) => {
        e.preventDefault();

        document.getElementById("email-form").reset();
        let dialog = document.getElementById("dialog");
        dialog.show();
        /*Queda comentado por el limite mensual de 200 mails */
       /*  emailjs
        .sendForm(
            'service_c6fs9wo', 
            'template_y9j1u5n', 
            form.current, {
            publicKey: 'uFf7_zN6AGSiJap4v',
        })
        .then(
            () => {
                document.getElementById("email-form").reset();
                let dialog = document.getElementById("dialog");
                dialog.show();
            },
            (error) => {

                alert('FAILED...', error.text);
            },
        ); */
    }; 

    const messageRendering = (messageState, textOk, textFail, titleOk, titleFail, closeButton)=>{
        if (messageState == "ok"){
            return (
                <md-dialog id="dialog">
                    <div slot="headline" id="title-ok">
                        {titleOk}
                    </div>
                    <form slot="content" id="text-ok" method="dialog">
                        {textOk}
                    </form>
                    <div slot="actions">
                        <md-text-button form="text-ok"> {closeButton}</md-text-button>
                    </div>
                </md-dialog>
            )
        }
        return (
            <md-dialog id="dialog">
                <div slot="headline" id="title-fail">
                    {titleFail}
                </div>
                <form slot="content" id="text-fail" method="dialog">
                    {textFail}
                </form>
                <div slot="actions">
                    <md-text-button form="text-fail"> {closeButton}</md-text-button>
                </div>
            </md-dialog>
        )
    }


    return(
        <section className="contact-us" id="contact" >
                <div className="col-12">
                    <h1 className='contact-title '>{contactUs.title}</h1>
                </div>
                <div className="row ">
                <div className="col-6">
                    <form id="email-form" action="" ref={form} onSubmit={sendEmail} className='d-flex flex-column mb-3'>

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
                        >{contactUs.sendButton}</md-filled-button>       
                    </form>

                    {messageRendering(  messageState, 
                                        contactUs.popup.textOk, 
                                        contactUs.popup.textFail, 
                                        contactUs.popup.titleOk, 
                                        contactUs.popup.titleFail,
                                        contactUs.popup.closeButton
                    )}
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