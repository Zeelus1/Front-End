import { createBrowserRouter } from "react-router";

import App from "../App.jsx";
import LandingPage from "../pages/landingPage/LandingPage.jsx";
import ErrorPage from "../pages/ErrorPage/ErrorPage.jsx";
import TreinamentosPage from "../pages/treinamentos/TreinamentosPage.jsx";
import RegistrosPage from "../pages/registrosPage/registrosPage.jsx";
import CalendarioPage from "../pages/calendarioPage/CalendarioPage.jsx";
import ForumPage from "../pages/forumPageInicial/ForumPageInicial.jsx";
import ForumPageAberto from '../pages/forumPage/ForumPage.jsx';
import Login from "../pages/cadastroLogin/Login.jsx";
import Cadastro from "../pages/cadastroLogin/Cadastro.jsx";
import { CustomProvider } from "rsuite";
import { ptBR } from 'rsuite/esm/locales/index.js';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/cadastro",
    element: <Cadastro />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/home",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: (
          <>
            <p>teste testado funcionando</p>
          </>
        ),
      },
      {
        path: "calendario",
        element: (
          <>
            <CustomProvider locale={ptBR}>
              <CalendarioPage />
            </CustomProvider>
          </>
        ),
      },
      {
        path: "registros",
        element: <RegistrosPage />,
      },
      {
        path: "forum",
        element: <ForumPage />,
      },
      {
        path: "post", // ou outro caminho desejado
        element: <ForumPageAberto />, // Página do post aberto
      },
      {
        path: "treinamento",
        element: <TreinamentosPage />,
      },
    ],
  },
]);

export default router;
