import React from "react" ;
import {Card} from "react-bootstrap"

export const Meaning=({m})=>{
    return(
<Card>
  <Card.Header as="h5">Meaning</Card.Header>
  <Card.Body>
  <Card.Title>Word</Card.Title>
  <Card.Text>
      <i><b>--{m.partsofSpeech}--</b></i>

       {m.definition.map((def,index)=>

   <p>

     <i>{index+1}</i>.{def.definition}

<p><i>....example...{def.example}</i></p>

  </p>
  
   )}
  </Card.Text>

  </Card.Body>
                    </Card>
                    



    )



}