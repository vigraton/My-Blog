import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Home from "../pages/home/Home";
import Post from "../pages/post/Post";

function AppRoutes(){
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route Component={Home} path="/" exact/>
                    <Route Component={Post} path="/post"/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default AppRoutes