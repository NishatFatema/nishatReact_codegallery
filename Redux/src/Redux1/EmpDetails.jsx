
import React, { useState, useEffect } from "react"
import {Card, Button, Form, Row, Col} from "react-bootstrap";
import { useSelector,useDispatch } from "react-redux";
import { getEmpDetails } from "../compoRedux/State/Selector/EmpDetailsSelector";
import { addEmp } from "../compoRedux/State/Action/EmpDetailAction";


export const EmpDetails=()=>{
    const[empData, setEmpData]= useState();
    const selector = useSelector(getEmpDetails);

    useEffect(()=>{
           setEmpData(selector);
    },[selector]);
    


    const [newMentorsData, setNewMentorsData]= useState();
    const [newMentorsDesc, setNewMentorsDesc]= useState();

    const handleDispatch=()=>{
        dispatch(addEmp(newMentorsData, newMentorsDesc))
    }
    console.log("getEmpdata==>",selector)
    return(
        <div>
            <Row>
                <Col lg={6}>
            <Form.Control style={{width:"10rem"}} onChange={(e)=>setNewMentorsData(e.taget.value)}> </Form.Control>{" "}

            

            <Button onClick={handleDispatch}>Dispatch</Button>

            </Col>
            </Row>
            {empData.map((itemCurrent)=>{
                console.log("itemCurrent==>",itemCurrent);
                return(

            <Card style={{width:"18 rem", display:"inline-block"}}>
                <Card.Title>
                    Mentors
                </Card.Title>
                <Card.Body>
                    <Card.Header>{itemCurrent.Name}</Card.Header>

                <Card.Img src={itemCurrent.img} style={{width:"10 rem"}}></Card.Img>
               <p> 
               {itemCurrent.desc}</p>
                <Button>more details</Button>
                </Card.Body>

       
            </Card>
                )
})}
          
        </div>
    )
}