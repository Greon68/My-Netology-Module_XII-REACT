import S from './Feedback.module.css'

export const Feedback =()=>{

   const onSubmit = (e)=> {
        e.preventDefault();
        console.log("Event type: ", e.type);
        console.log ("e.target -", e.target);
        console.dir(e.target)
        // console.log ('submit');
    }

    return (
        <form className={S.form} onSubmit={onSubmit}>
            {/* <h2>Рисую форму</h2> */}
            <label htmlFor="name"> Введите Ваше имя </label>
            <input type="text" id='name' name='inputName' />

            <label htmlFor="score"> Уровень Вашей удовлетворённости </label>
            <select name="score" id="score">
                <option value="good"> Хорошо </option>
                <option value="bad"> Плохо </option>
            </select>

            <div className='checkbox' >
                <input type="checkbox" name='agreement' id='agreement'/>
                <label htmlFor="agreement"> Согласен на обработку данных </label>

            </div>

            <button className={S.button} type="submit">Отправить</button>
        </form>
    )
}