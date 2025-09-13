"use client";
import Image from "next/image";

export default function ServicesSection() {
  const services = [
    {
      title: "Website Design & Development",
      desc: "Our team helps cater to all the web design and development needs of our clients.",
      img: "/service-1.webp", 
    },
    {
      title: "Administrative Support",
      desc: "Our trained team with administrative support experience is the perfect solution for your business.",
      img: "/service-2.webp",
    },
    {
      title: "Marketing and Social Media",
      desc: "Any brand and business should take advantage of online marketing and social media to get sales and leads.",
      img: "/service-3.webp",
    },
     {
      title: "Marketing and Social Media",
      desc: "Any brand and business should take advantage of online marketing and social media to get sales and leads.",
      img: "/service-4.webp",
    },
     {
      title: "Marketing and Social Media",
      desc: "Any brand and business should take advantage of online marketing and social media to get sales and leads.",
      img: "/service-5.webp",
    },
     {
      title: "Marketing and Social Media",
      desc: "Any brand and business should take advantage of online marketing and social media to get sales and leads.",
      img: "/service-7.webp",
    },
  ];

  return (
    <section className="py-16 px-4 md:px-12 lg:px-20 bg-white ">
      {/* Heading */}
      <div className="container">
      <div className=" mx-auto text-center md:text-left flex flex-col md:flex-row justify-between items-start gap-8">
        <div>
          <p className="text-red-500 font-semibold">What we do</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            What Can YesAssistant <br /> Help Me With?
          </h2>
        </div>
        <p className="text-gray-600 max-w-lg">
          We provide various services to entrepreneurs or businesses from remote
          locations. You can make a virtual assistant do almost anything. Hiring
          a virtual assistant can grow your business faster and can help you
          focus your precious time on your business's most important tasks. Get
          matched with our highly-qualified virtual assistant service and help
          your business thrive.
        </p>
      </div>

      {/* Cards */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-md border rounded-lg overflow-hidden hover:shadow-xl transition"
          >
            {/* Image */}
            <div className="relative h-48 w-full">
              <Image
                src={service.img}
                alt={service.title}
                fill
                className="object-cover"
              />
              {/* ছোট আইকন */}
              <div className="absolute bottom-[-20px] left-6 bg-white shadow-md rounded-full p-3">
                <span className="text-yellow-500 text-xl">⚙️</span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 pt-10">
              <h3 className="text-lg font-semibold text-gray-900">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm mt-2">{service.desc}</p>

              {/* Button */}
              <div className="mt-6 flex items-center justify-between">
                <a
                  href="#"
                  className="text-blue-600 font-medium hover:underline"
                >
                  Learn More
                </a>
                <div className="bg-red-600 text-white p-2 rounded-tr-lg rounded-bl-lg">
                  ➜
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}