import React from "react";

import { EmpCardReducer } from "./EmpCardReducer";
import {EmpCardChild} from "./EmpCardChild";
import { Form } from "react-bootstrap";



export const EmpCardParent = () =>{
    return (
            <div>
                <Form.Control type ="text" onChange={(e)=>setSearchText(e.target.value)} value="search">


                </Form.Control>

        { empArr.Data.map((item) =>
            {
        return <EmpCardChild itemData = {item} />
            }
        )}

        </div>
    )}
