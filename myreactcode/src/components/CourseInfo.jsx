export const CourseInfo=({CourseName,institute,contact,city})=>{
    return(
        <table border="4px">
        <tr>
          <td>Course Name </td>
          <td>: </td>
          <td className="redcolor">{CourseName}</td>
        </tr>
          
        
        <tr>
          <td>Institute </td>
          <td>: </td>
          <td>{institute}</td>
          </tr>
          
          <tr>
          <td>Contact </td>
          <td>: </td>
          <td>{contact} </td>
          </tr>

          <tr>
          <td>City </td>
          <td>: </td>
          <td>{city}</td>
        </tr>
          
          
        
      </table>
    
    )
}