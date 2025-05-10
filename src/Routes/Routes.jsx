import { createBrowserRouter } from "react-router";

import Home from "../Home.jsx";
import LandingPage from "../pages/landingPage/LandingPage.jsx";
import Cadastro from "../pages/cadastro/Cadastro.jsx"
import Login from "../pages/login/Login.jsx"
import ErrorPage from "../pages/ErrorPage/ErrorPage.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage />,
        errorElement: <ErrorPage/>
    },
    {
        path: "/cadastro",
        element: <Cadastro/>,
        errorElement: <ErrorPage/>
    },
    {
        path: "/login",
        element: <Login/>,
        errorElement: <ErrorPage/>
    },
    {
        path: "/home",
        element: <Home />,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "calendario", 
                element: <></>,
            },
            {
                path: "registros", 
                element: <></>,
            },
            {
                path: "forum", 
                element: <></>,
            },
            {
                path: "treinamento", 
                element: <></>,
            },
        ],
    },
]);

export default router;