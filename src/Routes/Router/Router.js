import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
<<<<<<< HEAD
import AllEmployees from "../../Page/Dashboard/Employee/AllEmployees/AllEmployees";
import EmployeeProfile from "../../Page/Dashboard/Employee/EmployeeProfile/EmployeeProfile";
=======
import Blog from "../../Page/Blog/Blog";
import AllEmployees from "../../Page/EmployeeProfile/AllEmployees/AllEmployees"
import EmployeeProfile from "../../Page/EmployeeProfile/EmployeeProfile/EmployeeProfile";
>>>>>>> 993b8944120d5fa115d71ec53c0fa9607905d2d6
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
<<<<<<< HEAD
      }
=======
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/dashboard/clientDetails/:_id',
        element: <ClientDetails></ClientDetails>,
        loader: ({ params }) => fetch(`https://perform-tracker-server.vercel.app/clients/${params._id}`)
>>>>>>> 993b8944120d5fa115d71ec53c0fa9607905d2d6

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
        path: "/dashboard/employees/:id",
        element: <EmployeeProfile />
      },

      {
        path: '/dashboard/clientDetails/:_id',
        element: <ClientDetails></ClientDetails>,
        loader: ({ params }) => fetch(`https://perform-tracker-server.vercel.app/clients/${params._id}`)

      },
      {
        path: "/dashboard/clients",
        element: <Clients />
      },
      {
<<<<<<< HEAD
        path: '/dashboard/clientdetails/:_id',
        element: <ClientDetails></ClientDetails>,
        loader: ({ params }) => fetch(`https://perform-tracker-server.vercel.app/clients/${params._id}`)
=======
        path: "/dashboard/clientDetails",
        element: <ClientDetails></ClientDetails>
      }
      , {
        path: "/dashboard/reports",
        element: <Reports></Reports>
>>>>>>> 993b8944120d5fa115d71ec53c0fa9607905d2d6
      }
    ]
  }
]);

export default router;