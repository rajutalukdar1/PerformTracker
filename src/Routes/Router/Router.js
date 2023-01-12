import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Page/Home/Home/Home";
import Footer from "../../Page/Share/Footer/Footer";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/footer',
        element: <Footer></Footer>
      },
    ]
  },
]);

export default router;