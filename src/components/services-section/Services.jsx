import "./services.css"
import React from 'react';
import { useLanguage } from '../../language';
import "../../language";

const Services = () => {

    const { language, resources} = useLanguage();
    const {headerH3, are,legend, layoutRight, technology, innovation , reliability , and , the} = resources[language];

    return(
        <section className="services">
            <article className="row pb-5 w-auto m-0">
                <h2 className="py-5 w-auto">Servicios</h2>
                <div className="services-web-development d-flex justify-content-start align-item-center m-0 p-0">
                    <div>
                        <h3 className="services-web-development-h3">Web Development</h3>
                        <p className="services-ux-ui-box-p">¿Necesitas una web que te haga brillar?</p>
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

            <article className="row pb-5 m-0">
                <div className="services-ux-ui d-flex justify-content-between align-item-center m-0 p-0">
                    <div className="services-ux-ui-box">
                        <h3 className="services-ux-ui-h3">UX/UI design</h3>
                        <p className="services-ux-ui-box-p">¿Conoces la importancia del diseño?</p>
                        <p>¡Estamos aqui para impulsar tu negocio y su apariencia!</p>
                        <ul>
                            <li>Diseño optimizado para incrementar tu conversión </li>
                            <li>Enfoque en la mejor experiencia para tus usuarios</li>
                            <li>Diseño competitivo y en tendencia</li>
                            <li>Diseño responsive </li>
                        </ul>
                    </div>
                    <div className="services-ux-ui-image">
                        
                    </div>
                    <div>
                </div>
                </div>
            </article>

            <article className="row pb-5 m-0">
                <div className="services-staff-on-demand d-flex justify-content-between align-item-center m-0 p-0">
                    <div>
                        <h3 className="services-staff-on-demand-h3">Staff <br />on demand</h3>
                        <p className="services-ux-ui-box-p">¿Conocias esta modalidad?</p>
                        <p>¡Equipos personalizados y a demanda!</p>
                        <ul>
                            <li>Equipo por tiempo indeterminado</li>
                            <li>Recursos humanos de alta capacidad</li>
                            <li>Personal flexible para adaptarse a tu proyecto</li>
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


