import { createBrowserRouter } from "react-router";
import LandingPage from "../pages/landingPage/LandingPage.jsx";
import Home from "../Home.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage />,
    },
    {
        path: "/home",
        element: <Home />,
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