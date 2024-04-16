import "./header.css"
import React from 'react';
import { useLanguage } from '../../language';
import "../../language";
import NavBar from '../navbar/NavBar';

const Header =() =>{

    const { language, resources} = useLanguage();
    const {headerH3, are,legend, layoutRight, technology, innovation , reliability , and , the} = resources[language];
    return(
        <section className="header row m-0 d-none d-lg-block" >
            <NavBar/>
            
        </section>
    )
}


export default Header;