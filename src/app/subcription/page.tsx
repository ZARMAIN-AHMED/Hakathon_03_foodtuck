'use client';

import React, { useState } from 'react';

import sanityClient from '@/sanity/lib/Sanityclient';

export default function SubscribeForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  // Sanity client configuration
  

  const handleSubscribe = async () => {
    if (!email || !email.includes('@')) {
      setStatus('Please enter a valid email.');
      return;
    }

    try {
      // Save email to Sanity
      await sanityClient.create({
        _type: 'subscription',
        email: email,
      });

      setStatus('Subscription successful!');
      setEmail('');
    } catch (error) {
      console.error('Error subscribing:', error);
      setStatus('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="bg-black p-6 md:p-12 flex flex-col items-center justify-center text-white">
      <h2 className="text-2xl md:text-4xl font-bold mb-4">
        Need Support? <span className="text-orange-500">Subscribe Now</span>
      </h2>
      <p className="text-sm md:text-base leading-relaxed mb-6">
        Enter your email to receive the latest updates and offers.
      </p>
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
      {status && <p className="mt-4 text-sm">{status}</p>}
    </div>
  );
}
