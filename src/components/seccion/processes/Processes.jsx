import React from 'react';
import"./processes.css"
import { useLanguage } from '../../../language';   
import { showDefinition } from '../../../processes';
import "../../../language";
import "../../../processes"


const Processes = ()=>{
    const { language, resources } = useLanguage();
    const {titleP , analysis,design,development, testing,maintenance,repeat , analysisDef , designDef, developmentDef , testingDef,maintenanceDef,repeatDef} = resources[language];


    return(
    <section class='section-processes-container'>
        <h2 class="text-center text-md-start">{titleP}</h2>
    <div class="container">
    
        <div class="row">
            <div class="col-sm-12 justify-content-center col-md-5 d-flex col-lg-6">  
                <div class='subtitle-box p-5 col-10 justify-content-center'>
                    <div class="subtitle" onClick={() =>showDefinition(0)}>1.{analysis}</div>
                    <div class="subtitle" onClick={() =>showDefinition(1)}>2.{design}</div>
                    <div class="subtitle" onClick={() =>showDefinition(2)}>3.{development}</div>
                    <div class="subtitle" onClick={() =>showDefinition(3)}>4.{testing}</div>
                    <div class="subtitle" onClick={() =>showDefinition(4)}>5.{maintenance}</div>
                    <div class="subtitle" onClick={() =>showDefinition(5)}>6.{repeat}</div>     
                </div>
            </div>
            <div class="col-sm-12 col-md-7 d-flex justify-content-center col-lg-6">   
                <div class='definition-box col-12 d-flex align-content-center'>
                    <div class="definition"><p id='first-definition'>{analysisDef}</p></div>
                    <div class="definition"><p>{designDef}</p></div>
                    <div class="definition"><p>{developmentDef}</p></div>
                    <div class="definition"><p>{testingDef}</p></div>
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