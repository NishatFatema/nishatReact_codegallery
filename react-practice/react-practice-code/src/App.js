import './App.css';
import Sectionbody from './component/body/Sectionbody';
import Sectionfooter from './component/footer/Sectionfooter';
import {Section} from "./component/Section"
import Navigation from "./component/header/Navigation"

function App() {
  return (
    <div className="App">
      <Section/>

     <Navigation/>

     <Sectionbody></Sectionbody>
     <Sectionfooter/>
</div>
  );
}

export default App;
