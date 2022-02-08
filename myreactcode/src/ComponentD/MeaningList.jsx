import React from "react"
import { Card, Row , Col, Form} from "react-bootstrap"
import { Meaning } from "../ComponentD/Meaning"
import "./Dictionary.css"

export const MeaningList=({item})=>{
    return (
        <Card className="Meaning">
            <h2>Meaning List</h2>
            {item.Meanings.map((m)=>(<Meaning m={m}/>))}
        </Card>
    )

}