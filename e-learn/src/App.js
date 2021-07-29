import './App.css';

import { Elearn1reducer } from "./components/Elearn1reducer";
// import  Elearn from "../compoBasicELearn/Elearn";
import { Elearn1 } from './components/Elearn1reducer';
import { Elearn1parent } from './components/Elearn1parent';
import "bootstrap/dist/css/bootstrap.min.css";



function App() {
  return (
    <div className="App">
        
      <Elearn1parent/>
      {/* <Elearn></Elearn> */}
</div>
  );
}

export default App;



