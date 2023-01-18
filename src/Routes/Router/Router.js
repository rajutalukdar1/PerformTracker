import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import Home from "../../Page/Home/Home/Home";
import Client from "../../Page/Others/Client/Client";
import ClientDetails from "../../Page/Others/ClientDetails/ClientDetails";
import SignIn from "../../Page/SignIn/SignIn";
import SignUp from "../../Page/SignUp/SignUp";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <SignIn></SignIn>
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>
      },
      {
        path: "/client",
        element: <Client></Client>
      },
      {
        path: "/clientDetails",
        element: <ClientDetails></ClientDetails>
      }
    ]
  },
  {
    path: '/dashboard',
    element: <DashboardLayout></DashboardLayout>,
    children: [
      // {
      //   path: "/dashboard",
      //   element: <Dashboard></Dashboard>
      // }
    ]
  }
]);

export default router;