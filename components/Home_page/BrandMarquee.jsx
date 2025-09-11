import Image from "next/image";

const clients = [
  { src: "/logos/ion.png", alt: "ion" },
  { src: "/logos/bpo-homes.png", alt: "BPO Homes" },
  { src: "/logos/epicrise.png", alt: "EpicRise Electronics" },
  { src: "/logos/janpro.png", alt: "Jan-Pro" },
  { src: "/logos/shae.png", alt: "Shae Medical" },
  { src: "/logos/status.png", alt: "Status" },
  { src: "/logos/medsk.png", alt: "Med Sk Distrib" },
];

export default function ClientsMarquee() {
  return (
    <section className="bg-white py-10">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-6">
          Industrial Leaders Already Onboard for Early Access
        </h2>

        {/* Marquee Container */}
        <div className="overflow-hidden relative">
          <div className="flex animate-marquee space-x-12 w-max">
            {clients.concat(clients).map((client, index) => (
              <Image
                key={index}
                src={client.src}
                alt={client.alt}
                width={100}
                height={50}
                className="object-contain grayscale hover:grayscale-0 transition duration-300"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}