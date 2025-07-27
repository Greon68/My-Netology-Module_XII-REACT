import React, { useState } from 'react'; 

function CityForm() {  
    // Состояние для хранения названия города  
    const [city, setCity] = useState('');  
    // Функция для обработки изменения в поле ввода  
    const handleInputChange = (event) => { setCity(event.target.value) };  
    // Функция для обработки нажатия кнопки  
    const handleButtonClick = () => { 
        console.log(city) ;
        setCity('')
    };  
    return (  
        <div>  
            <input type="text" value={city} onChange={handleInputChange} placeholder="Введите название города" />  
            <div>{city}</div>
            <button onClick={handleButtonClick}>Найти город</button>  
        </div>  
    );  
}  

export default CityForm
