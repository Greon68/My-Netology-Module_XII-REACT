

const TodoList = ({ tasks }) => {
    return (
        <div>
            {tasks.map((task, index) => (
                <div key={`task_${index}`}>x {task}</div>
            ))}
        </div>
    )
  }

  export default TodoList