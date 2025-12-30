import React, { useState, useEffect } from "react"
import { Outlet } from "react-router-dom"

// Componentes
import NavBar from "./components/NavBar"
import Drawer from "../cart/Drawer"
import Footer from "./components/Footer"
import Assistant from "../../pages/home/components/Assistant"

const HomeLayout = () => {
    const [cartOpen, setCartOpen] = useState(false)
    const [cart, setCart] = useState([])

    const addToCart = (product) => {
        setCart(prev => {
            const exists = prev.find(p => p.id === product.id)
            if (exists) {
                return prev.map(p =>
                    p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
                )
            }
            return [...prev, { ...product, quantity: 1 }]
        })
    }

    const removeFromCart = (id) => {
        setCart(prev => prev.filter(p => p.id !== id))
    }

    const updateQty = (id, qty) => {
        if (qty < 1) return
        setCart(prev => prev.map(p => p.id === id ? { ...p, quantity: qty } : p))
    }

    useEffect(() => {
        if (cartOpen) document.body.classList.add("cart-open")
        else document.body.classList.remove("cart-open")
    }, [cartOpen])

    return (
        <div className="min-h-screen flex flex-col">
            <NavBar
                setCartOpen={setCartOpen}
            />

            <Drawer
                open={cartOpen}
                setOpen={setCartOpen}
                products={cart}
                removeFromCart={removeFromCart}
                updateQty={updateQty}
            />

            <main className="flex-1">
                <Outlet context={{ addToCart }} />
            </main>

            <Footer />
            <Assistant />
        </div>
    )
}

export default HomeLayout
