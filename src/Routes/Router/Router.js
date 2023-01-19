import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Dashboard from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import Home from "../../Page/Home/Home/Home";
import Client from "../../Page/Others/Client/Client";
import ClientDetails from "../../Page/Others/ClientDetails/ClientDetails";
import Clients from "../../Page/Others/Clients/Clients";
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
        element: <Clients></Clients>
      },
      {
        path:'/clientdetails/:_id',
        element: <ClientDetails></ClientDetails>,
        loader: ({params})=> fetch(`http://localhost:5000/clients/${params._id}`)
        
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