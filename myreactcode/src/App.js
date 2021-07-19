import logo from './logo.svg';
import './App.css';
import {CourseInfo} from "./components/CourseInfo"
function App() {
  return (
    <div className="App">
      <h1><b><u>List of Institute</u></b></h1>
      <table>
      <td><CourseInfo CourseName="pdac" institute="pickupbiz" contact = "7833974389" city="chennai" /></td>
      <td><CourseInfo CourseName="networking" institute="pdac" contact = "8888974389" city="kolkata" /></td>
      <td><CourseInfo CourseName="javascript" institute="naresh IT" contact = "9999974389" city="ooty" /></td>
       </table><hr />

      <table>
      <td><CourseInfo CourseName="pdac" institute="pickupbiz" contact = "7833974389" city="chennai" /></td>
      <td><CourseInfo CourseName="networking" institute="pdac" contact = "8888974389" city="kolkata" /></td>
      <td><CourseInfo CourseName="javascript" institute="naresh IT" contact = "9999974389" city="ooty" /></td>
      </table><hr />

      <table>
      <td><CourseInfo CourseName="pdac" institute="pickupbiz" contact = "7833974389" city="chennai" /></td>
      <td><CourseInfo CourseName="networking" institute="pdac" contact = "8888974389" city="kolkata" /></td>
      <td><CourseInfo CourseName="javascript" institute="naresh IT" contact = "9999974389" city="ooty" /></td>
      </table><hr />
    </div>
  );
}

export default App;
