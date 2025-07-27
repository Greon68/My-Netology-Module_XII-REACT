import { Link, NavLink } from "react-router";

// import * as R from ""
import { ROUTER_HOME, ROUTER_CONTACTS, ROUTER_RECIEPS} from "../../config/routes";

 const MainMenu = () => {
    const style = {
        display: "flex",
        gap: "20px",
    }
    return (
        <div style={style}>
            <Link to={ROUTER_HOME} > Главная </Link>            
            <NavLink
                className={({ isActive }) => isActive && `active`}
                to={ROUTER_RECIEPS}>
                        Рецепты
            </NavLink>
            <Link to={ROUTER_CONTACTS} > Контакты </Link>           
        </div>

    //     <div style={style}>
    //     <Link to={'/'} > Главная </Link>            
    //     <NavLink
    //         className={({ isActive }) => isActive && `active`}
    //         to={'/recieps'}>
    //                 Рецепты
    //     </NavLink>
    //     <Link to={'/contacts'} > Контакты </Link>           
    // </div>
    )
}

export default MainMenu