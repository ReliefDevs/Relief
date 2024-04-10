import React from 'react';
import { useLanguage } from '../../language';
import "./navbar.css";
import "../../language";
import flagEs from './flags/espana.png';
import flagEn from './flags/eeuu.png';

//Fuction Navbar//

 const Navbar = ()=>{
    const { language, resources, changeLanguage } = useLanguage();
    const { services, portfolio, about,contact } = resources[language];

    return(
        <nav className = "nav-container">
            <p className= "nav-name">Relief;</p>
            <ul className= "nav-list">  
                <li><a href="#servies">{services}</a></li>
                <li><a href="#portfolio">{portfolio}</a></li>
                <li><a href="#about-us">{about}</a></li>
                <li><a href="#contact">{contact}</a></li>
            </ul>
            <button className='language' onClick={() => changeLanguage(language === 'es' ? 'en' : 'es')}>
                {language === 'es' ?  <img src={flagEn} alt="English"/> : <img src={flagEs} alt="Español"/>}
            </button>
        </nav>
    

    );
}

export default Navbar; 