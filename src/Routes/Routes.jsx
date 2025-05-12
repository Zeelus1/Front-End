import { createBrowserRouter } from "react-router";

import App from "../App.jsx";
import LandingPage from "../pages/landingPage/LandingPage.jsx";
import CadastroLogin from "../pages/cadastroLogin/CadastroLogin.jsx"
import ErrorPage from "../pages/ErrorPage/ErrorPage.jsx";
import TreinamentosPage from "../pages/treinamentos/TreinamentosPage.jsx"
const router = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage />,
        errorElement: <ErrorPage/>
    },
    {
        path: "/auth",
        element: <CadastroLogin/>,
        errorElement: <ErrorPage/>
    },
    {
        path: "/home",
        element: <App />,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "", 
                element: <><p>teste testado funcionando</p></>,
            },
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
                element: <TreinamentosPage />,

            },
        ],
    },
]);

export default router;