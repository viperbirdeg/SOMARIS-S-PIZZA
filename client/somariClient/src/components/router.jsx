import React from "react"
import {Route, Routes, useOutletContext} from "react-router-dom"

//? Home components
import HomeLayout from "../pages/home/HomeLayout"
//import Index from "../pages/homePage/components/Index"
//import AboutUs from "../pages/homePage/components/AboutUs"
import Carrousel from "../pages/home/components/Carrousel"
import Testimonials from "../pages/home/components/Testimonials"

import UnExist from "../pages/home/components/UnExist"

import Login from "../pages/auth/Login"
import Register from "../pages/auth/Register"

//? App component
/*import App from "../App" */

const Router = () => {
    return(
        <Routes>
            {/* Home */}
            <Route path = "/" element = {<HomeLayout/>}>
                <Route index element = {
                    <div>
                        <Testimonials/>
                        <div className="carrousel-wrapper">
                            <Carrousel/>
                        </div>
                    </div>
                }
                />
                <Route path="UnExist" element = {<UnExist/>}/>
                {/*
                <Route index element = {<Index/>}/>
                <Route path = "aboutUs" element = {<AboutUs/>}/>
                */}
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
        </Routes>
    )
}

export default Router