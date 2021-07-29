import React from "react";
import './Elearn.css';

const Elearn=()=>{
    return (
        <div>
            <marquee className="userasist" behavior="scroll" direction="left">For asistance - CallOn: +91 XXXXXXXXXX; Email : xyz@abc.com</marquee>
            {/* <p className="userasist">For asistance - CallOn: +91 XXXXXXXXXX; Email : xyz@abc.com
            </p> */}
            <nav>
                <a href="" className="navanchors">Home</a>
                <a href="" className="navanchors">Course Catalog v</a>
                <a href="" className="navanchors">Resources v</a>
                <a href="" className="navanchors">Success Stories</a>
                <a href="" className="navanchors">Forum</a>
            </nav>
            <img className="logoclass" src="logo for nav bar.png" alt="" />
            <input className="searchtext" type="searchbox" ></input>
            <button className="searchbutton">Search</button>
            <a href="" className="usericon"><img className="usericon" src="user icon1.png" alt="" /></a>
        </div>
    ) 
}
export default Elearn;