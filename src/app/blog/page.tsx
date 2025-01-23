'use client'


import Image from 'next/image';
import { CiSearch } from 'react-icons/ci';
import Navbar from '../topnav/page';


const BlogList = () => {
  const blogPosts = [
    {
      id: 1,
      title: '10 Reasons To Do A Digital Detox Challenge',
      description:
        'At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat',
      image: '/blog1.png', // Replace with actual image paths
    },
    {
      id: 2,
      title: 'Traditional Soft Pretzels with Sweet Beer Cheese',
      description:
        'At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat',
      image: '/blog2.png',
    },
    {
      id: 3,
      title: 'The Ultimate Hangover Burger: Egg in a Hole Burger',
      description:
        'At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat',
      image: '/blog3.png',
    },
    {
      id: 4,
      title: 'My Favorite Easy Black Pizza Toast Recipe',
      description:
        'At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat',
      image: '/blog4.png',
    },
  ];

  return (
    <div>
      <Navbar />

      <div className="flex flex-col md:flex-row gap-8 p-4">
        {/* Left Side */}
        <div className="flex flex-col gap-8 w-full md:w-2/3">
          {blogPosts.map((blog) => (
            <div
              key={blog.id}
              className="flex flex-col gap-4 border border-gray-300 p-4 rounded-lg shadow-md"
            >
              <Image
                src={blog.image}
                alt={blog.title}
                width={800}
                height={400}
                className="rounded-md"
              />
              <h2 className="text-2xl font-semibold">{blog.title}</h2>
              <p className="text-gray-600">{blog.description}</p>
              <button className="w-40 border border-orange-500 text-orange-500 bg-white px-4 py-2 rounded-md hover:bg-orange-100">
                Read More
              </button>
            </div>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex flex-col w-full md:w-[424px] gap-8">
          {/* Search Input */}
          <div className="flex justify-center md:justify-end">
            <div className="flex items-center w-full max-w-md">
              <input
                type="text"
                placeholder="Search your Keywo.."
                className="flex-grow p-2 text-gray-500 w-full border bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-600"
              />
              <button className="bg-orange-500 text-white px-6 py-3 hover:bg-orange-600">
                <CiSearch />
              </button>
            </div>
          </div>

          {/* Sidebar Images */}
          <div className="flex justify-center">
            <Image
              src="/Side ber.png"
              alt="sidebar"
              width={400}
              height={300}
              className="rounded-md"
            />
          </div>
        </div>
      </div>

    </div>
  );
};

export default BlogList;
