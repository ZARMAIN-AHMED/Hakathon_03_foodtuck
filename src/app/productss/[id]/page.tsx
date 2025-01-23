'use client';

import { FaHeart, FaYoutube, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { useDispatch } from 'react-redux';  
import { addToCart } from '@/app/redux/cartslice';  
import sanityClient from '@/sanity/lib/Sanityclient';
import Navbar from '@/app/topnav/page';
import { useEffect, useState } from 'react';
import { FiShoppingBag } from 'react-icons/fi';
import { motion } from 'framer-motion';
import StockButton from '@/app/stockbutton/page';
import Link from 'next/link';

type ProductDetail = {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;

};

async function fetchProductDetail(id: string): Promise<ProductDetail> {
  try {
    const product = await sanityClient.fetch(
      `*[_type == "product" && _id == $id][0]{
        _id,
        name,
        "image": image.asset->url,
        price,
        description,
        category
      }`,
      { id }
    );
    if (!product) throw new Error('Product not found');
    return {
      id: product._id,
      name: product.name,
      price: product.price,
      image: product.image,
      description: product.description,
      category: product.category,
    };
  } catch (error) {
    console.error('Error fetching product:', error);
    throw error;
  }
}

async function fetchRelatedProducts(category: string): Promise<ProductDetail[]> {
  try {
    const products = await sanityClient.fetch(
      `*[_type == "product" && category == $category && !(_id in path("drafts.**"))]{
        _id,
        name,
        "image": image.asset->url,
        price,
        description
      }`,
      { category }
    );
    return products.map((product: any) => ({
      id: product._id,
      name: product.name,
      price: product.price,
      image: product.image,
      description: product.description,
    }));
  } catch (error) {
    console.error('Error fetching related products:', error);
    return [];
  }
}

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const dispatch = useDispatch();  
  const [product, setProduct] = useState<ProductDetail | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<ProductDetail[]>([]);
  const [quantity, setQuantity] = useState(1);
  const [wishlist, setWishlist] = useState<ProductDetail[]>([]);

  useEffect(() => {
    async function getProduct() {
      try {
        const fetchedProduct = await fetchProductDetail(params.id);
        setProduct(fetchedProduct);

        // Fetch related products
        const related = await fetchRelatedProducts(fetchedProduct.category);
        setRelatedProducts(related);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    }
    getProduct();
  }, [params.id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg font-medium text-gray-700">Loading...</p>
      </div>
    );
  }

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity,
      })
    );
  };

  const handleAddToWishlist = () => {
    if (!wishlist.some((item) => item.id === product.id)) {
      setWishlist([...wishlist, product]);
    }
  };

  const handleRemoveFromWishlist = (id: string) => {
    setWishlist(wishlist.filter((item) => item.id !== id));
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Left Section - Images */}
          <div className="flex gap-4">
            <motion.div
              className="flex"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={product.image}
                alt={product.name}
                className="object-cover h-20 w-24 rounded-md"
              />
            </motion.div>

            <motion.div
              className="flex"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={product.image}
                height={200}
                width={600}
                alt={product.name}
                className="object-cover rounded-md"
              />
            </motion.div>
          </div>

          {/* Right Section - Product Details */}
          <div className="flex flex-col gap-6">
            <StockButton  />
            <motion.h1 className="text-3xl font-bold">{product.name}</motion.h1>
            <motion.p className="text-gray-600">{product.description}</motion.p>
            <motion.p className="text-2xl font-bold text-orange-600">${product.price}.00</motion.p>








 {/* Reviews Section */}
 <div className="flex items-center mt-4">
              <div className="flex gap-1 text-2xl text-yellow-500">
                {/* Star Ratings */}
                <span>⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-gray-600 ml-2 text-1xl">5 Reviews</p>
            
       
        </div>
            <div className="flex gap-4 text-1xl">
              <button
                onClick={handleAddToWishlist}
                className="flex items-center gap-4 text-gray-600"
              >
                <FaHeart />
                Add to Wishlist
              </button>
              
              <button className="text-gray-600">Compare</button>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center border rounded-md">
                <button
                  onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                  className="px-4 py-2 bg-gray-200 rounded-l"
                >
                  -
                </button>
                <span className="px-6">{quantity}</span>
                <button
                  onClick={() => setQuantity((prev) => prev + 1)}
                  className="px-4 py-2 bg-gray-200 rounded-r"
                >
                  +
                </button>
              </div>
              <motion.button
                onClick={handleAddToCart}
                className="flex items-center gap-2 px-6 py-3 bg-orange-600 text-white rounded hover:bg-orange-700"
              >
                <FiShoppingBag />
                Add to Cart
              </motion.button>
            </div>

            {/* Reviews Section */}
        <div className='flex gap-4'><button className="text-gray-600 flex items-center gap-2">
                <FaYoutube />
                YouTube
              </button>
              <button className="text-gray-600 flex items-center gap-2">
                <FaFacebook />
                Facebook
              </button>
              <button className="text-gray-600 flex items-center gap-2">
                <FaTwitter />
                Twitter
              </button>
              <button className="text-gray-600 flex items-center gap-2">
                <FaInstagram />
                Instagram
              </button></div>
          </div>
        </div>





        

        {/* Related Products Section */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-4">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {relatedProducts.map((related) => (
              <div
                key={related.id}
                className="border rounded-md p-4 hover:shadow-md transition"
              >
                <img
                  src={related.image}
                  alt={related.name}
                  className="h-40 w-full object-cover rounded-md mb-2"
                />
                <h3 className="text-lg font-semibold">{related.name}</h3>
                <p className="text-orange-600 font-bold">${related.price}</p>
                <Link href={`/productss/${related.id}`}>
                  <button className="mt-2 px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700">
                    See Detail
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Wishlist Section */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-4">Your Wishlist</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {wishlist.map((item) => (
              <div
                key={item.id}
                className="border rounded-md p-4 hover:shadow-md transition"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-40 w-full object-cover rounded-md mb-2"
                />
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
    </div>
  );
}
