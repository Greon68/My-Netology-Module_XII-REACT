import { useState } from "react"; 

const FeedbackName =()=> {
    const[ form, setForm ]= useState({
        myName: '',
        // name:''
    });
       
    // const handleNameChange = ({target}) => {
    //     console.log("target :", target);
    //    const {name, value} = target;
    //    setForm(prevForm => ({...prevForm, [name]: value}));
    // }

    const handleNameChange = (evn) => {
        console.log("event :", evn);
        console.log("event target :", evn.target);

       const {name, value} = evn.target;

       console.log("event target.name :", name);
       console.log("event target.name.value :", value);

       setForm(prevForm => ({...prevForm, [name]: value}));
    //    console.log("new-name :", name);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Объект события :", e);
        console.log("Данные формы:", form);
        console.log("e.target.name.value:", e.target.name.value);
        };    

    return (
        <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="myName" >Ваше имя</label>
            <input
                id="name" 
                name="myName"
                value={form.name}
                onChange={handleNameChange}/>

            <button type="submit">Отправить</button>
        </form>
        )

}

export default FeedbackName