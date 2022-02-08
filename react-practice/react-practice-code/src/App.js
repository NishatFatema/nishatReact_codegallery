import './App.css';
import { DynamicComp } from './CompoRoutes/DynamicComp';

// import {Clock} from "./compoEMI/Clock";
// import React,{ useEffect, useMemo, useState } from 'react';
// import {Form} from "react-bootstrap"
// import { EmpCardParent } from './CompoCard/EmpCardParent';
// import { AudioPlayer } from './compoPiano/AudioPlayer';
// import { PianoTuneP } from './compoPiano/PianoTuneP';
// import { PianoTune } from './compoPiano/PianoTune';
// import { Emicalc } from './compoEMI/Emicalc';
// import Sectionbody from './component/body/Sectionbody';
// import Sectionfooter from './component/footer/Sectionfooter';
// import {Section} from "./component/Section"
// import Navigation from "./component/header/Navigation"
// import {Home} from './compoTab/Home';
// import {RouteNavigation} from "./CompoRoutes/RouteNavigation"
// import {RouteHome} from "./CompoRoutes/RouteHome"
// import {RouteAboutUs} from "./CompoRoutes/RouteAboutUs"
// import {RouteContactUs} from "./CompoRoutes/RouteContactUs"
// import {RouteCourse} from "./CompoRoutes/RouteCourse"
// import {RouteService} from "./CompoRoutes/RouteService"
// import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
// import {Login} from "./compoEMI/Login"
function App() {
  
  // const [specDisc,setSpecDisc]=useState(0);


  return (
    <div className="App">
      <DynamicComp/>
      {/* <Section/>

     <Navigation/>

     <Sectionbody></Sectionbody>
     <Sectionfooter/>
     */}
     
     {/* <Form.Control type="number" placeholder="special discount" onChange={(e)=>setSpecDisc(e.target.value)}/>

     <Emicalc specDisc={specDisc}/>
     <PianoTuneP/>
      */}
{/* <AudioPlayer/> */}
{/* <EmpCardParent/> */}

{/* <Home/> */}

 {/* <Router>
<RouteNavigation/>
<Switch>
<div>
      <Route path="/Home">

        <Login/>
        
<RouteHome/>
    </Route>

  <Route path="/ContactUs">
<RouteAboutUs/>
  </Route>

          <Route path="/AboutUs">
        <RouteContactUs/>
          </Route>

  <Route path="/Courses">
<RouteCourse/>
  </Route>

      <Route path="/Service">
    <RouteService/>
      </Route>

</div>
</Switch>
</Router>

 */}


{/* <Clock/> */}

</div>
  )
}

export default App;
