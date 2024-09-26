import React from "react";
import Main from "./Main";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
