import React from "react";
import ContactUs from "./ContactUs"
import AboutUs from "./AboutUs"
import {Router, Switch, Route} from "react-router-dom"

export const NewComponentFile =()=>
{
    return(

    <div>
    <Navbar>
    <ContactUs>
    </ContactUs>
    <AboutUs></AboutUs>
    </Navbar>
</div>
    )

}