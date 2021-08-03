import React,{useState,useEffect} from "react";
import { Card, Col, Row,Image  } from "react-bootstrap"
import "./EmpCard.css";

export const EmpCardChild = ({itemData}) => {
    const[empArr,setEmpArr]=useState(EmpCardReducer.Data);
    const[searchText,setSearchText]=useState("");

    useEffect(()=>){
        
      const  filterArr=empArr.filter((item)=>
        item.firstname.toLowerCase().includes(searchText.toLowerCase()) ||
      item.Lastname.toLowerCase().includes(searchText.toLowerCase()) ||
      item.Lastname.toLowerCase().includes(searchText.toLowerCase()) 
      );
      if(searchText === "")setEmpArr(EmpcardReducer.Data)
      else setEmpArr(filterArr);
    },[searchText]);

    },[searchText])
    console.log("called",searchText);

return ( 
    <div>
        <h1>Employee Details</h1>
       <Card style= {{width:"18 rem"}} className="Card" >
           <Row>
               <Col md={4} className="Col-1">
                   <Image src= {`${itemData.Cardimg}`}></Image>
                   <Card.Body className="Cardbody">
                   <h4>{`Name :${itemData.Cardname}`}</h4>
                   <h4>{`Designation :${itemData.Carddesignation}`}</h4>
                   <h4>{`Salary :${itemData.Cardsalary}`}</h4>
                   </Card.Body>
                 </Col>
           </Row>
    </Card>
            
                          
    </div>

)
}