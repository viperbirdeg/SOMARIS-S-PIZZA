import React, { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

//*Importing self components
import NavBar from "./components/NavBar";
import Assistant from "../../pages/home/components/Assistant"
//import "./home.css";
import Footer from "./components/Footer";

const HomeLayout = () => {

    const [cartOpen, setCartOpen] = useState(false);

    useEffect(() => {
        if (cartOpen) {
            document.body.classList.add("cart-open");
        } else {
            document.body.classList.remove("cart-open");
        }
    }, [cartOpen]);

    return (
        <div className="min-h-screen flex flex-col">
            <NavBar cartOpen={cartOpen} setCartOpen={setCartOpen} />

            <main className="flex-1">
                <Outlet />
            </main>

            <Footer />

            <Assistant />
        </div>
    );
};

export default HomeLayout;
