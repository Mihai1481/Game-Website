import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import GameDetailPage from "./pages/GameDetailPage";
import ErrorPage from "./pages/ErrorPage";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import PrivateRoute from "./components/PrivateRoute";
import ForgotPassword from "./components/ForgotPassword";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    children: [
      { path: "login", element: <Login /> },
      { path: "signup", element: <SignUp /> },
      { path: "forgotpassword", element: <ForgotPassword /> },
    ],
  },
  {
    path: "/",
    element: <PrivateRoute />, // Wrapper pentru rutele private
    children: [
      {
        path: "/",
        element: <Layout />, // Layout pentru rutele private
        children: [
          { index: true, element: <HomePage /> },
          { path: "games/:slug", element: <GameDetailPage /> },
        ],
      },
    ],
  },
]);

export default router;
