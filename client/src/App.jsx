import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from "./layout/Layout";
import Landing from "./components/landing/Landing";

const Header = () => <h2>header</h2>;
const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;


const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: "/surveys",
        element: <Dashboard />,
      },
      {
        path: "/surveys/new",
        element: <SurveyNew />,
      },
    ],
  },
]);

const App = () => {
  return (
    <div>
        <RouterProvider router={router} />
    </div>
  );
};

export default App;
