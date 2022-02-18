import HomePage from "../containers/HomePage";
import React from "react";
import PeoplePage from "../containers/PeoplePage/PeoplePage";
import NotFoundPage from "../containers/NotFoundPage";

const routesConfig = [
    {
        path:'/',
        element:<HomePage/>
    },
    {
        path:'/people',
        element:<PeoplePage/>
    },
    {
        path:'*',
        element:<NotFoundPage/>
    },
]

export default routesConfig