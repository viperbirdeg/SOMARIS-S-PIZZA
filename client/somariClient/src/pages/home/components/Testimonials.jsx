import React from "react";

const Testimonials = () => {
    return (
        <section className="w-full bg-[#E0E0E0] py-20 px-6">
            <div className="mx-auto max-w-4xl text-center">
                <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#212121]">
                    Pizzería{" "}
                    <span className="text-[#B71C1C]">
                        Somari
                    </span>
                </h1>
                <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-[#B71C1C]" />
                <p className="mt-10 text-base sm:text-lg leading-relaxed text-gray-600">
                    Tenemos pizzas, pastas, bebidas y antojitos de calidad,
                    siempre acompañados de un{" "}
                    <span className="font-semibold text-[#212121]">
                        excelente servicio
                    </span>{" "}
                    y atención rápida.
                    <br /><br />
                    Cada día buscamos mejorar para que vivas una experiencia
                    agradable, con todo bien organizado y con el objetivo de que
                    siempre salgas{" "}
                    <span className="font-semibold text-[#212121]">
                        completamente satisfecho
                    </span>.
                </p>
            </div>
        </section>
    );
};

export default Testimonials;
