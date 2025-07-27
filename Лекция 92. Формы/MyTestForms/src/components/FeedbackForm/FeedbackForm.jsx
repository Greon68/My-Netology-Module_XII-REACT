import S from './FeedbackForm.module.css'
import { useState } from 'react'

export const FeedbackForm =()=> {
    const [form, setForm]= useState({
        login:'',
        password:'',
        policy: true

    })

    const {login, password, policy} = form;
    const onSubmit =(evn)=>{
        evn.preventDefault();

        console.log('event-',evn);
        console.log('event-type',evn.type);
        console.log('event-target',evn.target);

        const {target} = evn;

        const formData = new FormData(target);
        const data = Object.fromEntries(formData);
        console.log('Данные формы : ',data);

    };

    const onChange =(e)=>{
        console.log('event-',e);
        console.log('event-type',e.type);
        console.log('event-target :',e.target);
        console.log('event-target-value :',e.target.value);

        const {type ,name ,value ,checked} = e.target;

        setForm ((prev)=>({
            ...prev,
            [name]: type ==="checkbox" ? checked : value,
        }))

    }


    return (
        <form  className={S.form} onSubmit={onSubmit}>
            
            <label htmlFor="login"> Введите логин :</label>
            <input 
                type="text"
                name="login"
                id="login"
                value={login}
                onChange={onChange}/>

            <label htmlFor="password"> Введите пароль :</label>
            <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={onChange} />

            <div className={S.checkbox}>
                <input 
                    type="checkbox"
                    name="policy"
                    id="policy"
                    checked={policy}
                    onChange={onChange} />
                <label htmlFor="policy"> Согласен на обработку данных</label>
            </div>
            <button type="submit">Отправить</button>


        </form> 
    )
}
