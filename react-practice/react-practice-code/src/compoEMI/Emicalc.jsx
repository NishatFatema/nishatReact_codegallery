// import { Button } from "bootstrap"
import React, {useState} from "react";
import { Form, Row, Col, Button,  Card} from "react-bootstrap";
import "./Emicalc.css";
 export const Emicalc =()=>{
     const  [p,setP] = useState(0);
     const  [n,setN] = useState(0);
     const  [r,setR] = useState(0);
     const  [emi,setEmi] = useState(0);

     const handleCalEMI=()=>{

         const si=((p*n*r)/100);
         const repayAmount = Number(p) + Number(si);
         const emiLocal = repayAmount / (n*  12);
         setEmi(emiLocal);

         
     };
     return(
 <div>
        <Card className="Calc">
                 <h1>EMI Calculate</h1><br />

        <Row>
                    <Col md={1}></Col>

                    <Col md={3}>
         <Form.Control type="number" placeholder="principal" onChange={(e)=>setP(e.target.value)}/>

                    </Col>

                    <Col md={3}>
         <Form.Control type="number" placeholder="Number of year" onChange={(e)=>setN(e.target.value)}/>
                    </Col>

                    <Col md={3}>
         <Form.Control type="number" placeholder="Rate of Interest"onChange={(e)=>setR(e.target.value)}/>
                    </Col>     

                    <Col md={1}>
         <Button variant="primary" onClick={handleCalEMI}>Calculate EMI</Button>
                     
                     </Col>
        
        </Row>
                <Row>
                    
                <Col md={3}></Col>
                <Col md={6}>
                    <h1>EMI : {emi} </h1>
                </Col>
            </Row>
        </Card>
</div>
     )
 }

 {/* <label>Enter Principel</label>
         <input type="text"/><br />
         <label>No.of years</label>
         <input type="text"/><br/>
         <label>Rate</label>
         <input type="text"/><br /> */}