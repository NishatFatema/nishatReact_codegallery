import React from "react";
import { Button } from "react-bootstrap";
import "./PianoTune.css";

export const PianoTune = ()=>{
    const handleplay = (bit) =>{
    const audio = new Audio(`./MP3/${bit}.mp3`);
        audio.play();
    };

    document.addEventListener("keydown",(e)=>{

        

        if (e.key==="a" && handleplay("A"));
        if (e.key==="s" && handleplay("B"));
        if (e.key==="d" && handleplay("C"));
        if (e.key==="f" && handleplay("D"));
        if (e.key==="g" && handleplay("E"));
        if (e.key==="h" && handleplay("F"));
        if (e.key==="j" && handleplay("G"));
        if (e.key==="A" && handleplay("Ab"));
        if (e.key==="S" && handleplay("Bb"));
        if (e.key==="D" && handleplay("C"));
        if (e.key==="F" && handleplay("Db"));
        if (e.key==="G" && handleplay("Eb"));
        if (e.key==="H" && handleplay("F"));
        if (e.key==="J" && handleplay("Gb"));
        
        
        e.stopPropagation();
        
      })
    
    return(
        <div>

            <Button variant="outline-dark" className="Sa" onClick={()=>handleplay("A")} >Sa</Button>
            <Button variant="outline-dark" className="Re" onClick={()=>handleplay("B")}>Re</Button>
            <Button variant="outline-dark" className="Ga" onClick={()=>handleplay("C")}>Ga</Button>
            <Button variant="outline-dark" className="Ma"  onClick={()=>handleplay("D")}>Ma</Button>
            <Button variant="outline-dark" className="Pa" onClick={()=>handleplay("E")}>Pa</Button>
            <Button variant="outline-dark" className="Dha" onClick={()=>handleplay("F")}>Dha</Button>
            <Button variant="outline-dark" className="ni" onClick={()=>handleplay("G")}>ni</Button>
            <Button variant="outline-dark" className="Sa"  onClick={()=>handleplay("A")}>Sa</Button>
     

        </div>
    )
}