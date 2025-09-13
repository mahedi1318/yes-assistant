'use client'
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { FaBars } from "react-icons/fa6"
import { IoSearch, IoClose } from "react-icons/io5"

const Navbar = () => {
  const [barisopen, setBarisopen] = useState(false)

  const menuItem = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/service", label: "Service" },
    { href: "/industry", label: "Industry" },
    { href: "/plans&pricing", label: "Plans & Pricing" },
    { href: "/reviews", label: "Reviews" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <>
      {/* Navbar */}
      <div className="py-4 md:py-6 fixed top-0 left-0 w-full bg-white shadow-sm z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/">
              <Image
                src="/logo.png"
                width={160}
                height={60}
                alt="Logo"
                className="w-auto h-[45px] md:h-[55px]"
              />
            </Link>

            {/* Desktop Menu (always visible on large screens) */}
            <div className="hidden lg:flex items-center gap-8">
              {menuItem.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="roboto text-[15px] font-semibold uppercase hover:text-red-600 transition"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Right side */}
            <div className="flex items-center gap-4">
              {/* Search button (desktop visible) */}
              <button className="hidden md:flex w-[40px] h-[40px] border rounded-full text-[18px] items-center justify-center cursor-pointer hover:bg-gray-100 transition">
                <IoSearch />
              </button>

              {/* Meeting button (desktop visible) */}
              <Link
                href="https://calendly.com/abdullah-dev-sayad/30min"
                target="blank"
                className="hidden md:block py-3 px-6 bg-black text-white fira text-[15px] font-bold rounded-[5px] hover:bg-gray-800 transition"
              >
                Schedule A Meeting
              </Link>

              {/* Mobile menu button (hamburger) */}
              <button
                onClick={() => setBarisopen(true)}
                className="lg:hidden w-[40px] h-[40px] border rounded-full text-[18px] flex items-center justify-center cursor-pointer hover:bg-gray-100 transition"
              >
                <FaBars />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar + Overlay (for mobile/tablet) */}
      <div
        className={`fixed inset-0 z-[999] transition-opacity duration-300 ${
          barisopen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-[rgba(0,0,0,0.6)]"
          onClick={() => setBarisopen(false)}
        ></div>

        {/* Sidebar */}
        <div
          className={`fixed top-0 right-0 bg-white h-full w-[300px] sm:w-[350px] shadow-lg z-[1000] transform transition-transform duration-300 ${
            barisopen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Close button */}
          <div className="flex justify-end p-6">
            <button
              onClick={() => setBarisopen(false)}
              className="text-[26px] hover:text-red-600 transition"
            >
              <IoClose />
            </button>
          </div>

          {/* Sidebar menu items */}
          <nav className="flex flex-col gap-6 px-6">
            {menuItem.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-lg font-semibold uppercase text-gray-700 hover:text-red-600 transition"
                onClick={() => setBarisopen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="https://calendly.com/abdullah-dev-sayad/30min"
              target="blank"
              className="mt-6 py-3 px-6 bg-black text-white fira text-[15px] font-bold rounded-[5px] text-center hover:bg-gray-800 transition"
            >
              Schedule A Meeting
            </Link>
          </nav>
        </div>
      </div>
    </>
  )
}

export default Navbar