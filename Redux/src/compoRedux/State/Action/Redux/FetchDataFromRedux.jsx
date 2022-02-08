import React,{useState} from 'react'
import {Card} from "react-bootstrap"
import { useSelector } from 'react-redux'
import { getAllGroups } from '../../Selector/GroupSelector'

export const FetchDataFromRedux =()=>{
    const selector = useSelector(getAllGroups);
    const [data,setData]=useState(selector);
    return(
        <div>
             {data.map((items)=>{
                 return (
                  <Card style={{width: "18 rem"}}>
                  <Card.Title>Hello Redux === {items.name}</Card.Title>
                  <Card.Body>this is Card==={items.desc}</Card.Body>
                  </Card>
                     )

             })}
         </div>
    )
}