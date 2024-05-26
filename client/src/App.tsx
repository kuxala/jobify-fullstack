import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  HomeLayout,
  DashboardLayout,
  Landing,
  Register,
  Login,
  Error,
  AddJob,
  Stats,
  Alljobs,
  Admin,
  Profile,
  EditJob,
} from "./pages/index";
import { action as registerAction } from "./pages/Register";
import { action as LoginAction } from "./pages/Login";
import { loader as StatsLoader } from "./pages/Stats";
import { loader as dashboardLoader } from "./pages/DashboardLayout";
import { loader as AllJobsLoader } from "./pages/AllJobs";
import { loader as editJobLoader } from "./pages/EditJob";
import { loader as AdminLoader } from "./pages/Admin";
import { action as editJobAction } from "./pages/EditJob";
import { action as addJobAction } from "./pages/AddJob";
import { action as ProfileAction } from "./pages/Profile";

import { action as deleteJobAction } from "./pages/DeleteJob";

export const checkDefaultTheme = () => {
  const isDarkTheme = localStorage.getItem("darkTheme") === "true";
  document.body.classList.toggle("dark-theme", isDarkTheme);
  return isDarkTheme;
};

checkDefaultTheme();

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Landing /> },
      {
        path: "register",
        element: <Register />,
        action: registerAction,
      },
      { path: "login", element: <Login />, action: LoginAction },
      {
        path: "dashboard",
        element: <DashboardLayout />,
        loader: dashboardLoader,
        children: [
          {
            index: true,
            element: <AddJob />,
            action: addJobAction,
          },
          {
            path: "stats",
            element: <Stats />,
            loader: StatsLoader,
          },
          {
            path: "all-jobs",
            element: <Alljobs />,
            loader: AllJobsLoader,
          },
          {
            path: "profile",
            element: <Profile />,
            action: ProfileAction,
          },
          {
            path: "admin",
            element: <Admin />,
            loader: AdminLoader,
          },
          {
            path: "edit-job/:id",
            element: <EditJob />,
            loader: editJobLoader,
            action: editJobAction,
          },
          {
            path: "delete-job/:id",
            action: deleteJobAction,
          },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
