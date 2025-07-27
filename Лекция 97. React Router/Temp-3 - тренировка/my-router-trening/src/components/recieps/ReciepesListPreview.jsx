import { Link, NavLink } from "react-router";
// import recieps from "../../data/recieps";
import { resiepeRouter } from "../../config/routes";


 const ReciepesListPreview =({id, name})=>{
    return (
        <div>
            <h3>{name}</h3>
            <Link to={resiepeRouter(id)}>Посмотреть</Link>
            <hr />
        </div>

    )

}

export default ReciepesListPreview

// import { Link } from "react-router";

// import { reciepeRoute } from "../../config/routes";

// export const ReciepePreview = ({ id, name }) => {
//   return (
//     <div>
//       <h3>{name}</h3>
//       <Link to={reciepeRoute(id)}>Посмотреть</Link>
//     </div>
//   );
// };