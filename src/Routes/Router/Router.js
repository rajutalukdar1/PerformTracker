import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import Blog from "../../Page/Blog/Blog";
import AllEmployees from "../../Page/EmployeeProfile/AllEmployees/AllEmployees"
import EmployeeProfile from "../../Page/EmployeeProfile/EmployeeProfile/EmployeeProfile";
import Home from "../../Page/Home/Home/Home";
import ClientDetails from "../../Page/Others/ClientDetails/ClientDetails";
import Clients from "../../Page/Others/Clients/Clients";
import Reports from "../../Page/Reports/Reports";
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
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/dashboard/clientDetails/:_id',
        element: <ClientDetails></ClientDetails>,
        loader: ({ params }) => fetch(`https://perform-tracker-server.vercel.app/clients/${params._id}`)

      }
    ]
  },
  {
    path: '/dashboard',
    element: <DashboardLayout></DashboardLayout>,
    children: [
      // {
      //   path: "/dashboard/clientdetails",
      //   element: <Dashboard></Dashboard>
      // },
      {
        path: "/dashboard/employees",
        element: <AllEmployees />
      },
      {
        path: "/dashboard/employee/:id",
        element: <EmployeeProfile />
      },

      {
        path: '/dashboard/clientDetails/:_id',
        element: <ClientDetails></ClientDetails>,
        loader: ({ params }) => fetch(`https://perform-tracker-server.vercel.app/clients/${params._id}`)

      },
      {
        path: "/dashboard/clients",
        element: <Clients></Clients>
      },
      {
        path: "/dashboard/clientDetails",
        element: <ClientDetails></ClientDetails>
      }
      , {
        path: "/dashboard/reports",
        element: <Reports></Reports>
      }
    ]
  }
]);

export default router;