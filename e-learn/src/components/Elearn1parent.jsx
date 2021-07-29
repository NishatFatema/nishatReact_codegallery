import React from "react";
// import { Carousel } from "react-bootstrap";
import { Elearn1 } from "./Elearn1";
import { Elearn1reducer } from "./Elearn1reducer";
export const Elearn1parent = () => {
  return (
    <div>
      {Elearn1reducer.Elearn1Data.map((item) => {
        return <Elearn1 itemData={item} />;
      })}
    </div>
  );
};
