import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Admin from "./pages/admin/Admin";
import Staff from "./pages/staff/Staff";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

function App() {

  const Layout = () => {
    return (
      <div className="app">
        
          <Navbar />
          <Outlet />
          <Footer />
       
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path:"/",
      element:<Layout />,
      children:[
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
        }
      ]
    }
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
