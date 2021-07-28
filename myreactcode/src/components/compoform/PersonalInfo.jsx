import React, { useState } from "react";
import "./Personal.css";
import { Container, Form, Row, Card, Col, Button, Image} from "react-bootstrap";


export const PersonalInfo = ()=>{
    const [fname,setFname] = useState("");
    const [lname,setLname] = useState("");
    const [qualification,setqualifi] = useState("");
    const [dob,Dob] = useState("");
    const [houseno,setHouseno] = useState("");
    const [street,setStreet] = useState("");
    const [city,setCity] = useState("");
    const [state,setState]= useState("");
        return (
        <div>
            <Row>
                <Col lg={8}>
                <Card>
                    <label htmlFor="First Name">First Name</label>
                <input type="text" />
                <label htmlFor="First Name">First Name</label>
                <input type="text" />
                <label htmlFor="First Name">First Name</label>
                <input type="text" />
                <label htmlFor="First Name">First Name</label>
                <input type="text" />
                <label htmlFor="First Name">First Name</label>
                <input type="text" />
                <label htmlFor="First Name">First Name</label>
                <input type="text" />
                <label htmlFor="First Name">First Name</label>
                <input type="text" />
                <label htmlFor="First Name">First Name</label>
                <input type="text" />
                <label htmlFor="First Name">First Name</label>
                <input type="text" /><br/>
                <Button>Submit</Button>
                </Card>
                </Col>
                <Col lg={4}>
                <Card>
                    <h1>sdhgbsjf</h1>
                    <h1>sdhgbsjf</h1>
                    <h1>sdhgbsjf</h1>
                    <h1>sdhgbsjf</h1>
                    <h1>sdhgbsjf</h1>
                </Card>
                </Col>
            </Row>
    </div>

    );

};








// <Container>

// <Card>
//       <Row>
              
//           {/* <Col md="4"> */}


//               {/* ...............First Name....................... */}
//               <Row>
//                   <label>First Name:</label>
//                   <Col>
//                   <Form.Control type="text" placeholder=" enter firstname" onChange={(e)=> setFname (e.target.value)} value={fname}/>
//                   </Col>
//               </Row>
//               {/* ............Last Name............................. */}
//               <Row>
//                   <label>Last Name:</label>
//                   <Col>
//                   <Form.Control type ="text" placeholder="enter last name" onChange={(e)=> setLname (e.target.value)} value={lname}/>
//                   </Col>
//               </Row>
//               {/* ......................qualification.................. */}
//               <Row>
//                   <label>Qualification :</label>
//               </Row>
//               {/* <Col> */}
//               <Form.Control type= "text" placeholder="qualification" 
//               onChange={(e)=>setqualifi (e.target.value)} value={qualification}/>
//               {/* </Col> */}
//               {/* ......................DoB................................ */}
//               <Row>
//                   <label>DOB</label>
//               </Row>
//               {/* <Col> */}
//               <Form.Control type ="text" placeholder="enter DOB" 
//               onChange={(e) => dob(e.value.taget)} value={Dob}/>
//               {/* </Col> */}
//               {/* ......................House No............................. */}
//               <Row>
//                   <label>House No. :</label>
//               </Row>
//               {/* <Col> */}
//               <Form.Control type ="text" placeholder="enter house no." 
//               onChange={(e) => setHouseno (e.value.taget)} value={houseno}/>
//                {/* </Col> */}
//                {/* .....................Street............................... */}
//                <Row>
//                   <label>Street :</label>
//               </Row>
//               {/* <Col> */}
//               <Form.Control type ="text" placeholder="enter street" 
//               onChange={(e) => setStreet (e.value.taget)} value={street}/>
//                {/* </Col> */}
//                {/* ......................City................................ */}
//                <Row>
//                   <label>City :</label>
//               </Row>
//               {/* <Col> */}
//               <Form.Control type ="text" placeholder="enter city" 
//               onChange={(e) => setCity (e.value.taget)} value={city}/>
//                {/* </Col> */}
//                {/* ..........................state............................. */}
//                <Row>
//                   <label>State :</label>
//               </Row>
//               {/* <Col> */}
//               <Form.Control type ="text" placeholder="enter State" 
//               onChange={(e) => setState (e.value.taget)} value={state}/>
//                {/* </Col> */}
//                <Row>
//                    <label> Click to submit :</label>
//                    <Button>Submit</Button>
//                </Row>
//            {/* </Col> */}
              
     
// </Card>

// {/*''''''''''''''''''''''''''''''2nd Card'''''''''''''''''''''''''''''''''''''  */}
//   {/* <Row> */}
//       <Col>
//           <Card>
//               <Row>
//                        <Col md="4">
//                            {/* .............................image on 2nd card......................... */}

//                           <Image src ="user icon1.png " roundedCircle/>

//                        </Col>

//                    <Row>
//                        <Col><h3>{`${fname} ${lname},`}</h3></Col>
//                    </Row>

//                    <Row>
//                        <Col><h3>{`${qualification},`}</h3></Col>
//                    </Row>

//                    <Row>
//                        <Col><h3>{`${dob},`}</h3></Col>
//                    </Row>

//                    <Row>
//                        <Col><h3>{`${houseno},`}</h3></Col>
//                    </Row>

//                    <Row>
//                        <Col><h3>{`${street},`}</h3></Col>
//                    </Row>

//                    <Row>
//                        <Col><h3>{`${city},`}</h3></Col>
//                    </Row>

//                    <Row>
//                        <Col><h3>{`${state},`}</h3></Col>
//                    </Row>
//               </Row>
//           </Card>
//     </Col>
// {/* </Row> */}

      
// </Container>