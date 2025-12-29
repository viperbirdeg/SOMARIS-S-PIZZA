import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'

const Drawer = ({ open, setOpen, products }) => {
    return (
        <Dialog open={open} onClose={setOpen} className="relative z-50">
            <DialogBackdrop className="fixed inset-0 bg-black/50" />
            <div className="fixed inset-0 overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                        <DialogPanel className="pointer-events-auto w-screen max-w-md bg-white shadow-xl">
                            <div className="flex h-full flex-col">
                                <div className="flex items-center justify-between px-4 py-4 border-b">
                                    <DialogTitle className="text-lg font-semibold">
                                        Shopping Cart
                                    </DialogTitle>
                                    <button onClick={() => setOpen(false)}>
                                        <XMarkIcon className="h-6 w-6 text-gray-500 hover:text-black" />
                                    </button>
                                </div>
                                <div className="flex-1 overflow-y-auto p-4">
                                    {products.length === 0 ? (
                                        <p className="text-gray-500">El carrito está vacío</p>
                                    ) : (
                                        products.map((p) => (
                                            <div key={p.id} className="flex gap-4 mb-4">
                                                <img
                                                    src={p.imageSrc}
                                                    alt={p.name}
                                                    className="h-16 w-16 rounded object-cover"
                                                />
                                                <div>
                                                    <p className="font-medium">{p.name}</p>
                                                    <p className="text-sm text-gray-500">{p.price}</p>
                                                </div>
                                            </div>
                                        ))
                                    )}
                                </div>
                                <div className="border-t p-4">
                                    <button
                                        className="w-full rounded-md bg-indigo-600 py-2 text-white hover:bg-indigo-700"
                                    >
                                        Checkout
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
