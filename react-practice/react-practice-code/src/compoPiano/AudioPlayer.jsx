import React from "react";
import { Button, Col, Row, Card} from "react-bootstrap";
import "./AudioPlayer.css"

export const  AudioPlayer=()=>{

    
        const mymusic = new Audio("tune.mp3")
        const handleaudioPlay=()=>{
            mymusic.play();
        }
        const handleaudiopause=()=>{
            mymusic.pause();
        }
    return(
    <Card className="player">
        <Row>
            <Col></Col>

            <Col>
            <Button className="Button" onClick={handleaudioPlay}>Play</Button>
            </Col>

            <Col>
            <Button className="Button" onClick={handleaudiopause}>Stop</Button>
            </Col>
            <Button className="Button"  onMouseDown={handleaudioPlay} onMouseUp={handleaudiopause}>Piano</Button>

            <Col></Col>

        

        </Row>
   </Card>
    )

};