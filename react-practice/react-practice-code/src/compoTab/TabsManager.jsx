import React from "react";
import{Tab,Tabs} from "react-bootstrap"

import "./TabsManager.css"

export const TabsManager=()=>{

return(
  <Tabs defaultActiveKey="section1"
   id="uncontrolled-tab-example" 
   className="mb-3">
  <Tab eventKey="section1" title="Section 1" >
    Tab1
  </Tab>
  <Tab eventKey="section2" title="Section 2">
    Tab2
  </Tab>
  <Tab eventKey="section3" title="Section 3" disabled>
    Tab3
  </Tab>
</Tabs>

)
}