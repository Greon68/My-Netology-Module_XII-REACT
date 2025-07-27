
 const RecipeDetailsPreview = ({name, time, description})=>{
    return (
        <div>
            <h1>{name}</h1>
            <h3> Время приготовления : {time} мин.</h3>
            <i>{description}</i>
        </div>
    )

}

export default RecipeDetailsPreview


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