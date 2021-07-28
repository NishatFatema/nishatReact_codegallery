import React from "react";
import "./Elearn1.css";

// import Elearn1 from "./Elearn1";
// import Elearn from "./Elearn";

export const Elearn1 = ({itemData}) => {
    return  (
                <div>
                    


<marquee className="marquee" behavior="scroll" direction="left"><b>{itemData}</b>

</marquee>
                </div>

             )

}
export default Elearn1