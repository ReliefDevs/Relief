import React from 'react';
import"./processes.css"
import { useLanguage } from '../../../language';   
import { showDefinition } from '../../../processes';
import "../../../language";
import "../../../processes"


const Processes = ()=>{
    const { language, resources } = useLanguage();
    const { analysis,design,development, evidence,maintenance,repeat , analysisDef , designDef, developmentDef , evidenceDef,maintenanceDef,repeatDef} = resources[language];


    return(
    <section className='section-processes-container'>
        <div className="row">
            <div className="col-md-12 text-center title ">   
                <h1>Proceso</h1>
            </div>
        </div>
        <div className="row m-0">
            <div className='col'>
                <div className='subtitle-box'>
                    <div className="subtitle"  onClick={() =>showDefinition(0)}> 1.{analysis}</div>
                    <div className="subtitle"  onClick={() => showDefinition(1)}>2.{design}</div>
                    <div className="subtitle"  onClick={() => showDefinition(2)}>3.{development}</div>
                    <div className="subtitle"  onClick={() => showDefinition(3)}>4.{evidence}</div>
                    <div className="subtitle"  onClick={() => showDefinition(4)}>5.{maintenance}</div>
                    <div className="subtitle"  onClick={() => showDefinition(5)}>6.{repeat}</div>    
                </div>
            </div>
            <div className="col">   
                <div className='definition-box'>
                    <div className="definition"><p>{analysisDef}​</p></div>
                    <div className="definition"><p>{designDef}</p></div>
                    <div className="definition"><p>​{developmentDef}</p></div>
                    <div className="definition"><p>{evidenceDef}</p></div>
                    <div className="definition"><p>{maintenanceDef}</p></div>
                    <div className="definition"><p>{repeatDef}</p></div>

                </div>
            </div>
            </div>
        

        </section>
    );
}


export default Processes;