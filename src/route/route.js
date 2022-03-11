import Detail from "../page/Detail";
import Home from "../page/Home";

export const routeAdmin=[
    {
        path:'/',
        element:Home,
    },
    {
        path:'/:id',
        element:Detail
    }
];