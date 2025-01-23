'use client';

import React, { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import Link from "next/link";
import Navbar from "../topnav/page";
import sanityClient from "@/sanity/lib/Sanityclient";
import { motion } from "framer-motion"; // Import motion from Framer Motion


type ProductDetail = {
  _id: any;
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
};



const ProductListingComponent = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [sortOption, setSortOption] = useState<string>('Popularity');
  const [itemsPerPage, setItemsPerPage] = useState<number>(9);
  const [currentPage, setCurrentPage] = useState<number>(1); // Pagination state
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [tags, setTags] = useState<string[]>([]); // For tags filter
  const [latestProducts, setLatestProducts] = useState<any[]>([]);
const [wishlist, setWishlist] = useState<ProductDetail[]>([]);


  // Fetch products from Sanity
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const data = await sanityClient.fetch(
          `*[_type == "product"]{
            _id,
            name,
            "image": image.asset->url,
            price,
            originalPrice,
            category,
            createdAt,
            tags
          }`
        );
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Handle search query change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);

    const filtered = products.filter(product => {
      const productName = product.name || ""; // Fallback for missing name
      const searchQuery = query || "";        // Fallback for missing query
      return productName.toLowerCase().includes(searchQuery.toLowerCase());
    });

    setFilteredProducts(filtered);
    setCurrentPage(1); // Reset to first page on search
  };

  // Handle category filter change
  const handleCategoryChange = (category: string) => {
    setSelectedCategories(prevCategories => {
      const newCategories = prevCategories.includes(category)
        ? prevCategories.filter(c => c !== category)
        : [...prevCategories, category];

      const filtered = products.filter(product =>
        newCategories.length > 0 ? newCategories.includes(product.category) : true
      );
      setFilteredProducts(filtered);
      setCurrentPage(1); // Reset to first page on category change
      return newCategories;
    });
  };

  // Handle sorting
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSortOption(value);

    let sortedProducts = [...filteredProducts];
    if (value === "Price: Low to High") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (value === "Price: High to Low") {
      sortedProducts.sort((a, b) => b.price - a.price);
    }
    setFilteredProducts(sortedProducts);
    setCurrentPage(1); // Reset to first page on sort change
  };

  // Handle items per page
  const handleItemsPerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setItemsPerPage(Number(e.target.value));
    setCurrentPage(1); // Reset to first page on items-per-page change
  };

  // Handle price range change
  const handlePriceRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPriceRange = [...priceRange];
    newPriceRange[e.target.name === "min" ? 0 : 1] = parseInt(e.target.value);
    setPriceRange(newPriceRange as [number, number]);

    // Filter products based on price range
    const filtered = products.filter(product => {
      return product.price >= newPriceRange[0] && product.price <= newPriceRange[1];
    });
    setFilteredProducts(filtered);
    setCurrentPage(1); // Reset to first page on price change
  };

  // Handle tag filter change
  const handleTagChange = (tag: string) => {
    setTags(prevTags => {
      const newTags = prevTags.includes(tag)
        ? prevTags.filter(t => t !== tag)
        : [...prevTags, tag];

      const filtered = products.filter(product =>
        newTags.length > 0 ? product.tags.some((t: string) => newTags.includes(t)) : true
      );
      setFilteredProducts(filtered);
      setCurrentPage(1); // Reset to first page on tag change
      return newTags;
    });
  };

  // Handle latest products display
  const handleLatestProducts = () => {
    const latest = products.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()).slice(0, 5);
    setLatestProducts(latest);
  };

  // Calculate pagination
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Handle page navigation
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };
  const handleAddToWishlist = (product?: any) => {
    // Directly add the product to the wishlist without checking for duplicates
    setWishlist([...wishlist, product]);
  };
  
  const handleRemoveFromWishlist = (id: string) => {
    // Remove only one instance of the product with the given ID
    const index = wishlist.findIndex((item) => item.id === id);
    if (index !== -1) {
      const updatedWishlist = [...wishlist];
      updatedWishlist.splice(index, 1); // Remove one instance of the product
      setWishlist(updatedWishlist);
    }
  };
  

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4 flex flex-col md:flex-row gap-8 mt-20">
        <div className="w-full md:w-3/4">
          <div className="flex items-center gap-4 mb-8">
            <label className="text-lg font-semibold">Sort By:</label>
            <select
              value={sortOption}
              onChange={handleSortChange}
              className="p-2 border rounded-md focus:ring-2 focus:ring-orange-500"
            >
              <option>Popularity</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>

            <div className="flex flex-col md:flex-row md:items-center gap-2">
  <label className="text-lg font-semibold">Show:</label>
  <select
    value={itemsPerPage}
    onChange={handleItemsPerPageChange}
    className="p-2 border rounded-md focus:ring-2 focus:ring-orange-500 md:w-auto w-full"
  >
    <option>5</option>
    <option>9</option>
    <option>15</option>
  </select>
