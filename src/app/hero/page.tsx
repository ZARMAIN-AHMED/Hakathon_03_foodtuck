'use client';

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <div>
      <section className="body-font text-white h-screen bg-black flex justify-center items-center">
        <div className="container mx-auto flex px-5 py-20 flex-col-reverse md:flex-row items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:flex-grow md:w-1/2 md:ml-16 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
          >
            <motion.span
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
              className="text-orange-500 text-lg md:text-xl"
            >
              Its Quick & Amusing!
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7, ease: "easeOut" }}
              className="font-bold text-4xl sm:text-5xl lg:text-6xl mb-4"
            >
              <span className="text-orange-500">Th</span>e Art of Speed
              <br className="hidden lg:inline-block" />
              Food Quality
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.7, ease: "easeOut" }}
              className="mb-8 leading-relaxed text-base md:text-lg"
            >
              Lorem ipsum dolor sit amet consectetur adipiscing elit.
              <br />
              Varius sed pharetra dictum neque massa congue
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9, duration: 0.6, ease: "easeOut" }}
              className="flex justify-center md:justify-start"
            >
              <Link href={"/product"}>
                <button className="inline-flex text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded-2xl text-lg">
                  See Menu
                </button>
              </Link>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center md:w-1/2"
          >
            <Image
              className="object-center rounded"
              alt="hero"
              src="/Image.png"
              height={600}
              width={800}
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
