import { useDispatch, useSelector } from "react-redux";
import S from './Heart.module.css';
import { addLikes, reserLikes } from "../../store/actioncreators";

export const Heart =() => {
    const dispatch = useDispatch();
    const count = useSelector ( ({likesRd}) => {
       return likesRd.likes
    });

    const onLikes = ()=>{
        dispatch(addLikes())
    };
    const reset = ()=>{
        dispatch(reserLikes())
    }


    return (
        <>
            <div className={S.container} onClick={onLikes}>
                {count} 🧡
            </div>
            <button onClick={reset}>СБРОС</button>
        </>
    )



}