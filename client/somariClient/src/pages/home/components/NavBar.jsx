import React from "react"
import { useNavigate } from "react-router-dom"
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems, } from "@headlessui/react"
import { Bars3Icon, BellIcon, XMarkIcon, ShoppingCartIcon, UserIcon, } from "@heroicons/react/24/outline"

import { useAuth } from "../../../context/AuthContext"

const navigation = [
    { name: "Menú", href: "#" },
    { name: "Acerca de", href: "#" },
    { name: "Contacto", href: "#" },
]

const NavBar = ({ setCartOpen }) => {
    const navigate = useNavigate()
    const { isLoggedIn, logout } = useAuth()

    return (
        <Disclosure
            as="nav"
            className="relative bg-[#212121] after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10"
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">

                    {/* Botón menú mobile */}
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <DisclosureButton className="group inline-flex items-center justify-center rounded-md p-2 text-[#E0E0E0] hover:text-[#8E9A6D] transition">
                            <Bars3Icon className="h-6 w-6 group-data-open:hidden" />
                            <XMarkIcon className="hidden h-6 w-6 group-data-open:block" />
                        </DisclosureButton>
                    </div>

                    {/* Logo + navegación */}
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex shrink-0 items-center">
                            <img
                                alt="Logo"
                                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                                className="h-9 w-auto"
                            />
                        </div>

                        <div className="hidden sm:ml-8 sm:block">
                            <div className="flex space-x-6">
                                {navigation.map(item => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className=" px-1 py-2 text-sm font-medium text-[#E0E0E0] hover:text-white hover:border-b-2 hover:border-[#8E9A6D] transition"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Iconos derecha */}
                    <div className="absolute inset-y-0 right-0 flex items-center gap-3 pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                        {isLoggedIn && (
                            <>
                                <button
                                    onClick={() => setCartOpen(true)}
                                    className="rounded-full p-1 text-[#E0E0E0] hover:text-[#8E9A6D] transition-transform hover:scale-110"
                                >
                                    <ShoppingCartIcon className="h-6 w-6" />
                                </button>

                                <button className="rounded-full p-1 text-[#E0E0E0] hover:text-[#8E9A6D] transition-transform hover:scale-110">
                                    <BellIcon className="h-6 w-6" />
                                </button>
                            </>
                        )}

                        {/* Menú usuario */}
                        <Menu as="div" className="relative">
                            <MenuButton className="rounded-full p-1 text-[#E0E0E0] hover:text-[#8E9A6D] transition-transform hover:scale-110">
                                <UserIcon className="h-6 w-6" />
                            </MenuButton>

                            <MenuItems
                                transition
                                className="absolute right-0 z-20 mt-3 w-52 origin-top-right rounded-xl bg-[#212121] shadow-xl ring-1 ring-black/20 transition data-closed:scale-95 data-closed:opacity-0 data-enter:duration-150 data-enter:ease-out data-leave:duration-100 data-leave:ease-in"
                            >
                                {!isLoggedIn ? (
                                    <MenuItem>
                                        <button
                                            onClick={() => navigate("/login")}
                                            className="block w-full rounded-lg overflow-hidden px-4 py-2 text-left text-sm text-[#E0E0E0] hover:bg-[#8E9A6D]/20 transition"
                                        >
                                            Iniciar sesión
                                        </button>
                                    </MenuItem>
                                ) : (
                                    <>
                                        <MenuItem>
                                            <button
                                                onClick={() => navigate("/profile")}
                                                className="block w-full rounded-lg overflow-hidden px-4 py-2 text-left text-sm text-[#E0E0E0] hover:bg-[#8E9A6D]/20 transition"
                                            >
                                                ⚙️ Ajustes
                                            </button>
                                        </MenuItem>

                                        <div className="my-1 h-px bg-white/10" />

                                        <MenuItem>
                                            <button
                                                onClick={logout}
                                                className="block w-full rounded-lg overflow-hidden px-4 py-2 text-left text-sm text-red-400 hover:bg-[#B71C1C] hover:text-white transition"
                                            >
                                                🚪 Cerrar sesión
                                            </button>
                                        </MenuItem>
                                    </>
                                )}
                            </MenuItems>
                        </Menu>
                    </div>
                </div>
            </div>

            {/* Menú mobile animado */}
            <DisclosurePanel
                transition
                className="sm:hidden origin-top transition data-closed:scale-y-95 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
            >
                <div className="space-y-2 px-4 pt-4 pb-5 bg-[#212121]">
                    {navigation.map(item => (
                        <DisclosureButton
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg px-4 py-3 text-base font-medium text-[#E0E0E0] hover:bg-[#8E9A6D]/20 transition"
                        >
                            {item.name}
                        </DisclosureButton>
                    ))}

                    {isLoggedIn && (
                        <>
                            <div className="my-2 h-px bg-white/10" />

                            <DisclosureButton
                                as="button"
                                onClick={() => navigate("/profile")}
                                className="block w-full rounded-lg px-4 py-3 text-left text-[#E0E0E0] hover:bg-[#8E9A6D]/20 transition"
                            >
                                ⚙️ Ajustes
                            </DisclosureButton>

                            <DisclosureButton
                                as="button"
                                onClick={logout}
                                className="block w-full rounded-lg px-4 py-3 text-left text-red-400 hover:bg-[#B71C1C] hover:text-white transition"
                            >
                                🚪 Cerrar sesión
                            </DisclosureButton>
                        </>
                    )}
                </div>
            </DisclosurePanel>
        </Disclosure>
    )
}

export default NavBar
