import React, { useState } from 'react';
import './App.css';


const App = () => {
  const[tasks,setTasks] = useState([]);
  const[newTasks,setNewTasks] = useState('');
  function addTask(e){
    e.preventDefault();

    if(newTasks.trim() !== ""){
      setTasks([...tasks,newTasks]);
      console.log(tasks);
      setNewTasks("");
    }
  }
  function deleteTask(index){
    const updatedTasks = tasks.filter((_,i) => i !== index )
    setTasks(updatedTasks);
  }
  function editTask(index,updatedText){
    const copyOfTasks = [...tasks];
    copyOfTasks[index] = updatedText;
    setTasks(copyOfTasks);
  }

  return(
    <div className='App'>
      <h1>Todo List</h1>
      <form className='task-form'>
        <input type='text' placeholder='Enter a task'value={newTasks} onChange={(e)=>
        setNewTasks(e.target.value)}/>
        <button className = "add" onClick={addTask}>Add Task</button>
      </form>
      <ul className='task-list task-list-circle'>
        {/* <h3>todo list items</h3> */}
        {
          tasks.map((task,index) => (
            <li key={index}>
              {index+1}.<input type="text" value={task}/>
              <button className = "edit" onClick={()=> editTask(index,prompt("edit-task",tasks))}>editTask</button>
              <button className = "delete" onClick={() => deleteTask(index)}>Delete</button>

            </li>
          ))
          
        }
      </ul>
    </div>
  );

}
export default App;



















// function App() {
//   const [tasks, setTasks] = useState([]);
//   const [newTask, setNewTask] = useState('');

//   const addTask = () => {
//     if (newTask.trim() !== '') {
//       setTasks([...tasks, newTask]);
//       setNewTask('');
//     }
//   };

//   const deleteTask = (index) => {
//     const updatedTasks = tasks.filter((task, i) => i !== index);
//     setTasks(updatedTasks);
//   };

//   const editTask = (index, updatedText) => {
//     const updatedTasks = [...tasks];
//     updatedTasks[index] = updatedText;
//     setTasks(updatedTasks);
//   };

//   return (
//     <div className="App">
//       <h1>To-Do List</h1>
//       <div className="task-form">
//         <input
//           type="text"
//           placeholder="Enter task"
//           value={newTask}
//           onChange={(e) => setNewTask(e.target.value)}
//         />
//         <button onClick={addTask}>Add Task</button>
//       </div>
//       <ul className="task-list">
//         {tasks.map((task, index) => (
//           <li key={index}>
//             {task}
//             <button onClick={() => editTask(index, prompt('Edit task:', task))}>
//               Edit
//             </button>
//             <button onClick={() => deleteTask(index)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;
