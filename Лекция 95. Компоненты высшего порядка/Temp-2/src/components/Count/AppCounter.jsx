import { useState } from "react";
import Counter from "./Counter";
import withLogger from "./withLogger";

const AppCounter = () => {
    const [value, setValue]= useState(0);

    const addOne = () =>{
        setValue((prev) => prev + 1 )
    };

    const decOne = ()=> {
        setValue ( (prev) => prev - 1 )
    };

    const LoggedCounter = withLogger(Counter);
    // Добавляем новый аргумент в LoggedCounter:
    const text = 'Кнопки "+" "-" 1 '

    return (
        <>
        {/* < Counter
            value = {value}
            addOne = {addOne}
            decOne = {decOne}
        /> */}
        <LoggedCounter
        value = {value}
        addOne = {addOne}
        decOne = {decOne}
        text = {text}
        />
        </>

    )

}

export default  AppCounter