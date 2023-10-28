import React from "react"
import Home from "./pages/home/Home"
import { createBrowserRouter, 
         createRoutesFromElements,
         Route } from "react-router-dom"
import Login from "./pages/login/Login";

         const router = createBrowserRouter(
           createRoutesFromElements(
            <>
             <Route path="/" element={ <Home /> } />
             <Route path="/register" element={ <Login /> } />
            </>
           )
         )

export default router;