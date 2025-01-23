"use client";

import Image from "next/image";
import Navbar from "../topnav/page";
import { motion } from "framer-motion"; // Import motion from framer-motion

const CardGrid = () => {
  const cards = [
    {
      image: "/1.png",
      title: "Chef",
      name: "Tahmina Rumi",
      description: "This is a brief description for card 1.",
    },
    {
      image: "/2.png",
      title: "Chef",
      name: "Jorina Begum",
      description: "This is a brief description for card 2.",
    },
    {
      image: "/3.png",
      title: "Chef",
      name: "M.Mohammad",
      description: "This is a brief description for card 3.",
    },
    {
      image: "/4.png",
      title: "Chef",
      name: "Munna Kathy",
      description: "This is a brief description for card 4.",
    },
    {
      image: "/5.png",
      title: "Chef",
      name: "Tahmina Rumi",
      description: "This is a brief description for card 5.",
    },
    {
      image: "/6.png",
      title: "Chef",
      name: "Bisnu devgon",
      description: "This is a brief description for card 6.",
    },
    {
      image: "/7.png",
      title: "Chef",
      name: "Motin Molladsf",
      description: "This is a brief description for card 7.",
    },
    {
      image: "/8.png",
      title: "Chef",
      name: "William Rumi",
      description: "This is a brief description for card 8.",
    },
    {
      image: "/9.png",
      title: "Chef",
      name: "Kets william roy",
      description: "This is a brief description for card 9.",
    },
    {
      image: "/10.png",
      title: "Chef",
      name: "Mahmud kholil",
      description: "This is a brief description for card 10.",
    },
    {
      image: "/11.png",
      title: "Chef",
      name: "Ataur Rahman1",
      description: "This is a brief description for card 11.",
    },
    {
      image: "/12.png",
      title: "Chef",
      name: "Monalisa holly",
      description: "This is a brief description for card 12.",
    },
  ];

  return (
    <div>
      <Navbar />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-6">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className=" bg-white text-black my-20 shadow-lg rounded-lg"
            style={{ width: "312px", height: "379.17px" }}
            initial={{ opacity: 0 }} // Initial opacity
            animate={{ opacity: 1 }} // Animate to full opacity
            transition={{ duration: 0.5 }} // Duration of the animation
          >
            <Image
              height={100}
              width={400}
              src={card.image}
              className="w-full h-full object-cover"
              alt="description"
            />
            <div className="bottom-4 left-1/2 transform text-center">
              <h6 className="font-bold text-xl text-black pt-4">{card.name}</h6>
            </div>
            <div className="mt-4 px-4">
              <p className="text-sm text-black text-center">{card.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CardGrid;
