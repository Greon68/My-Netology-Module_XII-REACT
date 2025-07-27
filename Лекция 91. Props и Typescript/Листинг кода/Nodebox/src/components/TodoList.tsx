import { ITodo } from "../models"

type TTodoListProps = {
    todos: ITodo[]
}

export const TodoList = ({ todos }: TTodoListProps) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id} style={{textDecoration:`${todo.completed && 'line-through'}`}}>{todo.title}</li>
      ))}
    </ul>
  );
};