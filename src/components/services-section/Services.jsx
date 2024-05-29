import "./services.css"
import React from 'react';
import { useLanguage } from '../../language';
import "../../language";

const Services = () => {

    const { language, resources} = useLanguage();
    const {services} = resources[language];

    return(
        <section className="services">
            <article className="row pb-5 w-auto m-0">
                <h2 className="py-5 w-auto">{services.h2}</h2>
                <div className="services-web-development d-flex justify-content-start align-item-center m-0 p-0">
                    <div>
                        <h3 className="services-web-development-h3">Web Development</h3>
                        <p className="services-ux-ui-box-p services-text">{services.web_development.question}</p>
                        <p className="services-text">{services.web_development.p}</p>
                        <ul>
                            <li>{services.web_development.item1}</li>
                            <li>{services.web_development.item2}</li>
                            <li>{services.web_development.item3}</li>
                            <li>{services.web_development.item4}</li>
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
                        <p className="services-ux-ui-box-p services-text">{services.uxui_design.question}</p>
                        <p className="services-text">{services.uxui_design.p}</p>
                        <ul>
                            <li>{services.uxui_design.item1}</li>
                            <li>{services.uxui_design.item2}</li>
                            <li>{services.uxui_design.item3}</li>
                            <li>{services.uxui_design.item4}</li>
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
                        <p className="services-ux-ui-box-p services-text">{services.staff_on_demand.question}</p>
                        <p className="services-text">{services.staff_on_demand.p}</p>
                        <ul>
                            <li>{services.staff_on_demand.item1}</li>
                            <li>{services.staff_on_demand.item2}</li>
                            <li>{services.staff_on_demand.item3}</li>
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


