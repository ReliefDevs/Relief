import "./header.css"
import React from 'react';
import { useLanguage } from '../../language';
import "../../language";
import NavBar from '../navbar/NavBar';

const Header =() =>{

    const { language, resources} = useLanguage();
    const {header} = resources[language];
    return(
        <section className="header" >
            <div className="row m-0 d-none d-lg-block">
                <NavBar/>
            </div>
            <div className="row m-0">
                <h3 className="d-flex justify-content-center header-h3">{header.title}</h3>
            </div>
            <div className="row m-0">
            <div className="col-8 col-md-4 d-flex justify-content-center header-layout-left">
                    <h1>{header.are}<br/><span>Relief;</span></h1>
            </div>
            </div>
                <div className="row m-0 header-layaut-bottom">
                    <div className="col-12 mb-5 col-md-5 order-1 order-md-2 d-flex justify-content-end header-layout-right">
                        <div className=" col-4 col-md-10 m-0">
                            {header.layoutRight} <strong>{header.technology}</strong>{header.the}<strong>{header.innovation}</strong> {header.and} <br /><strong>{header.reliability}</strong>
                        </div>
                    </div>
                    <div className="col-12 col-md-6  order-2  order-md-1 align-self-end m-0 legend">
                        <p className="mt-5 header-layout-left-legend">{header.legend}</p>
                    </div>
                </div>
        </section>
    )
}


export default Header;