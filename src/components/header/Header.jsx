import "./header.css"
import React from 'react';
import { useLanguage } from '../../language';
import "../../language";
import NavBar from '../navbar/NavBar';

const Header =() =>{

    const { language, resources} = useLanguage();
    const {headerH3, are,legend, layoutRight, technology, innovation , reliability , and , the} = resources[language];
    return(
        <section className="header" >
            <div className="row m-0 d-none d-lg-block">
                <NavBar/>
            </div>
            <div className="row m-0">
                <h3 className="d-flex justify-content-center header-h3">{headerH3}</h3>
            </div>
            <div className="row m-0">
                <div className="col-8 col-md-4 d-flex justify-content-center header-layout-left">
                    <h1>{are}<br /><span>Relief;</span></h1>
                </div>
            </div>
                <div className="row m-0">
                    <div className="col-md-3  p-0 header-layout-right">
                            {layoutRight} <strong>{technology}</strong>{the}<strong>{innovation}</strong> {and} <strong>{reliability}</strong>
                    </div>
                    <div className="col-md-6  p-0">
                        <p className="header-layout-left-legend">{legend}</p>
                    </div>
                </div>
        </section>
    )
}


export default Header;