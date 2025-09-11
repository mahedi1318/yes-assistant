import Image from "next/image";

export default function Testimonial() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-10 h-10 text-red-600 mx-auto"
          >
            <path d="M7.17 6A5.003 5.003 0 002 11c0 2.21 1.79 4 4 4h1v2H2v2h5a1 1 0 001-1v-3a5.006 5.006 0 00-4.83-5H7.17V6zm12 0a5.003 5.003 0 00-5.17 5c0 2.21 1.79 4 4 4h1v2h-5v2h5a1 1 0 001-1v-3a5.006 5.006 0 00-4.83-5h2.17V6z" />
          </svg>
        </div>

        <p className="text-lg sm:text-xl text-gray-700 font-medium mb-8">
          “YesAssistant made it super easy to find a virtual assistant who understood my
          business goals. The entire process from consultation to execution was seamless.”
        </p>

        <div className="flex items-center justify-center gap-4">
          <Image
            src="/testimonial-profile.png" // ✅ Correct usage
            alt="Client"
            className="rounded-full"
            width={60}
            height={60}
          />
          <div className="text-left">
            <p className="text-gray-900 font-semibold">Sarah Williams</p>
            <p className="text-sm text-gray-500">Founder, BrightIdeas Agency</p>
          </div>
        </div>
      </div>
    </section>
  );
}