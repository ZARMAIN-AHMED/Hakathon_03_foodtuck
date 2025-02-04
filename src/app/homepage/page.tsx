'use client'
import React from "react";
import Hero from "../hero/page";

import Testimonial from "../cheftestimnial/page";
import Navbar from "../navbar/page";


function Home() {
  return (
    <div className="bg-black ">
      <Navbar />
      <Hero />
      <Testimonial />
  
    </div>
  );
}

export default Home;
