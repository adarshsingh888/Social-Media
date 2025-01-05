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

// Helper function to get routes based on authentication
const getRoutes = (user) =>
  createBrowserRouter([
    {
      path: "/",
      element: user ? <Navigate to="/home" /> : <Auth />,
    },
    {
      path: "/home",
      element: user ? <Home /> : <Navigate to="/login" />,
      children: [
        {
          path: "",
          element: <Body />,
        }
      ],
    },
    {
      path: "/profile",
      element: user ? <Profile /> : <Navigate to="/login" />,
    },
  ]);

// Selector to get authentication state
const useAuthRouter = () => {
  const user = useSelector((state) => state.AuthReducer.authData);
  console.log("routing page",user)
  return getRoutes(user);
};

export default useAuthRouter;
