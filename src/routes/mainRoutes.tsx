import { Navigate } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home";

import { ERoutes } from "./constants";


 const MainRoutes = [
    {
      path: "/",
      element: <MainLayout />,
      children: [
      
       
              {
                path: ERoutes.HOME,
                element: <Home/>,
              },
        {
          path: "*",
          element: <Navigate to={`/`} />,
        },
      ],
    },
  ];


export default MainRoutes;
