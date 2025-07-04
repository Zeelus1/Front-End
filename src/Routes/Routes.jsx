import { createBrowserRouter } from "react-router";

import App from "../App.jsx";
import LandingPage from "../pages/landingPage/LandingPage.jsx";
import ErrorPage from "../pages/ErrorPage/ErrorPage.jsx";
import TreinamentosPage from "../pages/treinamentos/TreinamentosPage.jsx";
import RegistrosPage from "../pages/registrosPage/registrosPage.jsx";
import CalendarioPage from "../pages/calendarioPage/CalendarioPage.jsx";
import ForumPage from "../pages/forumPageInicial/forumPageInicial.jsx";
import ForumPageAberto from '../pages/forumPage/ForumPage.jsx';
import Login from "../pages/cadastroLogin/Login.jsx";
import Cadastro from "../pages/cadastroLogin/Cadastro.jsx"; 
import PerfilCuidadorPage from "../pages/perfilCuidadorPage/PerfilCuidadorPage.jsx";
import PrimeirosSocorrosPage from "../pages/primeirosSocorros/primeirosSocorros.jsx";
import SobreNos from "../pages/sobreNos/sobreNos.jsx";
import { CustomProvider } from "rsuite";
import { ptBR } from 'rsuite/esm/locales/index.js';
import HomePage from "../pages/homePage/Homepage.jsx";
import Anamnesia from "../pages/anamnesia/Anamnesia.jsx";
import PlanosPremium from "../pages/planosPremium/PlanosPremium.jsx";
import VideoDesmaioPage from "../pages/videoDesmaioPage/videoDesmaio.jsx"; 
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
    path: "/planospremium",
    element: <PlanosPremium />,
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
          <HomePage/>
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
        path: "post",
        element: <ForumPageAberto />, 
      },
      {
        path: "treinamentos",
        element: <TreinamentosPage />,
      },
      {
        path: "perfil",
        element: <PerfilCuidadorPage />,
      },
      {
        path: "anamnese",
        element: <Anamnesia/>,
      },
      
      {
      path: "treinamentos/primeirossocorros",
      element: <PrimeirosSocorrosPage />,
    },
      {
        path: "treinamentos/primeirossocorros/videoDesmaio",
        element: <VideoDesmaioPage />,
      },
    ],
  },
]);

export default router;
