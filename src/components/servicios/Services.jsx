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
                <div className="services-web-development">
                    <div>
                        <h3>Web Development</h3>
                        <p>¿Necesitas una web que te haga brillar?</p>
                        <p>¡Desarrolla tu proyecto online con nuestro equipo experto!</p>
                        <ul>
                            <li>Diseño web profesional y personalizado</li>
                            <li>Soluciones a medida para tus necesidades</li>
                            <li>Posicionamiento SEO para que te encuentren en Google</li>
                            <li>Soporte técnico y mantenimiento continuo</li>
                        </ul>
                    </div>
                    <div>

                    </div>
                </div>
            </article>
    <article className="row">

    </article>

    <article className="row">

    </article>
</section>
    )
}

export default Services;


