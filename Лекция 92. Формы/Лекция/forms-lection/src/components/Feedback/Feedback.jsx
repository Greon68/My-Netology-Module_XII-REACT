 function Feedback() {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Event type:", e.type);
        console.dir(e.target);
        console.log(e.target);
      };


    // return (
    // <form className="form" autoComplete="off" onSubmit={handleSubmit}>

    //     <label htmlFor="name">Ваше имя</label>
    //     <input id="name" name="name"/>

    //     <label htmlFor="score">Выберите ур. удовлетворенности</label>
    //     <select id="score" name="score">
    //         <option value="good">Хорошо</option>
    //         <option value="bad">Не очень</option>
    //     </select>

    //     <input type="checkbox" id="agreement" name="agreement"/>
    //     <label htmlFor="agreement">Согласен на передачу данных</label>

    //     <button type="submit">Отправить</button>
    // </form>
    // )

    return (
        <form className="form" autoComplete="off" onSubmit={handleSubmit}>
            
          <label htmlFor="name">Ваше имя</label>
          <input type="text" id="name" name="name" />
    
          <label htmlFor="score">Выберите уровень удовлетворенности</label>
          
          <select id="score" name="score">
            <option value="good">Хорошо</option>
            <option value="bad">Не очень</option>
          </select>
    
          <div className="form__agreement">
            <input type="checkbox" id="agreement" name="agreement" />
            <label htmlFor="agreement">Согласен на обработку данных</label>
          </div>
    
          <button type="submit">Отправить</button>
        </form>
      );


}

export default Feedback