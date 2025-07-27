import { HOME_ROUTE, RECIEPS_ROUTE, CONTACTS_ROUTE } from "../../config/routes"
import { Link, NavLink } from "react-router";

const MainMenu = ()=> {
    const style = {
        display: 'flex', 
        gap: '20px',
        
    }
    return (
        <div style={style}>
            <Link to={HOME_ROUTE} > Главная </Link>
            <NavLink 
               className={({isActive})=> isActive && 'active'}   to={RECIEPS_ROUTE} >
                 Рецепты 
            </NavLink>

            <NavLink 
                className = {({isActive}) => isActive && 'contact-active'}
                to={CONTACTS_ROUTE}>
                 Контакты
            </NavLink>
            {/* <Link to={CONTACTS_ROUTE} > Контакты </Link> */}

        </div>   
    )



}
export default MainMenu