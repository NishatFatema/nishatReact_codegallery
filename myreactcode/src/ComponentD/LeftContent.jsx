import React from "react"
import { Button, Col, Form, Row, Card} from "react-bootstrap"
import {Pronounciation} from "./Pronounciation"
import { Meaning } from "./Meaning"
import { MeaningList } from "./MeaningList"
import "./Dictionary.css"


export const LeftContent=({handleSearch, resData, setSearchWord})=>{
return(
    <Card className="LeftContent">
        <Row>
            <Col md={8}>
                <Form.Control type = "search" placeholder="..Word to be Search! | " onChange ={(e)=>setSearchWord(e.target.value)}></Form.Control>
            </Col>
            <Col md={2}>
                <Button onClick={handleSearch}>Search</Button>
            </Col>
        </Row>
        {resData.length > 0 && <Pronounciation item={resData[0]}/>}
        {resData.map((item)=>item.meanings.length>0 && <MeaningList item={item}/>)}
    </Card>
    )
}