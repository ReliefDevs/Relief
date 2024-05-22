import "./services.css"
import React from 'react';
import { useLanguage } from '../../language';
import "../../language";

const Services = () => {

    const { language, resources} = useLanguage();
    const {services_h2, web_development_question, web_development_p, web_development_item1, web_development_item2, web_development_item3, web_development_item4,
        uxui_design_question, uxui_design_p, uxui_design_item1, uxui_design_item2, uxui_design_item3, uxui_design_item4,
        staff_on_demand_question, staff_on_demand_p, staff_on_demand_item1, staff_on_demand_item2, staff_on_demand_item3,
    } = resources[language];

    return(
        <section className="services">
            <article className="row pb-5 w-auto m-0">
                <h2 className="py-5 w-auto">{services_h2}</h2>
                <div className="services-web-development d-flex justify-content-start align-item-center m-0 p-0">
                    <div>
                        <h3 className="services-web-development-h3">Web Development</h3>
                        <p className="services-ux-ui-box-p services-text">{web_development_question}</p>
                        <p className="services-text">{web_development_p}</p>
                        <ul>
                            <li>{web_development_item1}</li>
                            <li>{web_development_item2}</li>
                            <li>{web_development_item3}</li>
                            <li>{web_development_item4}</li>
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
                        <p className="services-ux-ui-box-p services-text">{uxui_design_question}</p>
                        <p className="services-text">{uxui_design_p}</p>
                        <ul>
                            <li>{uxui_design_item1}</li>
                            <li>{uxui_design_item2}</li>
                            <li>{uxui_design_item3}</li>
                            <li>{uxui_design_item4}</li>
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
                        <p className="services-ux-ui-box-p services-text">{staff_on_demand_question}</p>
                        <p className="services-text">{staff_on_demand_p}</p>
                        <ul>
                            <li>{staff_on_demand_item1}</li>
                            <li>{staff_on_demand_item2}</li>
                            <li>{staff_on_demand_item3}</li>
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


