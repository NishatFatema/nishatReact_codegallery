import React,{ useEffect, useState} from "react";
import { Button, Row, Col, Form, Card } from "react-bootstrap";
import "./Login.css"


export const Login=()=>{
    const [username , setUsername]  = useState(" ");
    const [password , setPassword] = useState(" ");
    const [isvalid, setIsvalid] = useState(true);

    useEffect(()=>{

if(username.length >=5 && password.length>=5)
        setIsvalid(false);
    else setIsvalid(true);

    },[username,password]);

    return(
   <Card className="login">
        <Row>
            <Col md={10} className="loginCol">
                <Form.Control type="text" placeholder="user name" onChange={(e)=>setUsername(e.target.value)}></Form.Control>
                
            </Col>
            <Col md={10} className="loginCol">
            <Form.Control type="password" placeholder="password" onChange={(e)=>setPassword(e.target.value)}></Form.Control>
            </Col>
        </Row>
        <Row>
            <Col md={6} className="loginButton">
               <Button disabled={isvalid}>Submit</Button>
            </Col>

            <Col md={6} className="loginButton">
                <Button>Cancel</Button>
            </Col>
        </Row>
   </Card>

    );
};