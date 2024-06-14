import React from 'react';
import { useLanguage } from '../../language';
import "./navbar.css";
import "../../language";
import flagEs from './flags/espana.png';
import flagEn from './flags/eeuu.png';

//Fuction Navbar//

 const Navbar = ()=>{
    const { language, resources, changeLanguage } = useLanguage();
    const { nav_bar} = resources[language];

    return(
        <div className="row">
            <div className="col-2 d-flex justify-content-center mt-3 mb-3">
                <p className= "d-flex align-content-center nav-name m-0">Relief;</p>
            </div>
            <div className="col-9 d-flex justify-content-end align-content-center mt-3">
                <ul className= "nav-list justify-content-evenly p-0">  
                    <li className=' align-content-center '><a href="#servies">{nav_bar.services}</a></li>
                    <li className=' align-content-center '><a href="#processes">{nav_bar.processes}</a></li>
                    <li className=' d-flex align-self-center text-center  justify-content-center about' ><a id="about" href="#about-us">{nav_bar.about}</a></li>
                    <li className=' align-content-center '><a href="#contact">{nav_bar.contact}</a></li>
                </ul>
            </div>
            
            {/* <div className="col-1 d-flex justify-content-end align-content-center">
                <button className='language ' onClick={() => changeLanguage(language === 'es' ? 'en' : 'es')}>
                    {language === 'es' ?  <img  className="img-language img-fluid"src={flagEs} alt="Español"/> : <img  className="img-language img-fluid" src={flagEn} alt="English"/>}
                </button>
            </div> */}
        </div>

    

    );
}

export default Navbar; 