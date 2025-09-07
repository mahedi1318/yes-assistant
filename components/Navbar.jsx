'use client'
import Image from "next/image"
import Link from "next/link"
import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

const Navbar = () => {

    const [barisopen, setBarisopen] = useState(false)

    const menuItem = [
        {href: "/", label: "Home"},
        {href: "/about", label: "About"},
        {href: "/service", label: "Service"},
        {href: "/industry", label: "Industry"},
        {href: "/plans&pricing", label: "Plans & Pricing"},
        {href: "/reviews", label: "Reviews"},
        {href: "/contact", label: "Contact"}
    ]

  return (
    <>
    <div className="py-6 fixed top-0 left-0 w-full bg-white z-50">
        <div className="container">
            <div className="flex justify-between items-center">
                <div className="">
                    <Image src="/logo.png" width={180} height={100}/>
                </div>
                <div className="flex items-center gap-[30px]">
                    {
                        menuItem.map((item)=>(
                            <Link key={item.href} href={item.href} className="roboto text-[15px] font-semibold uppercase">{item.label}</Link>
                        ))
                    }
                </div>
                <div className="flex items-center gap-5">
                    <div className="flex items-center gap-[10px]">
                        <button className="w-[40px] h-[40px] border rounded-full text-[18px] flex items-center justify-center cursor-pointer"><IoSearch /></button>                         
                        <button onClick={()=> setBarisopen(true)} className="w-[40px] h-[40px] border rounded-full text-[18px] flex items-center justify-center cursor-pointer"><FaBars /></button>                         
                    </div>
                    <Link href="https://calendly.com/abdullah-dev-sayad/30min" target="blank" className="py-3 px-6 bg-black text-white fira text-[15px] font-bold rounded-[5px]">Schedule A Meeting</Link>
                </div>
            </div>
        </div>
    </div>

    {/* -----------------sidebar+overlay---------------- */}
    <div className={`fixed inset-0 z-[999] transition-opacity duration-300 ${barisopen ? "opacity-100 visible" : "opacity-0 invisible" }`}>
       {/* -------------Dark-Overlay------------ */}
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.7)] bg-opacity-60" onClick={() => setBarisopen(false)} ></div>
    {/* -----------------sidebar------------------ */}
        <div className={`fixed top-0 right-0 bg-white h-full w-[400px] shadow-lg z-[999] transform transition-transform duration-300 ${barisopen ? "translate-x-0" : "translate-x-full"}`}>
            <div className="px-8 py-7">                
                <button onClick={()=> setBarisopen(false)} className="text-[20px]"><IoClose /></button>
            </div>
        </div>
    </div>
    {/* -----------------sidebar-end------------------ */}
    </>
  )
}

export default Navbar