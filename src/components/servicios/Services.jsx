import "./services.css"
import React from 'react';
// import { useLanguage } from '../../language';
import "../../language";

const Services = () => {

    // const { language, resources} = useLanguage();
    // const {headerH3, are,legend, layoutRight, technology, innovation , reliability , and , the} = resources[language];

    return(
        <section className="services">
            <article className="row">
                <h2>Servicios</h2>
                <div className="services-web-development d-flex justify-content-evenly align-item-center w-100">
                    <div>
                        <h3 className="services-web-development-h3">Web Development</h3>
                        <p>¿Necesitas una web que te haga brillar?</p>
                        <p>¡Desarrolla tu proyecto online con nuestro equipo experto!</p>
                        <ul>
                            <li>Diseño web profesional y personalizado</li>
                            <li>Soluciones a medida para tus necesidades</li>
                            <li>Posicionamiento SEO para que te encuentren en Google</li>
                            <li>Soporte técnico y mantenimiento continuo</li>
                        </ul>
                    </div>
                    <div className="services-web-development-image">
                        
                    </div>
                </div>
            </article>

            <article className="row">
                <div className="services-ux-ui d-flex justify-content-evenly align-item-center w-100">
                    <div>
                        <h3 className="services-ux-ui-h3">UX/UI design</h3>
                        <p>¿Necesitas una web que te haga brillar?</p>
                        <p>¡Desarrolla tu proyecto online con nuestro equipo experto!</p>
                        <ul>
                            <li>Diseño web profesional y personalizado</li>
                            <li>Soluciones a medida para tus necesidades</li>
                            <li>Posicionamiento SEO para que te encuentren en Google</li>
                            <li>Soporte técnico y mantenimiento continuo</li>
                        </ul>
                    </div>
                    <div className="services-ux-ui-image">
                        
                    </div>
                    <div>
                </div>
                </div>
            </article>

            <article className="row">
                <div className="services-staff-on-demand d-flex justify-content-evenly align-item-center w-100">
                    <div>
                        <h3 className="services-staff-on-demand-h3">Staff on demand</h3>
                        <p>¿Necesitas una web que te haga brillar?</p>
                        <p>¡Desarrolla tu proyecto online con nuestro equipo experto!</p>
                        <ul>
                            <li>Diseño web profesional y personalizado</li>
                            <li>Soluciones a medida para tus necesidades</li>
                            <li>Posicionamiento SEO para que te encuentren en Google</li>
                            <li>Soporte técnico y mantenimiento continuo</li>
                        </ul>
                    </div>
                    <div className="services-staff-on-demand-image">
                        
                    </div>
                    <div>
                    </div>
                </div>
            </article>
        </section>
    )
}

export default Services;


