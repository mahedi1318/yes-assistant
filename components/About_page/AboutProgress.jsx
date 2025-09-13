"use client";
import Image from 'next/image';


const services = [
  { name: 'Marketing and Social Media', percent: 80 },
  { name: 'Data Entry & Web research', percent: 90 },
  { name: 'Graphic Design', percent: 75 },
  { name: 'Search Engine Optimization', percent: 80 },
];

export default function AboutProgressSection() {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left - Image */}
        <div>
          <Image
            src="/aboutPog.webp"
            alt="Team working"
            width={600}
            height={500}
            className="rounded-lg shadow-md object-cover"
          />
        </div>

        {/* Right - Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Our Best Virtual <br className="hidden md:block" /> Assistant Services
          </h2>
          <p className="text-gray-600 mb-8">
            We are a leading virtual assistant services provider. With plenty of experience in marketing and social media, data entry & web research, graphic design, and search engine optimization.
          </p>

          {/* Progress Bars */}
          <div className="space-y-6">
            {services.map((service, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-slate-800">{service.name}</span>
                  <span className="text-sm font-semibold text-slate-900">{service.percent}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 relative">
                  <div
                    className="bg-red-600 h-2.5 rounded-full"
                    style={{ width: `${service.percent}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}