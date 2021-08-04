import React from "react";
import {Card ,Button } from "react-bootstrap";

export const CardChild =({itemcurrent})=>{
return(
    <div>
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={itemcurrent.cardImage}/>
  <Card.Body>
    <Card.Title>{itemcurrent.cardTitle}</Card.Title>
    <Card.Text>
        {itemcurrent.cardDiscription}
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>

    </div>
)
}
