import './App.css';

// import { Elearn1reducer } from "./components/Elearn1reducer";
// import  Elearn from "../compoBasicELearn/Elearn";
// import { Elearn1 } from './components/Elearn1reducer';
// import { Elearn1parent } from './components/Elearn1parent';
import "bootstrap/dist/css/bootstrap.min.css";
 import {FetchDataFromRedux} from './compoRedux/State/Action/Redux/FetchDataFromRedux';
import { EmpDetails } from './Redux1/EmpDetails';



function App() {
  return (
    <div className="App">
        <FetchDataFromRedux/>
      {/* <Elearn1parent/> */}
      {/* <Elearn></Elearn> */}
      <EmpDetails/>
</div>
  );
}

export default App;



