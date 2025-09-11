"use client";
import { FaBuilding, FaHeadset, FaStore, FaRocket, FaHeartbeat, FaCalculator, FaShoppingCart, FaHome, FaBalanceScale, FaBullhorn } from "react-icons/fa";

const industries = [
  { name: "Real Estates", icon: <FaBuilding className="text-3xl text-gray-600" /> },
  { name: "Call Center", icon: <FaHeadset className="text-3xl text-gray-600" /> },
  { name: "Small Business", icon: <FaStore className="text-3xl text-gray-600" /> },
  { name: "Startups", icon: <FaRocket className="text-3xl text-gray-600" /> },
  { name: "Healthcare", icon: <FaHeartbeat className="text-3xl text-gray-600" /> },
  { name: "Accounting", icon: <FaCalculator className="text-3xl text-gray-600" /> },
  { name: "E-Commerce", icon: <FaShoppingCart className="text-3xl text-gray-600" /> },
  { name: "Mortgage", icon: <FaHome className="text-3xl text-gray-600" /> },
  { name: "Legal", icon: <FaBalanceScale className="text-3xl text-gray-600" /> },
  { name: "Marketing", icon: <FaBullhorn className="text-3xl text-gray-600" /> },
];

export default function IndustriesSection() {
  return (
    <section className="bg-red-50 py-16 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-3">
          Industries We Serve
        </h2>
        <p className="text-gray-600 mb-10">
          The list of diversified industries whom we serve with our professional virtual assistants.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {industries.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm p-10 flex flex-col items-center justify-center border hover:shadow-md transition"
            >
              {item.icon}
              <h3 className="mt-3 font-semibold text-gray-800">{item.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}