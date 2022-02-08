import React from "react"
import { candidateData } from "../Reducer/candidateData";
import { Card,Form } from "react-bootstrap"
import "./DynamicComp.css"

export const DynamicComp=()=>{
 return( 
 <Card className="dynComp">

     {Object.keys(candidateData).map(key=>(
        
     <p>{key}
       <Form.Control type= {candidateData[key].type} value={candidateData[key].data} placeholder={candidateData[key].placeholder}></Form.Control>
     
     </p>
     ))}
  </Card>
 );
};