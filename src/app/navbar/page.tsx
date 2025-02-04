"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { FiUser, FiShoppingCart } from "react-icons/fi";
import { ChevronDownIcon, MenuIcon, XIcon } from "lucide-react";
import client from "../../sanity/lib/Sanityclient"; // Import Sanity client
import { SignedOut, SignInButton, SignedIn, UserButton } from "@clerk/nextjs";

export default function Navbar() {
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Update currentPath on the client side only
    if (typeof window !== "undefined") {
      setCurrentPath(window.location.pathname);
    }
    setMounted(true);
  }, []);

  if (!mounted) return null; 

  const handleSearch = async () => {
    if (!searchValue.trim()) return;

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
    }
  };

  const isActive = (path: string) => currentPath === path;

  return (
    <nav className="relative bg-black shadow dark:bg-gray-800 bg-cover bg-center">
      <div className="container flex items-center justify-between px-6 py-3 mx-auto">
        {/* Logo */}
        <h2 className="text-white text-3xl font-bold">
          Food<span className="text-orange-500">tuck</span>
        </h2>

        {/* Hamburger Menu for Mobile */}
        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
        </button>

        {/* Desktop Navbar Links */}
        <div
          className={`lg:flex flex-col pt-28 lg:flex-row lg:space-x-6 absolute lg:relative top-16 lg:top-0 left-0 w-full lg:w-auto bg-black lg:bg-transparent p-6 lg:p-0 ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          {[{ label: "Home", path: "/homepage" }, { label: "Menu", path: "/menu" }, { label: "Blog", path: "/blog" }, { label: "Pages", path: "/checkoutpage" }].map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`block lg:inline-block transition-colors duration-300 transform rounded-lg ${
                isActive(link.path) ? "text-orange-500" : "text-white hover:text-orange-500"
              }`}
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/about"
            className={`lg:inline-block flex items-center space-x-1 transition-colors duration-300 transform rounded-lg ${
              isActive("/about") ? "text-orange-500" : "text-white hover:text-orange-500"
            }`}
          >
            <span className="flex">
              About
              <ChevronDownIcon className="w-5 h-5" />
            </span>
          </Link>

          {[{ label: "Shop", path: "/product" }, { label: "Sign up", path: "/siginup" }].map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`block lg:inline-block transition-colors duration-300 transform rounded-lg ${
                isActive(link.path) ? "text-orange-500" : "text-white hover:text-orange-500"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative hidden lg:block">
          <input
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            className="py-2 pl-5 pr-12 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 border border-orange-500 bg-black text-white rounded-3xl placeholder:text-gray-400"
            placeholder="Search..."
          />
          <CiSearch
            onClick={handleSearch}
            className="absolute top-1/2 right-3 transform -translate-y-1/2 w-5 h-5 text-white cursor-pointer"
          />
        </div>

        {/* Icons */}
        <div className="flex space-x-6 text-white">
        <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>

          {/* Shopping Cart */}
          <Link href="/cart" className="relative">
            <FiShoppingCart className="w-6 h-6 cursor-pointer hover:text-orange-500" />
            <span className="absolute -top-2 -right-2 text-center block h-4 w-4 text-xs bg-orange-500 text-white rounded-full">
              0
            </span>
          </Link>
        </div>
      </div>

      {/* Search Results */}
      {searchResults.length > 0 && (
        <div className="absolute top-16 left-0 w-full bg-white rounded-lg shadow-lg z-50 text-black">
          {searchResults.map((product) => (
            <Link
              href={`/productss/${product._id}`}
              key={product._id}
              className="block px-4 py-2 hover:bg-gray-200"
            >
              <div className="flex items-center space-x-4">
                <img src={product.image} alt={product.name} className="w-12 h-12 rounded" />
                <div>
                  <h3 className="font-bold">{product.name}</h3>
                  <p className="text-sm text-gray-600">${product.price}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
