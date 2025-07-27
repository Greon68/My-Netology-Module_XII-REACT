import { Link } from "react-router-dom";

import { reciepeRoute } from "../../config/routes";

export const ReciepePreview = ({ id, name }) => {
    return (
        <div>
            <h3>{name}</h3>
            <Link to={reciepeRoute(id)}>Посмотреть</Link>
            {/* <hr class="hr-dashed"/> */}
        </div>
    );
};