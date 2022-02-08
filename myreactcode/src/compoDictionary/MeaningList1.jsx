import React from "react" ;
import {Card} from "react-bootstrap"
import { Meaning } from "./Meaning1";

export const MeaningList=({item})=>{
    return(
<Card>
  <Card.Header as="h5">{item.word}</Card.Header>
  <Card.Body>
  <Card.Title>Word</Card.Title>
  <Card.Text>
      With supporting text below as a natural lead-in to additional content.
  </Card.Text>

  {item.meaning.map((m)=>(

     <Meaning m={m}/>

))}

  </Card.Body>
             

  
  
                    </Card>
                    



    )



}