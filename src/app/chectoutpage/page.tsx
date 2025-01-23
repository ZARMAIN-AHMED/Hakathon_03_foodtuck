
"use client";
import React, { useState } from "react";
import Navbar from "../topnav/page";


import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { removeFromCart, updateQuantity } from "../redux/cartslice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { FiTrash2 } from "react-icons/fi";

import Link from "next/link";


const Checkout = () => {
  const [showToast, setShowToast] = useState(false);

  const handleOrder = () => {
    setShowToast(true);

    // Automatically hide the toast after 3 seconds
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

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
  const [billingAddressSame, setBillingAddressSame] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    city: "",
    address: "",
    zip: "",
    country: "us",
  });
  const [isSubmitted, setIsSubmitted] = useState(false); // Track form submission
  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.address) {
      alert("Please fill in all required fields.");
      return;
    }
    setIsSubmitted(true); // Mark form as submitted
  };

  // Calculate the total price of items in the cart
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div>
      <Navbar />
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 p-4 pb-10">
        {/* Checkout Form */}
        {!isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-[872px] h-auto bg-white shadow-lg rounded-lg p-6 opacity-100"
          >
            <h2 className="text-2xl font-bold mb-4">Checkout</h2>
            <form onSubmit={handleFormSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
                <div>
                  <label className="block">First Name</label>
                  <input
                    name="firstName"
                    type="text"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="input-field my-5 w-full"
                    required
                  />
                </div>
                <div>
                  <label className="block">Last Name</label>
                  <input
                    name="lastName"
                    type="text"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="input-field my-5 w-full"
                    required
                  />
                </div>
                <div>
                  <label className="block">Email</label>
                  <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="input-field my-5 w-full"
                    required
                  />
                </div>
                <div>
                  <label className="block">Phone Number</label>
                  <input
                    name="phone"
                    type="text"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="input-field my-5 w-full"
                  />
                </div>
                <div>
                  <label className="block">Company</label>
                  <input
                    name="company"
                    type="text"
                    placeholder="Company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="input-field my-5 w-full"
                  />
                </div>
                <div>
                  <label className="block">City</label>
                  <input
                    name="city"
                    type="text"
                    placeholder="City"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="input-field my-5 w-full"
                  />
                </div>
                <div>
                  <label className="block">Address</label>
                  <input
                    name="address"
                    type="text"
                    placeholder="Address 1"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="input-field my-5 w-full"
                    required
                  />
                </div>
                <div>
                  <label className="block">Zip Code</label>
                  <input
                    name="zip"
                    type="text"
                    placeholder="Zip Code"
                    value={formData.zip}
                    onChange={handleInputChange}
                    className="input-field my-5 w-full"
                  />
                </div>
                <div>
                  <label className="block">Country</label>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    className="input-field my-5 w-full"
                  >
                    <option value="us">United States</option>
                    <option value="ca">Canada</option>
                  </select>
                </div>
                <div>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="mr-2"
                      checked={billingAddressSame}
                      onChange={() => setBillingAddressSame(!billingAddressSame)}
                    />
                    Billing address is the same as shipping address
                  </label>
                </div>
              </div>
              <div className="flex flex-col md:flex-row justify-between mt-6 mb-8 gap-4">
                <button
                  type="button"
                  onClick={() => router.push("/cart")}
                  className="flex items-center text-gray-600 w-full md:w-auto"
                >
                  <span className="mr-2">{"<"}</span> Back to Cart
                </button>
                <button
                  type="submit"
                  className="bg-orange-500 text-white px-6 py-2 w-full md:w-96 rounded-lg"
                >
                  Proceed to Shipping
                  <span className="mr-2 pl-6">{">"}</span>
                </button>
              </div>
            </form>
          </motion.div>
        ) : (
          // Display user profile after form submission
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-[872px] h-auto bg-white shadow-lg rounded-lg p-6 opacity-100"
          >
            <h2 className="text-2xl font-bold mb-4">User Profile</h2>
            <div className="space-y-4">
              <p><strong>First Name:</strong> {formData.firstName}</p>
              <p><strong>Last Name:</strong> {formData.lastName}</p>
              <p><strong>Email:</strong> {formData.email}</p>
              <p><strong>Phone Number:</strong> {formData.phone}</p>
              <p><strong>Address:</strong> {formData.address}</p>
              <p><strong>City:</strong> {formData.city}</p>
              <p><strong>Country:</strong> {formData.country === "us" ? "United States" : "Canada"}</p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="bg-gray-500 text-white px-6 py-2 mt-4 rounded-lg"
              >
                Edit Profile
              </button>
<Link href={'/ordertracking'}>
              <button
           
                className="bg-gray-500 text-white ml-8 px-6 py-2 mt-4 rounded-lg"
              >
              Order Tracking
              </button></Link>
            </div>
          </motion.div>
        )}
        {/* Right-side Panel */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full md:w-[424px] h-auto bg-gray-100 border-t border-gray-300 py-4 px-4 mt-6 md:mt-0"
        ><div className="mb-4 flex flex-col gap-2">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex flex-col md:flex-row items-center md:items-start gap-4 border-b pb-4"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-16 h-16 object-cover rounded-md md:w-24 md:h-24"
            />
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-lg font-semibold">{item.name}</h2>
              <p className="text-gray-600">${item.price}</p>
            </div>
            <div className="flex items-center justify-center md:justify-start">
              <button
                onClick={() => handleQuantityChange(item.id, Math.max(1, item.quantity - 1))}
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
              className="text-red-600 hover:text-red-800 mt-2 md:mt-0 md:ml-4"
            >
              <FiTrash2 size={24} />
            </button>
          </div>
        ))}
      </div>
      
          <div className="flex justify-between items-center mt-6">
            <h3 className="text-xl font-bold">Total: ${totalPrice.toFixed(2)}</h3>
          </div>
          <div className="border-t pt-4">
            <div className="flex justify-between my-4">
              <span>Sub-total</span>
              <span>${calculateTotal().toFixed(2)}</span>
            </div>
            <div className="flex justify-between my-4">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between my-4">
              <span>Discount</span>
              <span>25%</span>
            </div>
            <div className="flex justify-between my-4">
              <span>Tax</span>
              <span>$54.76</span>
            </div>
            <div className="flex justify-between my-4 font-bold">
              <span>Total</span>
              <span>
                ${(calculateTotal() + 54.76 - (calculateTotal() * 0.25)).toFixed(2)}
              </span>
            </div>
      

      
       
        <button
          onClick={handleOrder}
          className="bg-orange-500 text-white w-full py-2 rounded-lg hover:bg-orane-600"
        >
          Place an Order
        </button>
      

      {/* Toast Notification */}
      
    </div>
            
           
       
        </motion.div>
      </div>
    </div>
  );
};

export default Checkout;
