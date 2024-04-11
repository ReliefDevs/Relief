import "./header.css"
import React from 'react';
import { useLanguage } from '../../language';
import "../../language";
import NavBar from '../navbar/NavBar';

const Header =() =>{

    const { language, resources, changeLanguage } = useLanguage();
    const {headerH3, are,legend, layoutRigth, technology, innovation , reliability , and , the} = resources[language];
    return(
        <section className="header">
            <NavBar/>
            <div className="header-h3">
                <h3>{headerH3}</h3>
            </div>
            <div className="header-layout">
                <div className="header-layout-left">
                    <h1>{are}<br /><span>Relief;</span></h1>
                    <p className="header-layout-left-legend">{legend}</p>
                </div>
                <div className="header-layout-right">
                   {layoutRigth} <strong>{technology}</strong>{the}<strong>{innovation}</strong> {and} <strong>{reliability}</strong>
                </div>
            </div>
        </section>
    )
}


export default Header;