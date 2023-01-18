import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
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
      // {
      //   path: "/dashboard",
      //   element: <Drawer></Drawer>
      // }
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