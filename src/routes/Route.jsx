import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Main from "../layouts/Main";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../layouts/Dashboard";
import DashHome from "../pages/dashboard/DashHome";
import PrivateRoute from "./private/PrivateRoute";
import Profile from "../pages/dashboard/Profile";
import MyBooks from "../pages/dashboard/MyBooks";
import AddBooks from "../pages/dashboard/AddBooks";
import EditBook from "../pages/dashboard/EditBook";
import AllBooks from "../pages/AllBooks";
import AboutUs from "../pages/AboutUs";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      errorElement: <ErrorPage/>,
      children:[
        {
            path: "/",
            element: <Home/>
        },
        {
          path: "/login",
          element: <Login/>
        },
        {
          path: "/register",
          element: <Register/>
        },
        {
          path: "/allBooks",
          element: <PrivateRoute> <AllBooks/> </PrivateRoute>
        },
        {
          path: "/about",
          element: <AboutUs/>
        }
    ]
    },{
      path: "/dashboard",
      element: <PrivateRoute><Dashboard/></PrivateRoute>,
      children: [
        {
          path: "home",
          element: <DashHome/>
        },
        {
          path: "profile",
          element: <Profile/>
        },
        {
          path: "myBooks",
          element: <MyBooks/>
        },
        {
          path: "addBook",
          element: <AddBooks/>
        },
        {
          path: "editBook",
          element: <EditBook/>
        }
      ]
    }
  ]);

export default router;