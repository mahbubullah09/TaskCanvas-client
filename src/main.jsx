import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './Layout/MainLayout';
import Home from './Component/Home/Home';
import Dashboard from './Component/Dashboard/Dashboard';
import AuthProvider from './Component/Provider/authProvider';
import Login from './Component/registration/Login';
import SingUp from './Component/registration/SingUp';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import AddTaskDash from './Component/Dashboard/AddTaskDash';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/dashboard",
        element: <PrivateRoute>
          <Dashboard />
        </PrivateRoute>,

      },
      {
        path: "/addtask",
        element: <PrivateRoute>
          <AddTaskDash />
        </PrivateRoute>,

      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/singup",
        element: <SingUp />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
 <AuthProvider>
 <RouterProvider router={router} />
 </AuthProvider>
  </React.StrictMode>
);