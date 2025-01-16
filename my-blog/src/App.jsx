import { BrowserRouter, Link } from "react-router-dom";
import React from "react";
import AppRoutes from "./rotas/routes.jsx";

function App() {
  return (
    <>
      <AppRoutes/>
      <BrowserRouter>
        <Link to="post"></Link>
      </BrowserRouter>
    </>
  )
}

export default App
