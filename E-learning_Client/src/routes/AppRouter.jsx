import { createBrowserRouter, Navigate, RouterProvider } from "react-router";
import MainLayout from "../layouts/MainLayout";
import LandingPages from "../pages/LandingPages";
import Login from "../pages/Login";
import Register from "../pages/Register"

const user = null

const publicRouter = createBrowserRouter([
  {path: "/login", element: <Login />},
  {path: "/register", element: <Register />},
  {path: "/", element: <MainLayout />,
    children: [
      { index: true, element: <LandingPages /> }
    ]
  },
  { path: "*", element: <Navigate to="/" replace /> }
]);


const userRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <LandingPages /> }
    ],
  },
]);
function AppRouter() {
  const finalRouter = user ? userRouter : publicRouter
  return (
    <div>
      <RouterProvider router={finalRouter} />
    </div>
  );
}
export default AppRouter;
