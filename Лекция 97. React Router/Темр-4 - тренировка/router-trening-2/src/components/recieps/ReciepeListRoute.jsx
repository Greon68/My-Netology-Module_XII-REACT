
import recieps from "../../data/recieps";
import ReciepeListPreview from "./ReciepeListPreview";

const ReciepeListRoute = () => {
    return (
        <div>
            <h2> Список рецептов </h2>
            <hr />
            {recieps.map ( reciepe => <ReciepeListPreview key={reciepe.id} {...reciepe}/>)}
        </div>
    )

}

export default ReciepeListRoute

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