import React from "react";
import './Navigation.css';
import { Carousel } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


const Navigation=()=>{

    return(
        <div>
    <nav>
        <a href="">home</a>
        <a href="">product</a>
        <a href="">service</a>
        <a href="">about us</a>
      <input type="searchbox" name="" id="" />

    </nav>
    <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-50 h-50"
      src="Nature.jpg"
      alt="travelling"
    />
    <Carousel.Caption>
      <h3>travelling</h3>
      {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-50 h-50"
      src="laptopimage.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>working </h3>
      {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
  {/* <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Third slide&bg=20232a"
      alt="Third slide"
    /> */}

    {/* <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item> */}
</Carousel>


        </div>
    ) 
}
 export default Navigation;