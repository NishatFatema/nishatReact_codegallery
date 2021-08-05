import React, {useState} from "react"
import { Card, Col, Form, Row } from "../../../../e-learn/node_modules/react-bootstrap/esm";
import "./Toggling.css"
import { Row, Col, Card } from "../../../../e-learn/node_modules/react-bootstrap/esm";

export const Toggling =()=>{
    const [fname,setFname]=useState("");
    const [lname,setLname]=useState("");
    const [qualification,setQualifi]=useState("");
    const [dob,Dob]=useState("");
    const [houseno,setHouseno]=useState("");
    const [street,setStreet]=useState("");
    const [city,setCity]=useState("");
    const [state,setState]=useState("");
    const [bulb,setBulb]=useState("on");
    return(

    <div>
        <Row>
            <Col md={1} ></Col>
            <Col md={4} className="col-4" >
                <Card className= { bulb=="on" ? "info" : "infoAcc" }>
                    <Card.Body>
                        <Card.Group>
                            <Col md= {8} >
                                <Row>
                                    {""}
                                     <Col>
                                         <Form.Label> First Name : </Form.Label>
                                     </Col>
                            </Row>
                                <Row>
                                    <Col>
                                        <Form.Control type="text" placeholder="enter first name" onChange={(e)=> setFname(e.target.value)} value={fname}></Form.Control>
                                    </Col>
                                </Row>

                                    <Row>
                                        <Col>
                                            <Form.Control type="text" placeholder="enter last name" onChange={(e)=> setLname(e.target.value)} value={lname}></Form.Control>
                                        </Col>
                                    </Row>

                                         <Row>
                                            <Col>
                                                <Form.Control type="text" placeholder="enter qualification" onChange={(e)=> setQualifi(e.target.value)} value={qualification}></Form.Control>
                                            </Col>
                                         </Row>
                                            
                                            <Row>
                                                <Col>
                                                    <Form.Control type="text" placeholder="enter Date of Birth" onChange={(e)=> Dob(e.target.value)} value={dob}></Form.Control>
                                                </Col>
                                            </Row>
                     
                                                <Row>
                                                    <Col>
                                                        <Form.Control type="text" placeholder="enter house number" onChange={(e)=> setHouseno(e.target.value)} value={houseno}></Form.Control>
                                                    </Col>
                                                </Row>

                                                    <Row>
                                                         <Col>
                                                            <Form.Control type="text" placeholder="enter house number" onChange={(e)=> setHouseno(e.target.value)} value={houseno}></Form.Control>
                                                         </Col>
                                                    </Row>

                                                        <Row>
                                                            <Col>
                                                                <Form.Control type="text" placeholder="enter city" onChange={(e)=> setCity(e.target.value)} value={city}></Form.Control>
                                                            </Col>
                                                        </Row>

                                                            <Row>
                                                                <Col>
                                                                    <Form.Control type="text" placeholder="enter street" onChange={(e)=> setStreet(e.target.value)} value={street}></Form.Control>
                                                                </Col>
                                                            </Row>

                                                                <Row>
                                                                    <Col>
                                                                        <Form.Control type="text" placeholder="enter state" onChange={(e)=> setState(e.target.value)} value={state}></Form.Control>
                                                                    </Col>
                                                                </Row>
                            </Col>
                        </Card.Group>
                    </Card.Body>
                </Card>
            </Col>
{/* .......................................Second Card............................................................................................ */}
   <Col md={4}>
       <Row>
            <Card className= { bulb=="on" ? "info" : "infoAcc" }>
               <Card.Body>
                   <Row>
                        <Col md={6}>
                            <Image src="I"/>
                        </Col>
                        <Col md={6}>
                            <Row>
                                <Col>
                                <b>Full Name</b>
                                <h3>{`${fname}${lname},`}</h3>
                                </Col>
                                <b>Date of birth</b>
                                <Col>{`${dob}`}</Col>
                            </Row>
                            <Row>
                                <Col>
                                <b>qualification</b>
                                <h3>{`${qualification},`}</h3>
                                </Col>
                                <Col>{`${dob}`}</Col>
                            </Row>



                        </Col>
                        <Col md={3}></Col>
                   



                   </Card.Group>
                   
                   </Card.Body> 
       </Row>
   </Col>     
   <Col md={3}>
       <Image
       src={"bulb.${bulb}.png"}
       width="200px"
       onClick={()=> (bulb==="off" ? setBulb("on"):setBulb("off"))}/>
   </Col>


        </Row>
    </div>
    

    )

} 