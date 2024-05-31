import React from 'react';
import"./processes.css"
import { useLanguage } from '../../language';   
import { showDefinition } from '../../services/processes';


const Processes = ()=>{
    const { language, resources } = useLanguage();
    const { processes} = resources[language];


    return(
    <section className='section-processes-container' id='processes'>
        <h2 className="text-center text-md-start">{processes.title}</h2>
    <div className="container-processes">
    
        <div className="row" id='processes-row'>
            <div className="col-sm-12 justify-content-center col-md-7 d-flex col-lg-6">  
                <div className='subtitle-box p-5 col-10 justify-content-center'>
                    <div className="subtitle" onClick={() =>showDefinition(0)}>1.{processes.sub_title.analysis}</div>
                    <div className="subtitle" onClick={() =>showDefinition(1)}>2.{processes.sub_title.design}</div>
                    <div className="subtitle" onClick={() =>showDefinition(2)}>3.{processes.sub_title.development}</div>
                    <div className="subtitle" onClick={() =>showDefinition(3)}>4.{processes.sub_title.testing}</div>
                    <div className="subtitle" onClick={() =>showDefinition(4)}>5.{processes.sub_title.maintenance}</div>
                    <div className="subtitle" onClick={() =>showDefinition(5)}>6.{processes.sub_title.repeat}</div>     
                </div>
            </div>
            <div className="col-sm-12 col-md-5  justify-content-center align-items-center col-lg-6 definition-container">   
                <div className='definition-box justify-content-center align-items-center '>
                    <div className="definition"><p>{processes.defition.analysis}</p></div>
                    <div className="definition"><p>{processes.defition.design}</p></div>
                    <div className="definition"><p>{processes.defition.development}</p></div>
                    <div className="definition"><p>{processes.defition.testing}</p></div>
                    <div className="definition"><p>{processes.defition.maintenance}</p></div>
                    <div className="definition"><p>{processes.defition.repeat}</p></div>
                </div>
            </div> 
        </div>
    </div>
</section>
    );
}


export default Processes;