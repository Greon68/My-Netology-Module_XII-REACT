import { useLayoutEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AccountsHolder from './components/AccountsHolder/AccountsHolder'
import PokemonData from './components/Pokemon/PokemonData'
import TodoList from './components/TodoList/TodoList'
import Button from './components/Button/Button'
import TaskList from './TaskList/TaskList'
import BooleanList from './components/BooleanList/BooleanList'
import Content from './components/Content/Content'


function App() {
  const [count, setCount] = useState(0);

  const userTasks = [
    'Сходить покушать',
    'Сходить в кино',
    'Поиграть в PS5'
  ];

  const title = 'Это заголовок';
  

  return (
    <>   
      {/* <h1>Vite + React</h1> */}

      {/* <PokemonData render= { (data) => {
        return (  
          data.map(el => 
              <div key={el.name}>               
                  <img src={el.url}></img>
                  <h3>{el.name}</h3>             
              </div>
              )
        )
      }}/> */}


      {/* <AccountsHolder render={ (list) =>
        (
          <ul>
            { list.map( el => 
              <li key={el.id}>
                {el.name} : {el.balance}
              </li>
              ) }
          </ul>
        )
      }/> */}

      {/* <TodoList tasks={userTasks}/> */}

     {/* <Button  render = { ()=> {
          return  (
                   <button>Кнопка</button>
                 )

           }} />  */}

      {/* <Button  render = { ()=> {
          return  (
                   <button>Кнопка</button>
                 )

           }}> {title}</Button>         */}

      {/* <TaskList /> */}

      {/* <BooleanList/> */}

      < Content >Осторожно, злая собака !</Content>
    </>
  )
}

export default App
