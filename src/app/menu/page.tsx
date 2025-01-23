

'use client';

import { useState } from 'react';
import Image from 'next/image';
import Navbar from '../topnav/page';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  calories: number;
  category: string;
  image: string;
}

const Menu = () => {
  const [cart, setCart] = useState<MenuItem[]>([]);
  const [filter, setFilter] = useState<string>('');

  const menuItems: MenuItem[] = [
    { id: 1, name: 'Alder Grilled Chinook Salmon', description: 'Toasted French bread topped with romano, cheddar', price: 12.99, calories: 560, category: 'Starter', image: '/44.png' },
    { id: 2, name: 'Berries and Creme Tart', description: 'Gorgonzola, ricotta, mozzarella, taleggio', price: 8.99, calories: 700, category: 'Starter', image: '/cream.jpg' },
    { id: 3, name: 'Optic Big Breakfast Combo', description: 'Toasted French bread topped with romano, cheddar', price: 18.99, calories: 560, category: 'Main', image: '/breakfast.jpg' },
    { id: 4, name: 'Caffè macchiato', description: 'Espresso with a dollop of steamed milk', price: 4.50, calories: 100, category: 'Drinks', image: '/Caffe.jpg' },
    { id: 5, name: 'Pain au chocolat', description: 'Delicious French chocolate croissant', price: 3.50, calories: 250, category: 'Dessert', image: '/pain.jpg' },
    { id: 6, name: 'Organic Green Salad', description: 'Fresh organic greens with a light dressing', price: 7.99, calories: 150, category: 'Starter', image: '/salad.jpg' },
    { id: 7, name: 'Seafood Pasta', description: 'Pasta with fresh seafood and garlic butter sauce', price: 15.99, calories: 800, category: 'Main', image: '/seafood.jpg' },
    { id: 8, name: 'Strawberry Smoothie', description: 'A refreshing strawberry smoothie made with yogurt', price: 5.50, calories: 200, category: 'Drinks', image: '/shake.jpg' },
    { id: 9, name: 'Chocolate Lava Cake', description: 'Warm chocolate cake with molten center', price: 6.99, calories: 450, category: 'Dessert', image: '/lava.jpg' },
    { id: 10, name: 'Vegetarian Wrap', description: 'A healthy wrap filled with vegetables and hummus', price: 9.99, calories: 350, category: 'Main', image: '/wrap.jpg' },
    { id: 11, name: 'Iced Latte', description: 'Chilled espresso with milk and ice', price: 4.00, calories: 120, category: 'Drinks', image: '/ice.jpg' },
    { id: 12, name: 'Blueberry Muffin', description: 'Freshly baked muffin with blueberries', price: 3.75, calories: 300, category: 'Dessert', image: '/muffin.jpg' },
  ];

  const addToCart = (item: MenuItem) => {
    setCart([...cart, item]);
  };

  const handleFilter = (category: string) => {
    setFilter(category);
  };

  const filteredItems = filter
    ? menuItems.filter((item) => item.category === filter)
    : menuItems;


  return (
    <div>
      <Navbar />
      <div className="bg-white py-14">
        <div className="container mx-auto px-4 space-y-10">
          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-4 mb-6">
            <button onClick={() => handleFilter('')} className="bg-gray-200 px-4 py-2 rounded-md">
              All
            </button>
            {['Starter', 'Main', 'Drinks', 'Dessert'].map((category) => (
              <button
                key={category}
                onClick={() => handleFilter(category)}
                className="bg-gray-200 px-4 py-2 rounded-md"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Menu Items Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                className="flex flex-col space-y-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  width={600}
                  height={300}
                  className="rounded-lg  h-96"
                />
                <div className="space-y-2">
                  <h2 className="text-lg md:text-xl font-bold">{item.name}</h2>
                  <p className="text-sm md:text-base">{item.description}</p>
                  <p className="text-sm md:text-base">{item.calories} CAL</p>
                  <div className="text-right">
                    <span className="text-[#FF9F0D] font-bold text-lg">${item.price}</span>
                  </div>
                  <button
                    onClick={() => addToCart(item)}
                    className="bg-[#FF9F0D] text-white px-4 py-2 rounded-md mt-2"
                  >
                    Add to Cart
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Cart Section */}
          <div className="mt-10 bg-gray-100 p-6 rounded-lg">
            <h2 className="text-lg font-bold mb-4">Your Cart</h2>
            {cart.length === 0 ? (
              <p>Your cart is empty!</p>
            ) : (
              <div>
                <ul className="space-y-4">
                  {cart.map((item, index) => (
                    <li key={index} className="flex justify-between items-center">
                      <span>{item.name}</span>
                      <span>${item.price.toFixed(2)}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 text-right">
                  <span className="font-bold">
                    Total: ${cart.reduce((total, item) => total + item.price, 0).toFixed(2)}
                  </span>
                </div>
                <Link href={'/chectoutpage'}>
                  <button className="bg-[#FF9F0D] text-white px-6 py-3 rounded-md mt-6 w-full md:w-1/3">
                    Checkout
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
