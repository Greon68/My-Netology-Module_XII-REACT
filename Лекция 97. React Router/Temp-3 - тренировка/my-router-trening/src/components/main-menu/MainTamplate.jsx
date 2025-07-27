import { Outlet } from "react-router";
import MainMenu from "./MainMenu";

export const MainTamplate = () => {
    const style = {
        marginLeft: '20px'
    }
    return (
        <div style={style}>
        {/* // <div > */}
            <header>
                <MainMenu/>
            </header>
            <main>
                <Outlet/>
            </main>
        </div>
    )
}