
import {CourseInfo} from "./CourseInfo";
import {CoursesReducer} from "./reducers/CoursesReducer";

export const Cources = () => {
    // Console.log(CoursesReducer);
    return(
        <div className="App">
            <table>
                <tr>
                    {CoursesReducer.Data.map((item)=>(
                        <td>
                            <CourseInfo
                            courseName={item.courseName}
                            instituteName={item.instituteName}
                            city={item.city}
                            contact={item.contact}
                            />   
                        </td>

                    ))}
                 </tr>
            </table>
        </div>
    )
}