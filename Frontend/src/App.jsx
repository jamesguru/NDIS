import { createBrowserRouter,RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Admin from "./pages/admin/Admin";
import Staff from "./pages/staff/Staff";
import MyShifts from "./pages/MyShifts/MyShifts";
import Shift from "./pages/shift/Shift";
import Account from "./pages/account/Account";
function App() {
  const router = createBrowserRouter([
 
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/login",
          element: <Login />,
        },
    
        {
          path: "/admin",
          element: <Admin />,
        },
        {
          path: "/staff",
          element: <Staff />,
        },
        {
          path: "/myshifts",
          element: <MyShifts />,
        },
        {
          path: "/shift/:id",
          element: <Shift />,
        },
        {
          path: "/myaccount",
          element: <Account />,
        }
      
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
