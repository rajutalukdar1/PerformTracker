import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import AllEmployees from "../../Page/DashBoard/AllEmployees";
import EmployeeProfile from "../../Page/EmployeeProfile/EmployeeProfile/EmployeeProfile";
import Home from "../../Page/Home/Home/Home";
// import Client from "../../Page/Others/Client/Client";
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
        path: "/Employees",
        element: <AllEmployees />
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
      // },
      {
        path: "/dashboard/employee-profile/:id",
        element: <EmployeeProfile />
      },
      {
        path:'/dashboard/clientDetails/:_id',
        element: <ClientDetails></ClientDetails>,
        loader: ({params})=> fetch(`https://perform-tracker-server.vercel.app/clients/${params._id}`)
        
    },
      {
        path: "/dashboard/clients",
        element: <Clients />
      },
      {
        path: '/dashboard/clientdetails/:_id',
        element: <ClientDetails></ClientDetails>,
        loader: ({ params }) => fetch(`https://perform-tracker-server.vercel.app/clients/${params._id}`)
      }
    ]
  }
]);

export default router;