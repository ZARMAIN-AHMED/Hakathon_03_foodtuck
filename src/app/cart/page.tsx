"use client";
 import { useSelector, useDispatch } from "react-redux";
 import { RootState } from "@/app/redux/store"; // Replace with your Redux store path
 import { removeFromCart, updateQuantity } from "@/app/redux/cartslice";
 import { FiTrash2 } from "react-icons/fi";
 import Link from "next/link";
import Navbar from "../topnav/page";
 
 export default function CartComponent() {
   const cart = useSelector((state: RootState) => state.cart);
   const dispatch = useDispatch();
 
   const handleRemove = (id: string) => {
     dispatch(removeFromCart(id));
   };
 
   const handleQuantityChange = (id: string, quantity: number) => {
     dispatch(updateQuantity({ id, quantity }));
   };
 
   const totalPrice = cart.reduce(
     (total: number, item: { price: number; quantity: number }) =>
       total + item.price * item.quantity,
     0
   );
 
   return (
    <div>
  <Navbar />
  <div className="container mx-auto p-4 ">
    <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

    {cart.length === 0 ? (
      <p className="text-gray-600">Your cart is empty.</p>
    ) : (
      <div className="space-y-6">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 border-b pb-4"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-16 h-16 object-cover rounded-md"
            />
            <div className="flex-1">
              <h2 className="text-lg font-semibold">{item.name}</h2>
              <p className="text-gray-600">${item.price}</p>
            </div>
            <div className="flex items-center mt-2 sm:mt-0">
              <button
                onClick={() =>
                  handleQuantityChange(item.id, Math.max(1, item.quantity - 1))
                }
                className="px-3 py-1 bg-gray-200 rounded-l"
              >
                -
              </button>
              <span className="px-4">{item.quantity}</span>
              <button
                onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                className="px-3 py-1 bg-gray-200 rounded-r"
              >
                +
              </button>
            </div>
            <button
              onClick={() => handleRemove(item.id)}
              className="text-red-600 hover:text-red-800 mt-2 sm:mt-0"
            >
              <FiTrash2 size={24} />
            </button>
          </div>
        ))}

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-6 gap-4">
          <h3 className="text-xl font-bold">Total: ${totalPrice.toFixed(2)}</h3>
          <Link href="/chectoutpage">
            <button className="px-6 py-3 bg-orange-600 text-white rounded hover:bg-orange-700">
              Checkout
            </button>
          </Link>
        </div>
      </div>
    )}
  </div>
</div>
   )};