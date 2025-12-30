import { useNavigate } from "react-router-dom"
import { ArrowLeftIcon } from "@heroicons/react/24/outline"
import Pizza from "../../imagenes/Pizza.png"

import { useAuth } from "../../context/AuthContext"

export default function Register() {
    const navigate = useNavigate()
    const { login } = useAuth()

    const handleSubmit = (e) => {
        e.preventDefault()
        // Nomas pa ver como mostrar mas cosas cuando ya este bien el inicio y todo
        login("fake-token")
        navigate("/")
    }

    return (
        <div className="min-h-screen bg-[#E0E0E0] flex items-center justify-center px-4">
            <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2">

                <div className="relative flex flex-col justify-center px-10 py-12">
                    <button
                        onClick={() => navigate("/")}
                        className="absolute top-6 left-6 flex items-center gap-2 text-sm text-[#212121] hover:text-[#B71C1C] transition"
                    >
                        <ArrowLeftIcon className="w-4 h-4" />
                        Volver
                    </button>

                    <h1 className="text-3xl font-semibold text-[#212121] mb-2">
                        Crea tu cuenta
                    </h1>
                    <p className="text-sm text-gray-600 mb-8">
                        Completa los datos para registrarte
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label className="block mb-1 text-sm text-[#212121]">
                                Nombre completo
                            </label>
                            <input
                                type="text"
                                required
                                placeholder="Nombre"
                                className="w-full h-11 px-4 bg-white border border-[#E0E0E0] rounded-md focus:outline-none focus:ring-2 focus:ring-[#8E9A6D]"
                            />
                        </div>

                        <div>
                            <label className="block mb-1 text-sm text-[#212121]">
                                Correo electrónico
                            </label>
                            <input
                                type="email"
                                required
                                placeholder="correo@ejemplo.com"
                                className="w-full h-11 px-4 bg-white border border-[#E0E0E0] rounded-md focus:outline-none focus:ring-2 focus:ring-[#8E9A6D]"
                            />
                        </div>

                        <div>
                            <label className="block mb-1 text-sm text-[#212121]">
                                Contraseña
                            </label>
                            <input
                                type="password"
                                required
                                placeholder="••••••••"
                                className="w-full h-11 px-4 bg-white border border-[#E0E0E0] rounded-md focus:outline-none focus:ring-2 focus:ring-[#8E9A6D]"
                            />
                        </div>

                        <div>
                            <label className="block mb-1 text-sm text-[#212121]">
                                Confirmar contraseña
                            </label>
                            <input
                                type="password"
                                required
                                placeholder="••••••••"
                                className="w-full h-11 px-4 bg-white border border-[#E0E0E0] rounded-md focus:outline-none focus:ring-2 focus:ring-[#8E9A6D]"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[#B71C1C] text-white py-3 rounded-md font-semibold hover:bg-[#9f1818] transition shadow-md"
                        >
                            Crear cuenta
                        </button>
                    </form>

                    <p className="mt-8 text-sm text-center text-gray-600">
                        ¿Ya tienes cuenta?{" "}
                        <button
                            onClick={() => navigate("/login")}
                            className="font-semibold text-[#212121] hover:text-[#B71C1C] transition"
                        >
                            Inicia sesión
                        </button>
                    </p>
                </div>

                <div className="hidden md:flex items-center justify-center bg-[#8E9A6D]">
                    <div className="text-white text-center px-8">
                        <h2 className="text-2xl font-semibold mb-2">
                            ¡Bienvenido!
                        </h2>
                        <div className="hidden md:flex items-center justify-center bg-[#9AA36E]">
                            <img
                                src= {Pizza}
                                className="max-w-md"
                            />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
