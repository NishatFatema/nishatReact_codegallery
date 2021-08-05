import React ,{useState , useEffect}from "react";
import {Card} from "react-bootstrap";
import "./Clock.css"

export const Clock = ()=>{

    const [sec,setSec]=useState(0);
    const [min,setMin]=useState(0);
    const [hour,setHour]=useState(0);

    setTimeout(()=>{

            //  setSec(sec+1);
            //  if(sec===60) {
              
            //  setMin(min+1);
            //  setSec(0);

            //  setMin(min+1);

            //  if(min===60){

            //     setHour(hour+1);
            //     setMin(0)
            //              }

            //  }

for (let i=0; i<60;i++)
{
    
    setSec(i);

    for(min=0;min>60;min++){

        setHour(hour+1);
        setMin(0)
    }
}


     },1000);

    

    return (
        <Card className="clock">
            <span>{hour}:{min}:{sec}</span>
        </Card>
    );
};