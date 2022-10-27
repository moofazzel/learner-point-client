// import logo from './logo.svg';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Error from "./Components/Error";
import Blog from "./Components/Blog";
import Courses from "./Components/Courses";
import Faq from "./Components/Faq";
import Home from "./Components/Home";
import Main from "./Layouts/Main";
import Login from "./Components/Login";
import Register from "./Components/Register";
import SinglePage from "./Components/SinglePage";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "courses",
          element: <Courses />,
          loader: () => {
            return fetch("http://localhost:5000/courses");
          },
        },
        {
          path: "course/:id",
          element: (
            <PrivateRoutes>
              <SinglePage />
            </PrivateRoutes>
          ),
          loader: ({ params }) => {
            return fetch(`http://localhost:5000/courses/${params.id}`);
          },
        },
        {
          path: "faq",
          element: <Faq />,
        },
        {
          path: "blog",
          element: <Blog />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "register",
          element: <Register />,
        },
      ],
    },
    {
      path: "*",
      element: <Error />,
    },
  ]);
  return (
    <div className="bg-slate-50 h-screen">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
