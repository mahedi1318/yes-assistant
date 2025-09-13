"use client";
import Image from "next/image";

export default function ServicesHero() {
  return (
    <section className="relative w-full h-[300px] md:h-[400px] flex items-center justify-center">    
      <Image src="/service.webp" alt="Services" fill className="object-cover" priority />
      <div className="absolute inset-0 bg-black/50"></div>     
      <div className="relative text-center text-white z-10">
        <h1 className="text-3xl md:text-5xl font-bold">Services</h1>
        <p className="mt-2 text-sm md:text-base">
          Home <span className="mx-2">&gt;</span> Services
        </p>
      </div>
    </section>
  );
}