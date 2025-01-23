'use client'

import Image from "next/image";
import React, { useState } from "react";
import { PiQuotes } from "react-icons/pi";
import Navbar from "../topnav/page";
import Team from "../team/page";

function About() {
  // State for managing testimonials
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const testimonials = [
    {
      name: "Mia Brown",
      image: "/Ellipse 6.png",
      testimonial: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna elit augue urna vitae feugiat pretium donec id elementum.",
      rating: 4,
    },
    {
      name: "John Doe",
      image: "/Ellipse 6.png",
      testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna elit augue urna vitae feugiat pretium donec id elementum.",
      rating: 5,
    },
    {
      name: "Jane Smith",
      image: "/Ellipse 6.png",
      testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna elit augue urna vitae feugiat pretium donec id elementum.",
      rating: 3,
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div>
      <Navbar />
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-col-reverse md:flex-row py-12 md:py-24 items-center">
          <div className="w-full md:w-1/2 mb-10 md:mb-0 flex justify-center">
            <Image
              className="object-cover object-center rounded"
              alt="hero"
              src="/triangle.png"
              height={400}
              width={600}
            />
          </div>
          <div className="md:w-1/2 flex flex-col md:items-start items-center text-center md:text-left">
            <span className="text-yellow-500 mb-4">About us__</span>
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-black">
              Food is an important
              <br className="hidden lg:inline-block" />
              part of a balanced Diet
            </h1>
            <p className="mb-8 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat fringilla bibendum.
              Urna elit augue urna vitae feugiat pretium donec id elementum.
              Ultrices mattis vitae mus risus. Lacus nisi et ac dapibus sit eu
              velit in consequat.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button className="inline-flex text-white bg-yellow-500 border-0 py-3 px-7 focus:outline-none hover:bg-orange-600 rounded text-lg">
                Show More
              </button>
              <Image
                src={"/Video Button.png"}
                alt="button"
                height={50}
                width={150}
                className="inline-flex"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-16 mx-auto text-center">
          <div className="max-w-lg mx-auto">
            <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">
              Why Choose Us
            </h1>
            <p className="mt-6 text-gray-500 dark:text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat fringilla bibendum.
            </p>
          </div>

          <div className="flex justify-center mt-10">
            <Image
              className="object-cover rounded-xl w-full max-w-[90%] md:max-w-[80%] lg:max-w-[70%]"
              src="/food.png"
              alt="Why Choose Us"
              width={800}
              height={400}
            />
          </div>
          <br /><br /><br />
          <Image
            className="object-cover rounded-xl sm:w-full"
            src="/Contanyt.png"
            alt="loading.."
            width={1600}
            height={800}
          />
        </div>
      </section>

      <Team />

      <br /><br /><br /><br />
      <br /><br /><br /><br />

      <section className="bg-white">
        <div className="container lg:px-6 lg:py-10 lg:mx-auto">
          <span className="text-orange-500 block text-center md:text-left">
            Testimonials
          </span>
          <h1 className="text-2xl font-bold text-gray-800 capitalize lg:text-3xl dark:text-white text-center md:text-left">
            What our clients are saying
          </h1>

          <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-8 lg:mt-16">
            {/* Left arrow button for larger screens */}
            <button
              title="left arrow"
              className="hidden md:block p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100"
              onClick={prevTestimonial}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Testimonial Card */}
            <div className="shadow-xl shadow-gray-500 rounded-3xl w-full md:w-1/3">
              <div className="text-center flex-1 p-6">
                <div className="flex flex-col items-center">
                  <Image
                    className="object-cover rounded-full w-14 h-14"
                    src={testimonials[currentTestimonial].image}
                    alt="Client"
                    height={100}
                    width={100}
                  />
                  <div className="mt-2 text-orange-500">
                    <PiQuotes className="w-10 h-10" />
                  </div>
                </div>
                <p className="mt-6 text-gray-500 px-4 md:px-8">
                  {testimonials[currentTestimonial].testimonial}
                </p>
                <div className="flex flex-col items-center sm:mt-6">
                  <div className="flex">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, index) => (
                      <span key={index} className="text-yellow-400">⭐</span>
                    ))}
                    {[...Array(5 - testimonials[currentTestimonial].rating)].map((_, index) => (
                      <span key={index} className="text-gray-400">⭐</span>
                    ))}
                  </div>
                  <h3 className="sm:mt-2 text-lg font-semibold text-gray-800 dark:text-white">
                    {testimonials[currentTestimonial].name}
                  </h3>
                </div>
              </div>
            </div>

            {/* Right arrow button for larger screens */}
            <button
              title="right arrow"
              className="hidden md:block p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100"
              onClick={nextTestimonial}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>

      <div>
        <h1 className="text-4xl text-center font-bold">Our Food Menu</h1>
        <br />
        <p className="text-xl text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
          Varius sed pharetra dictum neque massa congue
        </p>
        <br />
        <nav className="flex justify-center space-x-8 bg-white py-4 shadow-md">
          <a href="#breakfast" className="relative text-gray-800 hover:text-orange-500 hover:border-orange-500 border-b">
            Breakfast
            <span className="absolute bottom-0 left-0 w-full h-1 bg-orange-500 scale-x-0 transition-transform duration-300 origin-left hover:scale-x-100" />
          </a>
          <a href="#lunch" className="relative text-gray-800 hover:text-orange-500 hover:border-orange-500 border-b">
            Lunch
            <span className="absolute bottom-0 left-0 w-full h-1 bg-orange-500 scale-x-0 transition-transform duration-300 origin-left hover:scale-x-100" />
          </a>
          <a href="#dinner" className="relative text-gray-800 hover:text-orange-500 hover:border-orange-500 border-b">
            Dinner
            <span className="absolute bottom-0 left-0 w-full h-1 bg-orange-500 scale-x-0 transition-transform duration-300 origin-left hover:scale-x-100" />
          </a>
          <a href="#dessert" className="relative text-gray-800 hover:text-orange-500 hover:border-orange-500 border-b">
            Dessert
            <span className="absolute bottom-0 left-0 w-full h-1 bg-orange-500 scale-x-0 transition-transform duration-300 origin-left hover:scale-x-100" />
          </a>
          <a href="#drink" className="relative text-gray-800 hover:text-orange-500 hover:border-orange-500 border-b">
            Drink
            <span className="absolute bottom-0 left-0 w-full h-1 bg-orange-500 scale-x-0 transition-transform duration-300 origin-left hover:scale-x-100" />
          </a>
          <a href="#snack" className="relative text-gray-800 hover:text-orange-500 hover:border-orange-500 border-b">
            Snack
            <span className="absolute bottom-0 left-0 w-full h-1 bg-orange-500 scale-x-0 transition-transform duration-300 origin-left hover:scale-x-100" />
          </a>
        </nav>
        <div className="flex flex-wrap justify-between">
          {/* Menu Items */}
          {['Alder Grilled Chinook Salmon', 'Alder Grilled Chinook Salmon',
           'Alder Grilled Chinook Salmon','Alder Grilled Chinook Salmon',
           'Alder Grilled Chinook Salmon','Alder Grilled Chinook Salmon',
'Alder Grilled Chinook Salmon','Alder Grilled Chinook Salmon','Alder Grilled Chinook Salmon'
          ].map((item, index) => (
            <div key={index} className="w-full lg:w-1/2 xl:w-1/3 p-4">
              <div className="border-b pb-4">
                <span className="text-xl md:text-3xl font-bold">{item}</span>
                <p className="mt-2 text-sm md:text-base">Toasted French bread topped with romano, cheddar</p>
                <p className="text-sm md:text-base inline-flex pr-96">560 CAL</p>
                <div className="text-right mt-2 inline-flex">
                  <span className="text-[#FF9F0D] font-bold text-lg md:text-xl">$12.99</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
