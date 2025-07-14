// src/AppRouter.jsx
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router"; // <<-- ต้อง import Navigate และ Outlet
import MainLayout from "../layouts/MainLayout";
import LandingPages from "../pages/LandingPages";
import Login from "../pages/Login";
import Register from "../pages/Register";
import UserDashboard from "../pages/UserDashboard";
import useUserStore from "../stores/userStore";

function ProtectedRoute() {
  const user = useUserStore((state) => state.user);
  if (!user) {
    return <Navigate to="/" replace />;
  }
  return <Outlet />;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <LandingPages /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
    ],
  },

  {
    element: <ProtectedRoute />,
    children: [{ path: "/dashboard", element: <UserDashboard /> }],
  },

  { path: "*", element: <Navigate to="/" replace /> },
]);

function AppRouter() {
  
  return (
    <RouterProvider router={router} /> 
  );
}

export default AppRouter;
