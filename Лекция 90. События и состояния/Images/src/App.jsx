import { useState } from 'react'
import './App.css';
import Switch from './Switch';
import ToggleComponent from './ToggleComponent';
import ImageShow from './ImageShow';
import ImageToggle from './ImageToggle';

function App() {
  const [count, setCount] = useState(0);

  const onSwitchToggle = (value) => {
    console.log ({value})
  }

  const data =['https://taxpert.ru/neuroavatar/large/fbd6228267dc2935.jpg',
              'https://taxpert.ru/neuroavatar/large/89eea28449ab9b54.jpg',
              'https://taxpert.ru/neuroavatar/large/a1e7ca126252e3e6.jpg'
              ]

  return (
    <>
      <h1>Vite + React</h1>

      {/* <Switch data={['Вкл', 'Выкл']} onToggle={onSwitchToggle} enabled/> */}
      {/* <ToggleComponent/> */}

      {/* <ImageShow data={data}/> */}
      <ImageToggle  data={data}/>

    </>
  )
}

export default App
