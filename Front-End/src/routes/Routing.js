import { createBrowserRouter, Navigate } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import Feed from "../components/Feed";
import Friend from "../components/Friend";
import Body from "../components/Body";
import Profile from "../pages/Profile";
import Auth from "../pages/Auth";
import { useSelector } from "react-redux";
import Setting from "../components/RightSide/Setting";
import Notification from "../components/RightSide/Notification";
import Trend from "../components/RightSide/Trend";
// Helper function to get routes based on authentication


const getRoutes = (user) =>
  createBrowserRouter([
    {
      path: "/",
      element: user ? <Navigate to="/home" /> : <Auth />,
    },
    {
      path: "/home",
      element: user ? <Home /> : <Navigate to="/" />,
      children: [
        {
          path: "/home",
          element: <Body />,
          children: [
            {
              path: '/home/',
              element: <Trend />
            },
            {
              path: "/home/setting",
              element: user ? <Setting /> : <Navigate to='/' />
            },
            {
              path: "/home/notification",
              element: user ? <Notification /> : <Navigate to='/' />
            }

          ]
        }

      ],
    },
    {
      path: "/profile/:id",
      element: user ? <Profile /> : <Navigate to="/" />,
      children: [
        {
          path: "",
          element: <Trend />
        }
      ]
    },
  ]);

// Selector to get authentication state
const useAuthRouter = () => {
  const user = useSelector((state) => state.AuthReducer.authData);
  //console.log("routing page",user)
  return getRoutes(user);
};

export default useAuthRouter;
