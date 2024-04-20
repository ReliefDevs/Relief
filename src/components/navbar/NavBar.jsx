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
        <div className="row">
            <div className="col-2 d-flex justify-content-center mt-3 mb-3">
                <p className= "d-flex align-content-center nav-name m-0">Relief;</p>
            </div>
            <div className="col-8 d-flex justify-content-center align-content-center mt-3">
                <ul className= "nav-list justify-content-evenly p-0">  
                    <li className=' align-content-center '><a href="#servies">{services}</a></li>
                    <li className=' align-content-center '><a href="#portfolio">{portfolio}</a></li>
                    <li className=' align-content-center '><a href="#about-us">{about}</a></li>
                    <li className=' align-content-center '><a href="#contact">{contact}</a></li>
                </ul>
            </div>
            <div className="col-2 d-flex justify-content-end align-content-center">
                <button className='language ' onClick={() => changeLanguage(language === 'es' ? 'en' : 'es')}>
                    {language === 'es' ?  <img  className="img-language img-fluid"src={flagEs} alt="Español"/> : <img  className="img-language img-fluid" src={flagEn} alt="English"/>}
                </button>
            </div>
        </div>

    

    );
}

export default Navbar; 