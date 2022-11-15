import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import About from "./components/About";
import Upper from "./components/Upper";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <h1>cc</h1>
          <Link to="about">About Us</Link>
        </div>
      ),
    },
    {
      path: "about",
      element: <About />,
    },
  ]);

  const [game, setGame] = React.useState("");

  return (
    <>
      <Upper game={game} setGame={setGame} />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
