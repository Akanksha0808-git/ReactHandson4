import React ,{useState}from 'react'

const Student=()=>{

const[data,setData]=useState([
    {
      Name:"Akanksha",
      Age:21,
      Course:"MERN",
      Batch:"March",
      Change:"Edit"
    },
    {
        Name:"Priyanka",
        Age:20,
        Course:"MERN",
        Batch:"March",
        Change:"Edit"
      },
      {
        Name:"Bhoomi",
        Age:22,
        Course:"MERN",
        Batch:"March",
        Change:"Edit"
      },
      {
        Name:"Shweta",
        Age:20,
        Course:"MERN",
        Batch:"March",
        Change:"Edit"
      },
      {
        Name:"Alima",
        Age:23,
        Course:"MERN",
        Batch:"March",
        Change:"Edit"
      },
      {
        Name:"Riya",
        Age:21,
        Course:"MERN",
        Batch:"March",
        Change:"Edit"
      },
      {
        Name:"Vipul",
        Age:21,
        Course:"MERN",
        Batch:"March",
        Change:"Edit"
      },
      {
        Name:"Sarthak",
        Age:24,
        Course:"MERN",
        Batch:"March",
        Change:"Edit"
      },
      {
        Name:"Kailash",
        Age:23,
        Course:"MERN",
        Batch:"March",
        Change:"Edit"
      }
    
])
    return(
<div>
        <h1 className='studenthead'>Students Details</h1>
        <div id='btnhere'><button>Add new Student</button></div>
        <table border={2}>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Course</th>
                <th>Batch</th>
                <th>Change</th>
            </tr>
 {data.map((item,index)=>{
                return(
               
        <tr key={index}>
        <td >{item.Name}</td>
        <td> {item.Age}</td>
        <td >{item.Course}</td>
        <td >{item.Batch}</td>
        <td> {item.Change}</td>
         </tr>
                )
            })}
        </table>   
</div>
    )
}
export default Student;