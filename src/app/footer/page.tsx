'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

import { client } from '@/sanity/lib/client';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubscribe = async () => {
    if (!email || !email.includes('@')) {
      setStatus('Please enter a valid email.');
      return;
    }

    try {
      console.log('Attempting to subscribe with email:', email);

      const response = await client.create({
        _type: 'subscription',
        email: email,
      });

      console.log('Subscription successful:', response);

      setStatus('Subscription successful!');
      setEmail('');
    } catch (error) {
      console.error('Error subscribing:', error || error);
      setStatus('An error occurred. Please try again later.');
    }
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-between bg-black p-6 md:p-12 gap-6">
        {/* Left Side: Heading and Paragraph */}
        <div className="flex flex-col md:w-1/2 text-center md:text-left">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
            <span className="text-orange-500">St</span>ill You Need Our Support?
          </h2>
          <p className="text-white text-sm md:text-base leading-relaxed">
            Dont wait, make a smart & logical quote here. Its pretty easy.
          </p>
        </div>

        {/* Right Side: Input and Button */}
        <div className="flex md:w-1/2 justify-center md:justify-end bg-black">
          <div className="flex items-center w-full max-w-md">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow p-3 rounded-l-lg bg-orange-500 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-orange-600"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              className="bg-white text-orange-500 px-6 py-3 rounded-r-lg hover:bg-orange-900"
              onClick={handleSubscribe}
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
      {status && (
        <p className="text-center mt-4 text-black">{status}</p>
      )}

      <footer className="text-white body-font bg-black">
        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <Link
              className="flex title-font font-medium items-center md:justify-start justify-center"
              href="#"
            >
              <span className="ml-3 text-xl">About Us</span>
            </Link>
            <p className="mt-2 text-sm">
              Corporate clients and leisure travelers have been relying on
              Groundlink for dependable, safe, and professional chauffeured car
              service in major cities across the world.
            </p>
            <br />
            <br />
            <div className="inline-flex">
              <Image
                src={'/Watch.png'}
                alt="watch"
                height={100}
                width={100}
              />
              <h1 className="inline-flex pl-5">
                Opening Hours: Mon - Sat (8:00 - 6:00), Sunday - Closed
              </h1>
            </div>
          </div>

          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium tracking-widest text-sm mb-3">
                Useful Links
              </h2>
              <nav className="list-none mb-10">
                <li><Link href="#">About</Link></li>
                <li><Link href="#">News</Link></li>
                <li><Link href="#">Partners</Link></li>
                <li><Link href="#">Team</Link></li>
                <li><Link href="#">Menu</Link></li>
                <li><Link href="#">Contact</Link></li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium tracking-widest text-sm mb-3">
                Help
              </h2>
              <nav className="list-none mb-10">
                <li><Link href="/question">FAQ</Link></li>
                <li><Link href="#">Terms & Conditions</Link></li>
                <li><Link href="#">Reporting</Link></li>
                <li><Link href="#">Documentation</Link></li>
                <li><Link href="#">Support Policy</Link></li>
                <li><Link href="#">Privacy</Link></li>
              </nav>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

