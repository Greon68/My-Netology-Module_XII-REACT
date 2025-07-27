import { useState } from 'react'

const ImageShow = ({data})=> {
    // console.log('image')
    const [visible, setVisible]=useState(false)

    // const url='https://taxpert.ru/neuroavatar/large/fbd6228267dc2935.jpg';

    const handlerClick =()=> {
        setVisible(!visible)
    }

    const image = (<div className='image'>
                        <img src={data[0]}></img>
                        <p><h3>Картинка</h3></p>
                  </div>)

    // return (
    //     <div>
    //         <button onClick={handlerClick}>
    //             {visible ? 'Убрать': 'Показать' } Картинку
    //         </button>
    //         <div>
    //             {visible && <div>
    //                             {/* <img src={url}></img> */}
    //                             <img src={data[0]}></img>
    //                             <p>Чувак</p>
    //                         </div>}
    //         </div>
    //     </div>
    // )
    
    return (
        <div>
            <button onClick={handlerClick}>
                {visible ? 'Убрать': 'Показать' } Картинку
            </button>
            <div>
                {visible && image}
            </div>
        </div>
    )

}
export default ImageShow