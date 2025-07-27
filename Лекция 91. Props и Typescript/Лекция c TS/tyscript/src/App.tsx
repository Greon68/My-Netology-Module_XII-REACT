import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StatelessHeart from './component/StatelessHeart/StatelessHeart'
import Person from './component/Person/Person';
import Switch from './component/Switch/Switch'

function App() {
  const [count, setCount] = useState(0);

  const onSwitchToggle = (value: string) => {
    console.log({ value }); // {value: 'Выкл'}
    console.log( value ); // Выкл
  };

  return (
    <>
   
      {/* <h1>Vite + React + TypeScripts</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>   
      </div> */}

      {/* < StatelessHeart count={count} onLike={()=>setCount ((x)=> x+1)} /> */}

      {/* <Person name="Степан" lastName="Иванов" gender="male" /> */}
      <Switch data={["Вкл", "Выкл"]} onToggle={onSwitchToggle} enabled />
   
    </>
  )
}

export default App
