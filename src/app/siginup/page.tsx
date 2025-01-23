'use client'

import Image from "next/image";
import React from "react";
import Navbar from "../topnav/page";
import Link from "next/link";

const Signup = () => {
  return (
    <div>
      <Navbar />
      <section className="bg-white dark:bg-gray-900 min-h-screen flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-center">
          <div className="flex flex-wrap w-full max-w-4xl">
            {/* Left Side: Additional Content */}
            <div className="w-full md:w-1/2 flex items-center justify-center bg-orange-100 dark:bg-gray-800 p-6 rounded-t-lg md:rounded-l-lg md:rounded-tr-none">
              <div className="text-center">
                <h2 className="text-3xl font-semibold text-gray-800 dark:text-white">
                  Welcome to Our Website!
                </h2>
                <p className="mt-4 text-gray-600 dark:text-gray-400">
                  Enter your credentials to access your account.
                </p>
                <Image
                  className="w-full max-w-sm mx-auto mt-6 object-center rounded"
                  alt="hero"
                  src="/Image.png"
                  height={600}
                  width={400}
                />
              </div>
            </div>

            {/* Right Side: Form */}
            <div className="w-full md:w-1/2 p-6 shadow-lg shadow-orange-200 bg-white dark:bg-gray-900 rounded-b-lg md:rounded-r-lg md:rounded-bl-none">
              <form className="w-full max-w-md mx-auto">
                <h1 className="mt-3 text-2xl font-semibold text-gray-800 capitalize sm:text-3xl dark:text-white text-center">
                  Sign Up
                </h1>

                <div className="relative flex items-center mt-8">
                  <span className="absolute">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 11c2.28 0 4-1.79 4-4s-1.72-4-4-4-4 1.79-4 4 1.72 4 4 4zM4 19c0-2.21 3.58-4 8-4s8 1.79 8 4"
                      />
                    </svg>
                  </span>

                  <input
                    type="text"
                    className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-orange-400 dark:focus:border-orange-300 focus:ring-orange-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Full Name"
                  />
                </div>

                <div className="relative flex items-center mt-4">
                  <span className="absolute">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </span>

                  <input
                    type="email"
                    className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-orange-400 dark:focus:border-orange-300 focus:ring-orange-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Email address"
                  />
                </div>

                <div className="relative flex items-center mt-4">
                  <span className="absolute">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </span>

                  <input
                    type="password"
                    className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-orange-400 dark:focus:border-orange-300 focus:ring-orange-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Password"
                  />
                </div>

                <div className="flex items-center mt-4">
                  <input
                    type="checkbox"
                    id="remember"
                    className="w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-400"
                  />
                  <label
                    htmlFor="remember"
                    className="ml-2 text-sm text-gray-600 dark:text-gray-400"
                  >
                    Remember me
                  </label>
                </div>

                <div className="mt-6">
                  <Link href="/homepage">
                    <button className="w-full mb-5 px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-orange-500 rounded-lg hover:bg-orange-400 focus:outline-none focus:ring focus:ring-orange-300 focus:ring-opacity-50">
                      Sign up
                    </button>
                  </Link>
                  <Link
                    href="#"
                    className="text-sm text-orange-500 hover:underline dark:text-orange-400 block text-center"
                  >
                    Forget Password
                  </Link>
                  <p className="mt-4 text-center text-gray-600 dark:text-gray-400">
                    OR
                  </p>

                  <Link
                    href="#"
                    className="flex items-center justify-center px-6 py-3 mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    <Image
                      className="object-center rounded"
                      alt="Google sign-in"
                      src="/Icon-Google.png"
                      height={10}
                      width={20}
                    />
                    <span className="mx-2">Sign up with Google</span>
                  </Link>

                  <Link
                    href="#"
                    className="flex items-center justify-center px-6 py-3 mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    <Image
                      className="object-center rounded"
                      alt="Apple sign-in"
                      src="/Apple.png"
                      height={10}
                      width={20}
                    />
                    <span className="mx-2">Sign up with Apple</span>
                  </Link>     <div className="mt-6 text-center">
                  <Link
                      href="/sigin"
                      className="text-sm text-orange-500 hover:underline dark:text-orange-400"
                    >
                      Do you have account? Sign in
                    </Link>
             </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signup;

