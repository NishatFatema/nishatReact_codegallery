import React from "react"
import {CardChild} from "./CardChild"
import { CardReducer } from "../CardReducer"

export const CardParent = () =>{
    return (
        <div>
            {CardReducer.Data.map((item)=>{
             return<CardChild itemcurrent={item}/> 
            })}
        </div>
    )


}