"use client";
import Image from 'next/image';


export default function AboutHero() {
  return (
    <div className="relative h-[60vh] md:h-[70vh] w-full">
      {/* Background Image */}
      <Image src="/about.webp" alt="About Us Background" layout="fill" objectFit="cover" quality={100} className="z-0" />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* Text Content */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
        <div className="text-sm md:text-base">
          <span className="text-gray-300">Home</span> <span className="mx-2">›</span> <span>About Us</span>
        </div>
      </div>
    </div>
  );
}