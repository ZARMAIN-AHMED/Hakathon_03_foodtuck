'use client';
import Image from "next/image";
import { PiQuotes } from "react-icons/pi";
import { motion } from "framer-motion";
import Food from "../food/page";
import Link from "next/link";

const Testimonial = () => {
  const cards = [
    { image: "/Chef Card.png" },
    { image: "/Card 2.png" },
    { image: "/Card 3.png" },
    { image: "/Card 4.png" },
  ];

  return (
    <div className="bg-black">
      <Food />

      <div className="w-full flex flex-col items-center mt-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image
            src={"/Our Menu.png"}
            className="object-cover rounded-md"
            alt="Our Menu"
            height={900}
            width={1300}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="flex justify-center mt-6"
        >
          <Link href="/product">
            <button className="my-20 flex justify-center sm:font-medium bg-black items-center text-center w-40 text-white sm:py-2 rounded-3xl border-2 border-orange-500 hover:bg-orange-500 hover:text-black transition">
              See More
            </button>
          </Link>
        </motion.div>
      </div>

      <div className="bg-black">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-bold pb-10 text-center text-white"
        >
          <span className="text-orange-500">Me</span>et Our Chefs
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, staggerChildren: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 sm:px-8 lg:px-12"
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <Image
                src={card.image}
                className="w-full  sm:h-68 lg:h-full object-cover"
                alt="Chef Card"
                height={900}
                width={400}
              />
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="flex justify-center mt-6"
        >
          <Link href="/ourchef">
            <button className="my-20 flex justify-center bg-black items-center text-center w-40 text-white py-2 rounded-3xl border-2 border-orange-500 hover:bg-orange-500 hover:text-black transition">
              See More
            </button>
          </Link>
        </motion.div>

        <section className="bg-black py-16 px-4 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center"
          >
            <span className="text-orange-500 uppercase text-sm tracking-wide">
              Testimonials
            </span>
            <h1 className="text-2xl md:text-3xl font-bold text-white capitalize mt-2">
              What our clients are saying
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col items-center mt-16"
          >
            <div className="w-full max-w-xl p-6 rounded-2xl bg-white shadow-lg">
              <div className="flex flex-col items-center">
                <Image
                  className="object-cover rounded-full w-20 h-20"
                  src="/Ellipse 6.png"
                  alt="Client"
                  height={100}
                  width={100}
                />
                <div className="mt-2 text-orange-500">
                  <PiQuotes className="w-10 h-10 md:w-12 md:h-12" />
                </div>
              </div>

              <p className="mt-6 text-sm md:text-base leading-relaxed text-gray-700 text-center">
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
                diam pellentesque bibendum non dui volutpat fringilla bibendum.
                Urna elit augue urna, vitae feugiat pretium donec id elementum.
                Ultrices mattis sed vitae mus risus. Lacus nisi et ac dapibus
                sit eu velit in consequat.
              </p>

              <div className="flex flex-col items-center mt-6">
                <div className="flex">
                  <span className="text-yellow-400">⭐</span>
                  <span className="text-yellow-400">⭐</span>
                  <span className="text-yellow-400">⭐</span>
                  <span className="text-yellow-400">⭐</span>
                  <span className="text-gray-400">⭐</span>
                </div>
                <h3 className="mt-2 text-lg font-semibold">Mia Brown</h3>
              </div>
            </div>
          </motion.div>
        </section>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image
            className="object-cover w-full mt-10"
            src="/Restraind creative Process.png"
            alt="Creative Process"
            height={100}
            width={1900}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonial;
