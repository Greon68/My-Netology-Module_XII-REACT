import { useState, } from "react";
import Task from "./Task";
import  "./TaskList.css";

const tasks = [
    {
      id: 1,
      title: 'Купить кота'
    },
    {
      id: 2,
      title: 'Покормить кота'
    }, 
    {
      id:3,
      title: 'Купить себе покушать',
      done: true
    },
    {
      id: 4,
      title: 'Поиграть за компьютером'
    },

  ]
  
  const TaskList = () => {
    const [data, setData] = useState(tasks);
    
    const doneTask = (id) => {
      setData(
        data.map(task => {
          const done = task.done || task.id === id;
          
          return {
            ...task,
            done
          }
        })
      );
    }
    
    return (
      <div>
        {data.map(({ title, id, done }) => (
          <Task key={id} done={done} onDone={() => doneTask(id)}>
            {title}
          </Task>
        ))}
      </div>
    );
  }
  
  export default TaskList