import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigater from './Navigater/Navigater';
import Task from './Tasks/Task';
import React from 'react';
import ListTask from './Tasks/ListTask';
// import tasks from './Data'
import AddTask from './Tasks/AddTask';
import { useSelector } from 'react-redux';
import Login from './Pages/Login';
import Profile from './Pages/Profile';



function App() {
   const tasks = useSelector(state => state.tasksList);
  // const background = { backgroundColor:"white", width :"100%" , height:"auto" , minHeight:"300px" , borderRadius:"30px"};
  return (
    <div className="App">
<Navigater/>
 <AddTask />
<div >
  <ListTask list={tasks} />
</div>
{/* <Login /> */}

  {/* <Login /> */}
    </div>
  );
}

export default App;
