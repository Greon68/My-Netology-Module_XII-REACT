import { Link, NavLink } from "react-router";
import { reciepeRoute } from "../../config/routes";

const ReciepeListPreview = ({id, name})=>{
  
    return (
        <div>
            <h3>{name}</h3>
            <Link to={reciepeRoute(id)}> Посмотреть </Link>
        </div>
    )

}
 export default ReciepeListPreview