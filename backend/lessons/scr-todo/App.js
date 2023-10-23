import { useState } from 'react';
import { Task } from './Task';

function App() {
   const [todoList, setTodoList] = useState([]);
   const [newTask, setTask] = useState('');

   const handleChange = (event) => {   
      setTask(event.target.value);
   }

   const addTask = () => {
      const task = {
          id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
          taskName: newTask,
          completed: false
      };
      setTodoList([...todoList, task]);
  };

   const deleteTask = (id) => {
      setTodoList(todoList.filter(task => task.id !== id));
   }

   const completeTask = (id) => {
      setTodoList(todoList.map(task => {
          if (task.id === id) {
              return { ...task, completed: true };
          }
          else {
            return task;
          }
      }));
   }

   return (
      <div className="App">
         { /* area for user input of tasks */ }
         <div className="addTask">
               <input onChange={handleChange} />
               <button onClick={addTask}>Add Task</button>
         </div>
            
         { /* area for listing and deleting existing tasks */ }
         <div className="list">
            {todoList.map(task => {
            return (
            <Task
                id={task.id}
                taskName={task.taskName}
                completed={task.completed}
                deleteTask={deleteTask}
                completeTask={completeTask}
            />
        )
    })
    }
       </div>
   </div>);
}	

export default App;