import React from "react";
import { Button } from "react-bootstrap";
import "./PianoTune.css";

export const PianoTune = ()=>{
    const handleplay = (bit) =>{
    const audio = new Audio(`./MP3/${bit}.mp3`);
        audio.play();
    }
    
    return(
        <div>

            <Button variant="outline-secondary" onMouseDown={()=>handleplay("A")} >Sa</Button>
            <Button variant="outline-secondary" onMouseDown={()=>handleplay("B")}>Re</Button>
            <Button variant="outline-secondary" onMouseDown={()=>handleplay("C")}>Ga</Button>
            <Button variant="outline-secondary" onMouseDown={()=>handleplay("D")}>Ma</Button>
            <Button variant="outline-secondary" onMouseDown={()=>handleplay("E")}>Pa</Button>
            <Button variant="outline-secondary" onMouseDown={()=>handleplay("F")}>Dha</Button>
            <Button variant="outline-secondary" onMouseDown={()=>handleplay("G")}>ni</Button>
            <Button variant="outline-secondary" onMouseDown={()=>handleplay("A")}>Sa</Button>
     

        </div>
    )
}