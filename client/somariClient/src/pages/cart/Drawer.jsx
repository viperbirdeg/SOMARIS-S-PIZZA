import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from "@headlessui/react"
import { XMarkIcon } from "@heroicons/react/24/outline"

const Drawer = ({ open, setOpen, products, removeFromCart, updateQty }) => {

    products = [
        {
            id: 1,
            name: "Throwback Hip Bag",
            price: 90,
            quantity: 1,
            imageSrc:
                "https://tailwindcss.com/plus-assets/img/ecommerce-images/shopping-cart-page-04-product-01.jpg",
        },
    ]

    const subtotal = products.reduce(
        (sum, p) => sum + p.price * p.quantity,
        0
    )

    return (
        <Dialog open={open} onClose={setOpen} className="relative z-50">
            
            {/* BACKDROP */}
            <DialogBackdrop
                transition
                className="
                    fixed inset-0 bg-black/50
                    transition-opacity duration-300 ease-in-out
                    data-closed:opacity-0
                "
            />

            <div className="fixed inset-0 overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">

                        {/* PANEL */}
                        <DialogPanel
                            transition
                            className="
                                pointer-events-auto
                                w-screen max-w-md
                                transform
                                transition duration-300 ease-in-out
                                data-closed:translate-x-full
                                bg-[#212121]
                                text-[#E0E0E0]
                                shadow-xl
                            "
                        >
                            <div className="flex h-full flex-col">

                                {/* HEADER */}
                                <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
                                    <DialogTitle className="text-lg font-semibold">
                                        Tu carrito
                                    </DialogTitle>

                                    <button
                                        onClick={() => setOpen(false)}
                                        className="rounded-full p-1 hover:bg-white/10 transition"
                                    >
                                        <XMarkIcon className="h-6 w-6" />
                                    </button>
                                </div>

                                {/* PRODUCTS */}
                                <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
                                    {products.length === 0 ? (
                                        <p className="text-white/60">
                                            El carrito está vacío
                                        </p>
                                    ) : (
                                        products.map(p => (
                                            <div
                                                key={p.id}
                                                className="flex gap-4 bg-white/5 rounded-xl p-3"
                                            >
                                                <img
                                                    src={p.imageSrc}
                                                    alt={p.name}
                                                    className="h-16 w-16 rounded-lg object-cover"
                                                />

                                                <div className="flex-1">
                                                    <p className="font-medium">
                                                        {p.name}
                                                    </p>

                                                    <p className="text-sm text-white/60">
                                                        ${p.price}
                                                    </p>

                                                    <div className="flex items-center gap-2 mt-2">
                                                        <button
                                                            onClick={() => updateQty(p.id, p.quantity - 1)}
                                                            className="h-7 w-7 rounded bg-white/10 hover:bg-[#8E9A6D] hover:text-black transition"
                                                        >
                                                            −
                                                        </button>

                                                        <span className="w-6 text-center">
                                                            {p.quantity}
                                                        </span>

                                                        <button
                                                            onClick={() => updateQty(p.id, p.quantity + 1)}
                                                            className="h-7 w-7 rounded bg-white/10 hover:bg-[#8E9A6D] hover:text-black transition"
                                                        >
                                                            +
                                                        </button>

                                                        <button
                                                            onClick={() => removeFromCart(p.id)}
                                                            className="ml-auto text-sm text-[#B71C1C] hover:underline"
                                                        >
                                                            Eliminar
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    )}
                                </div>

                                {/* FOOTER */}
                                <div className="border-t border-white/10 px-5 py-4">
                                    <div className="flex justify-between mb-4 font-medium">
                                        <span>Subtotal</span>
                                        <span>${subtotal.toFixed(2)}</span>
                                    </div>

                                    <button
                                        className="
                                            w-full py-3 rounded-lg
                                            bg-[#B71C1C]
                                            hover:bg-[#9f1818]
                                            transition font-semibold
                                        "
                                    >
                                        Finalizar compra
                                    </button>
                                </div>

                            </div>
                        </DialogPanel>
                    </div>
                </div>
            </div>
        </Dialog>
    )
}

export default Drawer
