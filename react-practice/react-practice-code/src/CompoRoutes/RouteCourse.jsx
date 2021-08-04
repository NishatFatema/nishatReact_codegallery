import React from "react";
import {userData} from "../compoEMI/Config"

import { useHistory } from "react-router-dom";
import { useEffect } from "react";

export const RouteCourse =()=>{
    const history=useHistory()

useEffect(()=>{
    if (!(userData.token==localStorage.getItem("token")))
    {
    history.push("./")
    }


},[])


    return(
        <div>
            this is course page

        </div>


    )
}
