import React,{ useEffect, useState, useRef} from "react";
import { Button, Row, Col, Form, Card } from "react-bootstrap";
import {userData} from "./Config"
import "./Login.css"



export const Login=()=>{
    const [username , setUsername]  = useState(" ");
    const [password , setPassword] = useState(" ");
    const [isvalid, setIsvalid] = useState(true);
    const [isSuccess, setSuccess] = useState(false);
    const eleUserName= useRef();
    const elePassword= useRef();

    useEffect(()=>{

if(username.length >=5 && password.length>=6){
        setIsvalid(false);

        if(userData.UserName==username.trim() && userData.Password===password.trim() )
        {
          setSuccess(true);

          localStorage.setItem("token",userData.token)
        }
  }else setPassword(true);

    },[username,password]);

    useEffect(()=>{
        if (localStorage.getItem("username")){

            eleUserName.current.value=localStorage.getItem("username")
            elePassword.current.focus();
        }
        else {
            eleUserName.current.focus();
        }


    },[]);
    
    

    return(

    <div>

                { isSuccess ? ( <p>you are succeessfully logged in !!!</p> ):( 
            
    <div>

              <Card className="login">

        <Row>

            <h1>Login with validation</h1>
        

            <Col md={11} className="loginCol">
                <Form.Control type="text" placeholder="user name"  ref={eleUserName} onChange={(e)=>setUsername(e.target.value)}>
                   
                </Form.Control>
                
            </Col>

            <Col md={11} className="loginCol">
            <Form.Control type="password" placeholder="password"  ref={elePassword} onChange={(e)=>setPassword(e.target.value)}>
                
            </Form.Control>
            </Col>

            

            <Col md={1}></Col>

        </Row>

       

        <Row>
            <Col md={3}/>
            <Col md={3} className="loginButton">
               <Button disabled={isvalid}>Submit</Button>
            </Col>

            <Col md={3} className="loginButton">
                <Button>Cancel</Button>
            </Col>
        </Row>

        { !isSuccess && !isvalid && ( <p>Please enter the correct name and password </p> ) }
                
        </Card>
                

    </div>

          )}         
      
    </div>

    );

};