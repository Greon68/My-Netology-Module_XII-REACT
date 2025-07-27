import { useState } from 'react'
import { ImageGirl } from './ImageGirl';
import { ImageMan } from './ImageMan';

const ImageToggle =({data})=>{
    const [value, setValue]= useState(false)

    // const image1 = (<div >
    //                     <img src={data[2]}></img>
    //                     <h3>Чувак</h3>
    //                 </div>);
    //  const image2 = (<div >
    //                     <img src={data[1]}></img>
    //                     <h3>Тёлочка</h3>
    //                 </div>);

    // const handlerClick = ()=>{
    //     setValue(!value)
    // }

    // return (
    //     <div className='image'>
    //         <button onClick={handlerClick}>
    //              {value ? 'Показать Чувака': 'Показать Тёлочку'}
    //         </button>
    //         {value ? image2 : image1 }
    //     </div>
    // )

    // ЧЕРЕЗ КОМПОНЕНТЫ

    const handlerClick = ()=>{
        setValue(!value)
    }

    return (
        <div className='image'>
            <button onClick={handlerClick}>
                 {value ? 'Показать Чувака': 'Показать Тёлочку'}
            </button>
            {value ? <ImageGirl data={data}/> : <ImageMan data={data}/> }
        </div>
    )

    
}
export default ImageToggle