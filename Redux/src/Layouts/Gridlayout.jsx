// import Button from 'bootstrap/js/dist/button';
import React,{useState} from "react";
import react from 'react';
import { Employee } from "../Reducer/Employee";
import { Col, Container, Form, Row, Button, Card } from 'react-bootstrap';

export const Gridlayout = () =>{
    const {FirstName, LastName, LineAddress1, LineAddress2, CityNmae} = Employee.EmployeeData[0];
    const [fname, setFname] = useState (FirstName);
    const [lname, setLname] = useState(LastName);
    const [line1add, setLine1add] = useState(LineAddress1);
    const [line2add, setLine2add] = useState(LineAddress2);
    const [cityname, setCityname] = useState(CityNmae);
      

    return (
        <div>
            <Container>
                <Row>
                    <Col>
                    <Row>
                    <label>First Name</label>
                    <Col>
                    <Form.Control type="text" placeholder="First Name" 
                    onChange={(e)=> setFname (e.target.value)} value={fname} />
                    </Col>
                    </Row>
                    <Row>
                    <label>Last Name</label>
                    <Col>
                    <Form.Control type="text" placeholder="Last Name" onChange={(e)=> setLname (e.target.value)} value={lname} />
                    </Col>
                    </Row>
                    <Row>
                    <label>Line1 Address</label>
                    <Col>
                    <Form.Control type="text" placeholder="Line1 Address" onChange={(e)=> setLine1add (e.target.value)} value={line1add} />
                    </Col>
                    </Row>
                    <Row>
                    <label>Line2 Address</label>
                    <Col>
                    <Form.Control type="text" placeholder="Line2 Address" onChange={(e)=> setLine2add (e.target.value)} value={line2add} />
                    </Col>
                    </Row>
                    <Row>
                    <label>City Name</label>
                    <Col>
                    <Form.Control type="text" placeholder="City" onChange={(e)=> setCityname (e.target.value)} value={cityname} />
                    </Col>
                    </Row>
                    </Col>
                    <Col>
                    <Row>
                    <label>Please Click to Submit:</label>
                        <Button>Submit</Button>
                    </Row>
                    <Card>
                        <Row>
                            <Col>{`${fname} ${lname}`}</Col>
                        </Row>
                        <Row>
                            <Col>{`${line1add}`}</Col>
                        </Row>
                        <Row>
                            <Col>{`${line2add}`}</Col>
                        </Row>
                        <Row>
                            <Col>{`${cityname}`}</Col>
                        </Row>
                    </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}