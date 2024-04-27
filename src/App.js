import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider, Route, Routes, Outlet } from "react-router-dom";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Single from "./pages/Single";
import Write from "./pages/Write";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./style.scss"
const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Outlet/>
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/post/:id",
        element: <Single />
      },
      {
        path: "/write",
        element: <Write />
      },
    ]
  },
  {
    path: "/test",
    element: <div>This is Home!</div>
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  }
]);

function App() {
  return (
    <div className="app">
      <div className='container'>
      <RouterProvider router={router}>
        <Routes />
      </RouterProvider>
      </div>
    </div>
  );
}

export default App;
