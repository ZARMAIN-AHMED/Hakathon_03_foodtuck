'use client'

import Image from 'next/image';
import React, { useState } from 'react';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
}

const teamData: TeamMember[] = [
  {
    id: 1,
    name: 'Mark Henry',
    role: 'CEO',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada dui neque, non vulputate nisi.',
    image: '/Mark Henry.png',
  },
  {
    id: 2,
    name: 'Jane Doe',
    role: 'CTO',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada dui neque, non vulputate nisi.',
    image: '/Mark Henry (1).png',
  },
  {
    id: 3,
    name: 'John Smith',
    role: 'Designer',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada dui neque, non vulputate nisi.',
    image: '/Mark Henry (2).png',
  },
  {
    id: 4,
    name: 'Lisa Brown',
    role: 'Developer',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada dui neque, non vulputate nisi.',
    image: '/Mark Henry (3).png',
  }
];

export default function Team() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const handleCardClick = (member: TeamMember) => {
    setSelectedMember(member);
  };

  return (
    <div className="w-full lg:h-auto bg-orange-400 text-white flex flex-col items-center py-10">
      <div className="text-center px-4">
        <h1 className="text-3xl font-bold lg:pt-6">Meet Our Team</h1>
        <p className="mt-4 text-sm sm:text-base">
          Our team is comprised of talented individuals who are dedicated to delivering the best results.
        </p>
      </div>

      {/* Team Member Cards */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
        {teamData.map((member) => (
          <div
            key={member.id}
            className="relative group cursor-pointer"
            onClick={() => handleCardClick(member)}
          >
            <Image
              src={member.image}
              className="object-cover rounded-md"
              alt={member.name}
              height={200}
              width={300}
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-75 transition-opacity duration-300 flex justify-center items-center text-center opacity-0 group-hover:opacity-100">
              <div className="text-white">
                <h3 className="font-semibold">{member.name}</h3>
                <p>{member.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Team Member Details Modal */}
      {selectedMember && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg w-80 md:w-96 max-w-full">
            <h2 className="text-2xl font-bold mb-4">{selectedMember.name}</h2>
            <p className="text-lg text-gray-800 mb-4">{selectedMember.role}</p>
            <p className="text-gray-600">{selectedMember.bio}</p>
            <div className="mt-4 text-center">
              <button
                className="text-white bg-red-600 py-2 px-4 rounded"
                onClick={() => setSelectedMember(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
