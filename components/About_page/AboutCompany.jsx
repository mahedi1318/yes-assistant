"use client";
import Image from 'next/image';


export default function AboutCompanyn() {
  return (
    <section className="py-20 px-4 bg-white relative">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Side - Text */}
        <div>
          <p className="text-red-600 font-medium">About Our Company</p>
          <h2 className="text-4xl font-bold text-slate-900 mb-4 leading-tight">
            Welcome to the virtual <br /> assistant platform
          </h2>
          <p className="text-gray-600 mb-6">
            Well, if you are looking for an efficient life where you can focus on what is important to you.
            Our main goal is to help professionals reduce their workload and allow them to achieve more.
            We aim to help all types of business owners and executives win back their time almost immediately.
          </p>

          <h3 className="text-lg font-semibold text-slate-800 mb-2">Our vision and mission</h3>
          <p className="text-gray-600 mb-4">
            Our mission is to provide customized virtual assistant services to established business owners.
            We provide remarkable service, tools, and support that provide our clients with more time and focus on growing their business.
          </p>

          <h3 className="text-lg font-semibold text-slate-800 mb-2">One team, many talents</h3>
          <p className="text-gray-600 mb-6">
            By accomplishing various virtual assistant tasks for other clients, our team has many talents from years of experience.
            Our assistants are always available to undertake the tasks your company provides.
          </p>

          <button className="bg-red-600 text-white font-semibold px-6 py-3 rounded hover:bg-red-700 transition">
            Get Free Quote
          </button>
        </div>

        {/* Right Side - Images */}
        <div className="relative">
          {/* Top big image */}
          <div className="rounded overflow-hidden shadow-lg">
            <Image
              src="/about-2.webp"
              alt="Team working together"
              className="rounded-lg"
              width={500}
              height={350}
              objectFit="cover"
            />
          </div>

          {/* Bottom small image - overlapping */}
          {/* <div className="absolute -bottom-10 left-10 border-4 border-white shadow-lg rounded overflow-hidden">
            <Image
              src="/about-2.webp"
              alt="Smiling assistant"
              className="rounded-lg"
              width={250}
              height={200}
              objectFit="cover"
            />
          </div> */}
        </div>
      </div>
    </section>
  );
}