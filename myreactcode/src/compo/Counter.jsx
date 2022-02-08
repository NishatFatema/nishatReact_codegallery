import React, {useState} from "react";
import {Button} from "react-bootstrap";
import axios from "axios";



export const Counter=()=>{
    const [cntr,setCntr]=useState(0);
    const [name,setName]=useState("synechrone");
    const [color,setColor]=useState("purple");

    const handleApi =()=> {

       axios.get("http://localhost:2000/emp").then(res=>{

        console.log(res.data);
     } )
    
    }
    const colorchange=()=>{
        color ? setColor("yellow"): setColor("purple")
    }
    
    
    return(

    <div>
        <table>
            <tr>
                <td>
                    <Button variant="primary" onClick={()=>cntr>0 && setCntr(cntr-1)}>
                     _

                    </Button>
                </td>
                <td>
                    <h1>{cntr}</h1>
                </td>

                <td>
                    <Button variant="primary" onClick={()=>cntr<10 && setCntr(cntr+1)}>
                    +
                    </Button>
                </td>
                   
                 <td>
                    <Button onClick={handleApi}>Call my API</Button>
                </td>
        

             <tr>
                 <td>
                    <h3>iam working in {name} </h3>
                 </td>
            </tr>
        
             </tr>

        </table>
    </div>

    )
}
