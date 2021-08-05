import './App.css';

// import {Clock} from "./compoEMI/Clock";

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
import {RouteNavigation} from "./CompoRoutes/RouteNavigation"
import {RouteHome} from "./CompoRoutes/RouteHome"
import {RouteAboutUs} from "./CompoRoutes/RouteAboutUs"
import {RouteContactUs} from "./CompoRoutes/RouteContactUs"
import {RouteCourse} from "./CompoRoutes/RouteCourse"
import {RouteService} from "./CompoRoutes/RouteService"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import {Login} from "./compoEMI/Login"
function App() {
  return (
    <div className="App">
      {/* <Section/>

     <Navigation/>

     <Sectionbody></Sectionbody>
     <Sectionfooter/>
     */}
     {/* <Emicalc></Emicalc> */}
     {/* <PianoTuneP/> */}
     
{/* <AudioPlayer/> */}
{/* <EmpCardParent/> */}

{/* <Home/> */}

 <Router>
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




{/* <Clock/> */}

</div>
  )
}

export default App;
