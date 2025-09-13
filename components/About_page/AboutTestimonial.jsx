"use client";
import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import SwiperCore from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import Image from "next/image";

// Testimonials data
const testimonials = [
  {
    name: "Vanetta Preciado",
    message:
      "Excellent service, competitive pricing, and customer support. It’s refreshing to get such a personal touch.",
    image: "/public/service-3.webp"
  },
  {
    name: "Ernestina Farrington",
    message:
      "The Yes Assistant team has been amazing! Proactive, supportive, and efficient.",
    image: "/public/service-3.webp"
  },
  {
    name: "Marya Schoch",
    message:
      "Talented, young team. Great experience overall. Highly recommend!",
    image: "/tes-3.webpg"
  },
  {
    name: "John Doe",
    message:
      "Fast, reliable, and extremely supportive. Saved us a lot of time!",
    image: "/tes-1.webpg"
  },
  {
    name: "Jane Smith",
    message:
      "Very professional virtual assistants. I love working with them!",
    image: "/tes-2.webpg"
  },
];

export default function TestimonialSlider() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      SwiperCore.use([Navigation, Autoplay]);
    }
  }, []);

  return (
    <section className="bg-[#FAF8F4] py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h4 className="text-red-500 text-sm font-semibold mb-2">
          Our Clients Testimonials
        </h4>
        <h2 className="text-4xl font-bold text-gray-800 mb-12">
          What People Say
        </h2>

        <div className="relative">
          <Swiper
            modules={[Navigation, Autoplay]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            loop={true}
            spaceBetween={20}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white p-6 rounded-lg shadow-md h-full flex flex-col justify-between text-left">
                  <p className="text-gray-600 mb-6">“{item.message}”</p>
                  <div className="flex items-center gap-3 mt-auto">
                    <Image src="/service-3.webp" alt="" width={50} height={50} className="rounded-full border border-gray-300" />
                    <div className="font-medium text-gray-800">
                      {item.name}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

        </div>
      </div>
    </section>
  );
}