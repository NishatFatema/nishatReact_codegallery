import React from "react"
import { Card, Row, Col } from "react-bootstrap"
import { PianoTune } from "./PianoTune"

export const PianoTuneP =()=>{
    return(
        <div>
            <Card>
                 <Row>
                       <Col md={4}>
                       <h1>Low</h1>
                       <PianoTune/>
                    </Col>
                 
                
                       <Col md={4}>
                       <h1>Medium</h1>
                       <PianoTune/>
                    </Col>
                
                 
                       <Col md={4}>
                       <h1>High</h1>
                       <PianoTune/>
                    </Col>
                 </Row>

            </Card>
        
        </div>
    )


}
