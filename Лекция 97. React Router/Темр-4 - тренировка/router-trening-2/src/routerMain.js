import { createBrowserRouter } from "react-router";
import { MenuTamplete } from "./components/menu/MenuTamplete";
import ReciepeDetailRoute from "./components/recieps/ReciepeDetailRoute";
import ReciepeListRoute from "./components/recieps/ReciepeListRoute";
import ContactPreview from "./components/work_components/ContactPreview";
import HomePreview from "./components/work_components/HomePreview";
import NodFoundPreview from "./components/work_components/NodFoundPreview";

import * as R from "./config/routes";

export const router = createBrowserRouter ([
    {
        path:'/',
        element:< MenuTamplete/>,
        children:[
            {
                path:R.HOME_ROUTE,
                exact: true,
                element:<HomePreview/>
            },
            {
                path:R.CONTACTS_ROUTE,
                element:<ContactPreview/>
            },
            {
                // export const RECIEPS_ROUTE = '/recieps';
                path:R.RECIEPS_ROUTE,
                element:<ReciepeListRoute/>
            },
            {
                // export const RECIEPE_ROUTE = RECIEPS_ROUTE + '/:id';
                path:R.RECIEPE_ROUTE,
                element:<ReciepeDetailRoute/>
            },
       

            {
                path:R.NodFound_ROUTE,
                element:<NodFoundPreview/>
            },
            
        ]
    }

])

// export const HOME_ROUTE = '/';

// export const CONTACTS_ROUTE = '/contacts';

// export const NodFound_ROUTE = '*';

// export const RECIEPS_ROUTE = '/recieps';

// export const RECIEPE_ROUTE = RECIEPS_ROUTE + '/:id';

// export const reciepeRoute = (id) => RECIEPS_ROUTE + `/${id}`