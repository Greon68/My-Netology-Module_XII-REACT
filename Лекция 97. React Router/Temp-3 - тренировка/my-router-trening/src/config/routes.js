export const ROUTER_HOME = '/' ;
export const ROUTER_CONTACTS = '/contacts' ;
export const ROUTER_RECIEPS = '/recieps' ;
export const ROUTER_NodFound = '*' ;

export const ROUTER_RECIEPE = ROUTER_RECIEPS + '/:id' ;
export const resiepeRouter = (id) => ROUTER_RECIEPS + `/${id}`;

// export const reciepeRoute = (id) => RECIEPS_ROUTE + `/${id}`;