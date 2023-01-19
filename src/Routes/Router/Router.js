import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AllEmployees from "../../Page/DashBoard/AllEmployees";
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
        path: "/Employees",
        element: <AllEmployees />
      }

    ]
  },
]);

export default router;