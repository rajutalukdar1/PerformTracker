import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import Admin from "../../Page/Admin/Admin";
import Blog from "../../Page/Blog/Blog";
import ClientDetails from "../../Page/Dashboard/Clients/ClientDetails/ClientDetails";
import Clients from "../../Page/Dashboard/Clients/Clients/Clients";
import AllEmployees from "../../Page/Dashboard/Employees/AllEmployees/AllEmployees";
import EmployeeProfile from "../../Page/Dashboard/Employees/EmployeeProfile/EmployeeProfile";
import Reports from "../../Page/Dashboard/Reports/Reports";
import Employees from "../../Page/Employees/Employees";
import Home from "../../Page/Home/Home/Home";
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
        path: "/dashboard/reports",
        element: <Reports></Reports>
      },
      {
        path: "/dashboard/admin",
        element: <Admin></Admin>
      },
      {
        path: "/dashboard/dashboardEmployees",
        element: <Employees></Employees>
      }
    ]
  }
]);

export default router;