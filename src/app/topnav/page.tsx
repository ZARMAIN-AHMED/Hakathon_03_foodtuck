"use client";

import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store"; // Replace with your Redux store path
import { FiShoppingCart } from "react-icons/fi";
import { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { FiUser } from "react-icons/fi";
import { ChevronDownIcon, } from "lucide-react";
import { SignedOut, SignInButton, SignedIn, UserButton } from "@clerk/nextjs";
import { client } from "@/sanity/lib/client";

 function Navbar() {
  const cart = useSelector((state: RootState) => state.cart);

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  const [isOpen, setIsOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState<string>("");
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);


  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!searchValue.trim()) return;
    setLoading(true);

    try {
      const results = await client.fetch(
        `*[_type == "product" && name match $name]{
          _id,
          name,
          "image": image.asset->url,
          price,
          description,
          category
        }`,
        { name: `${searchValue}*` } // Wildcard search for partial matches
      );

      setSearchResults(results);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };
  const isActive = (path: string) => currentPath === path;

  return (
    <nav className="relative bg-black shadow dark:bg-gray-800 h-80 bg-cover bg-center bg-[url('/tomato.png')]">
      <div className="container flex items-center justify-between px-6 py-3 mx-auto">
        {/* Logo */}
        <h2 className="text-white text-3xl title-font">
          Food<span className="text-orange-500">tuck</span>
        </h2>

        {/* Navbar Links */}
        <div className="hidden lg:flex space-x-6 text-white">
          {[
            { label: "Home", path: "/homepage" },
            { label: "Menu", path: "/menu" },
            { label: "Blog", path: "/blog" },
            { label: "Pages", path: "/chectoutpage" },
          ].map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`transition-colors duration-300 transform rounded-lg ${
                isActive(link.path) ? "text-orange-500" : "hover:text-orange-500"
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* Dropdown menu for About */}
          <Link
            href="/about"
            className={`flex items-center space-x-1 transition-colors duration-300 transform rounded-lg ${
              isActive("/about") ? "text-orange-500" : "hover:text-orange-500"
            }`}
          >
            <span>About</span>
            <ChevronDownIcon className="w-5 h-5" />
          </Link>

          {[
            { label: "Shop", path: "/product" },
            { label: "Sign up", path: "/siginup" },
          ].map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`transition-colors duration-300 transform rounded-lg ${
                isActive(link.path) ? "text-orange-500" : "hover:text-orange-500"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Icons */}
        <div className="flex space-x-6 text-white">
        <div className="relative">
      {/* Search Icon */}
      <CiSearch
        className="w-6 h-6 cursor-pointer hover:text-orange-500"
        onClick={() => setSearchOpen(!searchOpen)}
      />

      {/* Search Input Box */}
    
    </div>
        <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
          <div className="relative">
            <Link href="/cart">
              <FiShoppingCart className="w-6 h-6 cursor-pointer hover:text-orange-500" />
              {cartCount > 0 && (
                <span className="absolute text-center top-0 right-0 block h-4 w-4 text-xs bg-orange-500 text-white rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="text-white dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none"
            aria-label="toggle menu"
          >
            {!isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden ${isOpen ? "block" : "hidden"} bg-black text-white px-6 py-4`}>
        {[
          { label: "Home", path: "/homepage" },
          { label: "Menu", path: "/menu" },
          { label: "Blog", path: "/blog" },
          { label: "Pages", path: "/chectoutpage" },
          { label: "About", path: "/about" },
          { label: "Shop", path: "/product" },
          { label: "Sign up", path: "/siginup" },
        ].map((link) => (
          <Link
            key={link.path}
            href={link.path}
            onClick={() => setIsOpen(false)}
            className="block py-2 hover:text-orange-500"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
export default Navbar;