import React,{useState} from "react";
import {Card, Button} from"react-bootstrap"

export const ToggleComps=()=>{ 
    const [colorName, setColorName]=useState("Orange");

    return(
        <div>
            <Card>
            <Button 
            onClick={() => colorName==="Blue" ? setColorName("Orange") : setColorName("Blue")}>
                change color</Button>
                <h3>PickupBiz here</h3>
                <p>This is my content</p>
                <span style={{color: colorName}}>
                <h1>PDAC course</h1></span>
                <Button onClick={()=>setColorName("Blue")}>Blue</Button>
                <Button onClick={()=>setColorName("Red")}>Red</Button>
                <Button onClick={()=>setColorName("Green")}>Green</Button>
                <Button onClick={()=>setColorName("Orange")}>Orange</Button>
            </Card>
        </div>
    );
};