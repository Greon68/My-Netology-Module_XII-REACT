import { useState } from 'react'

// 4. перерисовываем функцию из-за изменённого состояния
const Count = ()=>{
    const [count, setCount] = useState(0)
    // 2.срабатывает обработчик события
    const onClick = ()=> {
        // 3. обновляем состояние (хранилище)
        setCount((pre) => pre + 1)
    }

    return (
        <>
        {/* 1.как только нажмём на div className='count', сработает событие click */}
        <div className='count' onClick={onClick}>Count</div>  
        {/* <button onClick={onClick}>Count</button>   */}

        <div>{count}</div>
         </>
    )


}
export default Count