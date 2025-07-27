import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AccountsHolder from './components/AccountsHolder'


import { IUser, ITodo } from "./models";

import { UserProfile } from "./components/UserProfile";
// import { AccountsHolder } from "./components/AccountsHolder";
import { Card } from "./components/Card";
import { InlineCard } from "./components/InlineCard";
import { Counter } from "./components/Counter";
import { Counter1 } from "./components/Counter1";
import { Counter2 } from "./components/Counter2";
import { TodoList } from "./components/TodoList";

import "./styles.css";
import { PurchaseList } from "./components/PurchaseList";

const user: IUser = {
  name: "Vasya",
  status: "React developer",
  avatar: "https://dummyimage.com/100x100"
};

const todos: ITodo[] = [
  { id: 1, title: "todo-1", completed: false },
  { id: 2, title: "todo-2", completed: true },
  { id: 3, title: "todo-3", completed: false }
];






function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  
      <h1>Vite + React</h1>



    </>
  )
}

export default App
