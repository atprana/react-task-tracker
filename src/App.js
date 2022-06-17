import { useState } from "react"
import Header from "./components/Header";
import Tasks from './components/Tasks'


 function App() {
  const [tasks, setTasks] = useState(
    [
      {
        id:1, 
        text: 'Doctor Appointment',
        day: '01 July 2022 at 2:20pm'  
      }, 
      {
        id:2, 
        text: 'Meeting at School',
        day: '06 July 2022 at 9:5am'  
      }, 
      {
        id:3, 
        text: 'Buy Laundry Equipments',
        day: '11 July 2022 at 4:00pm'  
      }
    ]
  )

 return (
   <div className=" container">
       <Header />
       <Tasks tasks={tasks}/>
     </div>
   );
 }
   export default App
