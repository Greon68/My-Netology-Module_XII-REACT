import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "./styles.css";

import UserProfile from './components/UserProfile';
import AccountsHolder from './components/AccountsHolder';
import Card from './components/Card';
import InlineCard from './components/InlineCard';
import Counter from './components/Counter';
import Counter1 from './components/Counter1';
import TodoList from './components/TodoList';
import PurchaseList from './components/PurchaseList';



const user = {
  name: "Vasya",
  status: "React developer",
  avatar: "https://taxpert.ru/neuroavatar/large/d32b77ec9dd343f1.jpg",
  // avatar: " "
};

const todos = [
  { id: 1, title: "todo-1", completed: false },
  { id: 2, title: "todo-2", completed: true },
  { id: 3, title: "todo-3", completed: false }
];


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      {/* <UserProfile user={user} /> */}
      {/* <hr></hr> */}
      {/* <AccountsHolder  render={ (list) =>
        (
          <ul>
            { list.map( el => 
              <li key={el.id}>
                {el.name} : {el.balance}
              </li>
              ) }
          </ul>
        )
      }/>   */}

       {/* <AccountsHolder render={(accounts) => <Card accounts={accounts} />} /> */}
       <AccountsHolder render={(accounts) => <Card list={accounts} />} /> 

       <AccountsHolder render={(accounts) => <InlineCard list={accounts} />}/>  


{/* <hr />
      <Counter
        render={({ count, handleCount }) => (
          <Counter1 count={count} handleCount={handleCount} />
        )}
      /> */}
 
      {/* <hr />  

      <TodoList todos={todos} />

      <hr /> */}
      <PurchaseList />
    </>
  )
}

export default App
