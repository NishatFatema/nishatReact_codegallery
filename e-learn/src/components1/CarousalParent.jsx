import React from "react";
// import { Carousel } from "react-bootstrap";
import { CarouselChild } from "./CarouselChild";
import { CarouselReducer } from "./CarouselReducer";
export const CarouselParent=()=>{
    
    return(

    <div>
        {CarouselReducer.Data.map((item)=>{
             return <CarouselChild itemData={item} />
        })}
    </div>

    )
}