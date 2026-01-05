import { Route, BrowserRouter, Routes } from "react-router-dom";

import Home from "../pages/home/page";
import MyPost from "../pages/my-post/page";

function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={Home} path="/" exact />
          <Route Component={MyPost} path="/my-post" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default AppRoutes;
