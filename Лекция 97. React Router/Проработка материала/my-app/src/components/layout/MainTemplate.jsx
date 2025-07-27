import { Outlet } from "react-router-dom";
import { MainMenu } from "./MainMenu";

export const MainTemplate = () => {
    return (
        <div className="main-template">
            <header>
                <MainMenu/>
            </header>
            <main>
                <Outlet/>
            </main>
        </div>
    );
}