</div>

          </div>

          {loading ? (
            <div className="text-center text-gray-500">Loading products...</div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {paginatedProducts.map((product) => (
               
                  <motion.div
                    className="flex flex-col items-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  > <Link href={`/productss/${product._id}`} key={product._id}>
                    <img
                      src={product.image}
                      alt={product.name}
                      width={400}
                      height={200}
                      className="rounded-md object-cover"
                    />
                    <p className="font-semibold mt-2">{product.name}</p>
                    <div className="flex gap-2 items-center">
                      <span className="text-orange-500 font-bold">${product.price}</span>
                      {product.originalPrice && (
                        <span className="line-through text-gray-400">${product.originalPrice}</span>
                      )}
                    </div></Link>
                    <button
                      onClick={() => handleAddToWishlist(product)}
                      className="mt-2 px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
                    >
                      Add to Wishlist
                    </button>
                  </motion.div>
              
                
              ))}
            </div>
          )}

          {/* Pagination Controls */}
          <div className="flex justify-center mt-8 gap-4">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded-md border ${currentPage === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-orange-500 text-white"}`}
            >
              Previous
            </button>
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={`px-4 py-2 rounded-md border ${currentPage === index + 1 ? "bg-orange-500 text-white" : "bg-white"}`}
              >
                {index + 1}
              </button>
            ))}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded-md border ${currentPage === totalPages ? "bg-gray-300 cursor-not-allowed" : "bg-orange-500 text-white"}`}
            >
              Next
            </button>
          </div>
               {/* Wishlist Section */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-4">Your Wishlist</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {wishlist.map((item) => (
              <div
                key={item.id}
                className="border rounded-md p-4 hover:shadow-md transition"
              > <Link href={`/productss/${item._id}`} key={item._id}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-40 w-full object-cover rounded-md mb-2"
                /></Link>
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-orange-600 font-bold">${item.price}</p>
                <button
                  onClick={() => handleRemoveFromWishlist(item.id)}
                  className="mt-2 px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
                >
                  Remove from Wishlist
                </button>
              </div>
            ))}
          </div>
        </div>
        </div>
        

        <div className="w-full md:w-1/4 border p-4 rounded-md">
          <div className="flex items-center max-w-md mb-4">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="flex-grow p-2 rounded-l-lg font-medium text-black shadow-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-600"
            />
            <button className="bg-orange-500 text-white px-6 py-3 rounded-r-lg hover:bg-orange-600 shadow-md">
              <CiSearch />
            </button>
          </div>

          <h2 className="text-xl font-bold mb-4">Category</h2>
          <div className="flex flex-col gap-2">
            {["Sandwiches", "Burger", "Chicken Chup", "Drink", "Pizza", "Cheese Butter", "Chocolate Muffin", "Fresh Lime"].map(
              (category, index) => (
                <label key={index} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(category)}
                    onChange={() => handleCategoryChange(category)}
                    className="h-4 w-4"
                  />
                  <span>{category}</span>
                </label>
              )
            )}
          </div>

          {/* Price Filter */}
          <h2 className="text-xl font-bold mt-6 mb-4">Filter by Price</h2>
          <div className="flex flex-col gap-2">
            <label>Min: ${priceRange[0]}</label>
            <input
              type="range"
              name="min"
              min="0"
              max="1000"
              step="10"
              value={priceRange[0]}
              onChange={handlePriceRangeChange}
              className="w-full"
            />
            <label>Max: ${priceRange[1]}</label>
            <input
              type="range"
              name="max"
              min="0"
              max="1000"
              step="10"
              value={priceRange[1]}
              onChange={handlePriceRangeChange}
              className="w-full"
            />
          </div>

          {/* Latest Products */}
          <h2 className="text-xl font-bold mt-6 mb-4">Latest Products</h2>
          <button
            onClick={handleLatestProducts}
            className="bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600"
          >
            Show Latest Products
          </button>
          <ul className="mt-4">
            {latestProducts.map((product) => (
              <li key={product._id} className="mb-2">
                {product.name}
              </li>
            ))}
          </ul>

          {/* Tags */}
          <h2 className="text-xl font-bold mt-6 mb-4">Tags</h2>
          <div className="flex flex-wrap gap-2">
            {["popular", "sweet", "healthy", "yummy","sell","fast food","cheesey"].map((tag, index) => (
              <button
                key={index}
                onClick={() => handleTagChange(tag)}
                className={`px-4 py-2 rounded-md ${
                  tags.includes(tag)
                    ? "bg-orange-500 text-white"
                    : "bg-gray-200 text-black"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ProductListingComponent;
