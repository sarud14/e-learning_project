import { createBrowserRouter, Navigate, RouterProvider } from "react-router";
import MainLayout from "../layouts/MainLayout";
import LandingPages from "../pages/LandingPages";

const userRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [{ index: true, element: <LandingPages /> }],
  },
]);
function AppRouter() {
  return (
    <div>
      <RouterProvider router={userRouter} />
    </div>
  );
}
export default AppRouter;
