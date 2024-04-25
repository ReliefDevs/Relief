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
    <section class='section-processes-container'>
        <h2 class="text-center text-md-start">Procesos</h2>
    <div class="container">
    
        <div class="row">
            <div class="col-sm-12 justify-content-start col-md-5 d-flex col-lg-6 justify-content-center">  
                <div class='subtitle-box'>
                    <div class="subtitle"   onClick={() =>showDefinition(0)}>1.{analysis}</div>
                    <div class="subtitle"  onClick={() =>showDefinition(1)}>2.{design}</div>
                    <div class="subtitle"   onClick={() =>showDefinition(2)}>3.{development}</div>
                    <div class="subtitle"   onClick={() =>showDefinition(3)}>4.{evidence}</div>
                    <div class="subtitle" onClick={() =>showDefinition(4)}>5.{maintenance}</div>
                    <div class="subtitle"   onClick={() =>showDefinition(5)}>6.{repeat}</div>     
                </div>
            </div>
            <div class="col-sm-12 justify-content-start col-md-7 justify-content-center col-lg-6">   
                <div class='definition-box'>
                    <div class="definition"><p>{analysisDef}</p></div>
                    <div class="definition"><p>{designDef}</p></div>
                    <div class="definition"><p>{developmentDef}</p></div>
                    <div class="definition"><p>{evidenceDef}</p></div>
                    <div class="definition"><p>{maintenanceDef}</p></div>
                    <div class="definition"><p>{repeatDef}</p></div>
                </div>
            </div>
        </div>
    </div>
</section>
    );
}


export default Processes;