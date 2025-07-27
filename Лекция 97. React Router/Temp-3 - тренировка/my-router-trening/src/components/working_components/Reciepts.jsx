import recieps from "../../data/recieps"
import ReciepesListPreview from "../recieps/ReciepesListPreview"
const Reciepts = ()=>{
    return (
        <div>
            <h2>Список рецептов:</h2>
            <hr />
            {recieps.map(reciepe => <ReciepesListPreview key={reciepe.id} {...reciepe}/>)}
        </div>
    )
}

export default Reciepts

// import { recieps } from "../../data/recieps";
// import { ReciepePreview } from "../recieps/ReciepePreview";
// export const ReciepsRoute = () => {
//     return (
//         <div>
//             Список рецептов
//             {recieps.map(reciepe => <ReciepePreview key={reciepe.id} {...reciepe}/>)}
//         </div>
//     );
// }

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

// ]