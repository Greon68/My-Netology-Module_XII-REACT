import { createBrowserRouter } from "react-router";
import { MainTamplate } from "./components/main-menu/MainTamplate";
import Home from "./components/working_components/Home";
import Reciepts from "./components/working_components/Reciepts";
import Contacts from "./components/working_components/Contacts";
import NodFound from "./components/working_components/NodFound";
import RecipeDetailsRoute from "./components/recieps/RecipeDetailsRoute";

import * as R from  "./config/routes";

// const router = createBrowserRouter([
//     {
//         path:'/',
//         element:<MainTamplate/>,
//         children : [
//             {
//                 path:R.ROUTER_HOME,
//                 exact: true,
//                 element:<Home/>,             
//             },
//             {
//                 path:R.ROUTER_RECIEPS,
//                 element:<Reciepts/>
//             },
//             {
//                 path:R.ROUTER_CONTACTS,
//                 element:<Contacts/> 
//             },
//             {
//                 path:R.ROUTER_NodFound,
//                 element:<NodFound/>
//             },

//         ]
//     }
// ])

const router = createBrowserRouter([
    {
        path:'/',
        element:<MainTamplate/>,
        children : [
            {
                // домашняя
                path:R.ROUTER_HOME,
                exact: true,
                element:<Home/>,             
            },
            {
                // Список рецептов
                path:R.ROUTER_RECIEPS,
                element:<Reciepts/>
            },
            {
                // конкретный рецепт
                path:R.ROUTER_RECIEPE,
                // ROUTER_RECIEPE = ROUTER_RECIEPS + '/:id'
                element:<RecipeDetailsRoute/>
            },
            {
                // контакты
                path:R.ROUTER_CONTACTS,
                element:<Contacts/> 
            },
            {
                path:R.ROUTER_NodFound,
                element:<NodFound/>
            },

        ]
    }
])


export default router 

// export const ROUTER_HOME = '/' ;
// export const ROUTER_CONTACTS = '/contacts' ;
// export const ROUTER_RECIEPS = '/recieps' ;
// export const ROUTER_NodFound = '*' ;

// export const ROUTER_RECIEPE = ROUTER_RECIEPS + '/:id' ;
// export const resiepeRouter = (id) => ROUTER_RECIEPS + `${id}`;