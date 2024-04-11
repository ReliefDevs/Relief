import React from 'react';
import { useLanguage } from '../../language';
import "../../language";
import "./info.css"

const Info = ()=>{
    const { language, resources, changeLanguage } = useLanguage();
    const {info, proyects,spanInfo , spanInfo2, spanInfo3} = resources[language];

    return(
        <section className='seccion-info-container'>
            <div className='seccion-info'>
                <p onClick={() => changeLanguage(language === 'es' ? 'en' : 'es')}>
                {language === 'en' ? <p className='seccion-info-en'>{spanInfo3}<strong >{spanInfo}</strong>{info}<strong>{spanInfo2}</strong></p> : <p className='seccion-info-es'><strong >{spanInfo}</strong>{info}<strong>{spanInfo2}</strong></p>}
            </p>
            </div>
            <div className='seccion-proyects'>
                <p><a href="">{proyects} <svg className='arrow' xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <path d="M12.58 25.42L22.58 35.42C22.7702 35.602 22.9945 35.7448 23.24 35.84C23.7269 36.04 24.2731 36.04 24.76 35.84C25.0055 35.7448 25.2298 35.602 25.42 35.42L35.42 25.42C35.6065 25.2335 35.7544 25.0121 35.8553 24.7685C35.9562 24.5248 36.0082 24.2637 36.0082 24C36.0082 23.4674 35.7966 22.9566 35.42 22.58C35.0434 22.2034 34.5326 21.9918 34 21.9918C33.4674 21.9918 32.9566 22.2034 32.58 22.58L26 29.18L26 14C26 13.4695 25.7893 12.9608 25.4142 12.5857C25.0391 12.2107 24.5304 12 24 12C23.4696 12 22.9609 12.2107 22.5858 12.5857C22.2107 12.9608 22 13.4695 22 14L22 29.18L15.42 22.58C15.2341 22.3925 15.0129 22.2437 14.7691 22.1422C14.5254 22.0406 14.264 21.9884 14 21.9884C13.736 21.9884 13.4746 22.0406 13.2308 22.1422C12.9871 22.2437 12.7659 22.3925 12.58 22.58C12.3925 22.7659 12.2437 22.9871 12.1422 23.2308C12.0407 23.4745 11.9884 23.7359 11.9884 24C11.9884 24.264 12.0407 24.5254 12.1422 24.7691C12.2437 25.0128 12.3925 25.234 12.58 25.42Z" fill="#005C57"/>
                    </svg></a></p> 
                
            </div>
        </section>
    );
}

export default Info;