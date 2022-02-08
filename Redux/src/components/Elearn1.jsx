import React from "react";
import {} from "react-bootstrap";
import Marquee from "react-fast-marquee";
import "./Elearn1.css";
import { BiNews } from "react-icons/bi";

export const Elearn1 = ({ itemData }) => {
  return (
    <div>
      <Marquee className="mq1" pauseOnHover={true}>
        <BiNews />
        
        <a href="https://youtu.be/wgiW1uFZYr8">
        {itemData.Title}
        </a>
      </Marquee>
    </div>
  );
};
