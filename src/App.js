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
import CheckOut from "./Components/CheckOut";
import SingleCourse from "./Components/SingleCourse";

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
            return fetch(
              "https://learning-platform-client-side-server.vercel.app/courses"
            );
          },
        },
        {
          path: "category/:id",
          element: <Courses />,
          loader: ({ params }) => {
            return fetch(
              `https://learning-platform-client-side-server.vercel.app/category/${params.id}`
            );
          },
        },
        {
          path: "checkout/:id",
          element: (
            <PrivateRoutes>
              <CheckOut />
            </PrivateRoutes>
          ),
          loader: ({ params }) => {
            return fetch(
              `https://learning-platform-client-side-server.vercel.app/checkout/${params.id}`
            );
          },
        },
        {
          path: "course/:id",
          element: <SinglePage />,
          loader: ({ params }) => {
            return fetch(
              `https://learning-platform-client-side-server.vercel.app/courses/${params.id}`
            );
          },
        },

        {
          path: "checkout",
          element: <CheckOut />,
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
