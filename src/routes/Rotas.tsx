import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PaginaInicial from "../pages/paginaInicial/PaginaInicial";
import PaginaBase from "../pages/paginaBase/PaginaBase";
import Projetos from "../pages/projetos/Projetos";

const router = createBrowserRouter([
    {
        element: <PaginaBase />,
        children:[
            {
                path: "/",
                element: <PaginaInicial />,
            },
            {
                path: "/projetos",
                element: <Projetos />,
            }

        ]
    },
]);

const Rotas: React.FC = () => {
    return <RouterProvider router={router} />
}

export default Rotas;