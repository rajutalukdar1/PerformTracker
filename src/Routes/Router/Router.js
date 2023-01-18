import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import EmployeeProfile from "../../Page/EmployeeProfile/EmployeeProfile/EmployeeProfile";
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
        path: "/employee-profile",
        element: <EmployeeProfile />
      },
    ]
  },
  {
    path: "/dashboard",
    element: <h1></h1>,
    children: [
      {
        path: "dashboard/employee-profile",
        element: <EmployeeProfile />
      }
    ]
  }
]);

export default router;