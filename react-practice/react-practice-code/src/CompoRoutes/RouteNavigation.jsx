import React from "react"
import {Nav, Navbar, Container } from "react-bootstrap"
import "./Navi.css"
import { NavLink} from "react-router-dom"


export const RouteNavigation=()=>{
return(
<div>
    {/* this is navigation bar; */}

       
    <Navbar expand="lg" className="main">
      

  <Container>
            <NavLink to="/Home">
    <Navbar.Brand to="#home">React-Bootstrap</Navbar.Brand>
            </NavLink>
    
    
    
      <Nav className="me-auto">
        <NavLink to="/Home" className="anchor">Home</NavLink>
        <NavLink to="/Courses" className="anchor">Courses</NavLink>
        <NavLink to="/ContactUs" className="anchor">ContactUs</NavLink>
        <NavLink to="/AboutUs" className="anchor">AboutUs</NavLink>
        <NavLink to="/Service" className="anchor">Service</NavLink>
        
      </Nav>
    
  </Container>
</Navbar>
</div>

)

}