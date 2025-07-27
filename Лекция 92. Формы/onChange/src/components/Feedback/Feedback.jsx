import { useState } from 'react'

export const Feedback = ()=>{
    const [name, setName] = useState('Владимир');

    const onSubmit = (event) => {
        event.preventDefault();
        
        const { target } = event;
        const formData = new FormData(target);
        const data = Object.fromEntries(formData);
        
        console.log(data);
      }
  
  const onNameChange = ({ target }) => { 
    setName(target.value);
    console.log(name)
  }
  
  return(
    <form onSubmit={onSubmit}>
      <input 
        type="text"
        name="firstname"
        value={name}
        onChange={onNameChange}
        placeholder="Ваше имя"/>

      <div>
        <button>Send</button> 
      </div>
    </form>
  );
}