
export const TodoList = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id} 
          style={{textDecoration:`${todo.completed && 'line-through'}`}}>
            {todo.title}
        </li>
      ))}
    </ul>
  );
};

export default TodoList