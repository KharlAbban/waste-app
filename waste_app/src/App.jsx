import {RouterProvider, createBrowserRouter} from "react-router-dom"
import { AdminDashboard, LandingPage, UserDashboard } from "./pages";
import { authAction } from "./actions/formActions";

const wasteAppRouter = createBrowserRouter([
  {
    "path": "/",
    element: <LandingPage />,
    action: authAction
  },
  {
    "path": "/user",
    element: <UserDashboard />,
  },
  {
    "path": "/admin",
    element: <AdminDashboard />,
  }
]);

const App = () => {
  return (
    <RouterProvider router={wasteAppRouter} />
  )
}

export default App