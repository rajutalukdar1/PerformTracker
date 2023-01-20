import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
<<<<<<< HEAD
import AllEmployees from "../../Page/Dashboard/Employee/AllEmployees/AllEmployees";
import EmployeeProfile from "../../Page/Dashboard/Employee/EmployeeProfile/EmployeeProfile";
=======
import AllEmployees from "../../Page/EmployeeProfile/AllEmployees/AllEmployees"
import EmployeeProfile from "../../Page/EmployeeProfile/EmployeeProfile/EmployeeProfile";
>>>>>>> 296a66f18e477c1f7670de5e4d2bd79c1e257dbc
import Home from "../../Page/Home/Home/Home";
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
<<<<<<< HEAD
      }
=======
      },
      
>>>>>>> 296a66f18e477c1f7670de5e4d2bd79c1e257dbc

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
        path: "/dashboard/employees",
        element: <AllEmployees />
      },
      {
        path: "/dashboard/employees/:id",
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