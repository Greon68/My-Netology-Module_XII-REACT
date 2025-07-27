import { useParams } from "react-router";
import recieps from "../../data/recieps";
import ReciepeDetailPreview from "./ReciepeDetailPreview";

// recieps/:id -> recieps/1
const ReciepeDetailRoute = ()=>{
    const {id} = useParams();
    const reciepe = recieps.find (r => r.id === +id)
    return (
        <>
        {reciepe && <ReciepeDetailPreview {...reciepe}/>}
        {!reciepe && 'Рецепт не найден'}
        </>
    )
}

export default ReciepeDetailRoute

// const recieps = [
//     {
//         id:1,
//         name: " Блины ",
//         time: 20 ,
//         description: " классический русский дессерт "
//     },
//     {
//         id:2,
//         name: " Бopщ ",
//         time: 50 ,
//         description: "Лучшее первое блюдо "
//     },
//     {
//         id:3,
//         name: " Оливье ",
//         time: 30 ,
//         description: "Лучший новогодний салат "
//     },
//     {
//         id:4,
//         name: " Компот ",
//         time: 10 ,
//         description: "Простое третье блюдо"
//     },

// ]
