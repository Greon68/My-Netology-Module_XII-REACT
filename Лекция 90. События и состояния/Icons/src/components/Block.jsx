import S from './Block.module.css'
import {  FaThList,FaThLarge } from 'react-icons/fa';
import { useState } from 'react';

export const Block = ()=>{
    const [state, setState]= useState(false)

    const handleClickIcons = ()=> {
        setState(!state);
        // console.log('Кликнул по иконке');
        console.log(state);
    }

    return (
        <div className={S.container}>
            <div className={S.box}>
                <div 
                    className={S.icone}
                    onClick={handleClickIcons}> 
                    { state ? <FaThLarge/> : <FaThList/>}
                </div>
            </div >   
            <div className={state ? S.line : S.block}>
                <div className={S.row}>1</div>
                <div className={S.row}>2</div>
                <div className={S.row}>3</div>
            </div>
        </div>
    )

}
// {value ? <ImageGirl data={data}/> : <ImageMan data={data}/> }