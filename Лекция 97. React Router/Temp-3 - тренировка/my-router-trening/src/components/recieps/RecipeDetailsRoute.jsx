import { useParams } from "react-router";
import recieps from "../../data/recieps";
import RecipeDetailsPreview from "./ReciepeDatailsPreview";


const RecipeDetailsRoute = () => {
    const { id } = useParams();
    const reciepe = recieps.find ((rec) => rec.id === +id);
    return (
        <>
        {reciepe && <RecipeDetailsPreview {...reciepe}/>}
        {!reciepe && 'Рецепт не найден'}
        </>
    )
}

export default RecipeDetailsRoute

// import { useParams } from "react-router";

// import { recieps } from "../../data/recieps";
// import { ReciepeDetails } from "../recieps/ReciepeDetails";


// // /recipes/:id -> /recipes/45
// export const RecipeDetailsRoute = () => {
//   const { id } = useParams();
//   // const { id } = params;
//   const reciepe = recieps.find((r) => r.id === +id);

//   return (
//     <>
//       {reciepe && <ReciepeDetails {...reciepe} />}
//       {!reciepe && "Рецепт не найден!"}
//     </>
//   );
// };
