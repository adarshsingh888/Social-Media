import { createBrowserRouter } from "react-router-dom";
import Login from '../pages/Login'
import Register from '../pages/Register';
import Home from '../pages/Home';
import Feed from '../components/Feed'; // Component to render inside Home
import Friend from '../components/Friend'; // Another component inside Home
import Body from '../components/Body';
import Profile from "../pages/Profile";
import Auth from "../pages/Auth";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Auth/>, // Default welcome page
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/home",
      element: <Home />, // Home with fixed Navbar
      children: [
        {
          path: "",
          element: <Body />, // Default route for /home
        },
        {
          path: "feed", // Route: /home/feed
          element: <Feed />,
        },
        {
          path: "friend", // Route: /home/friend
          element: <Friend />,
        },
      ],
    },
  ]);

  export default router;