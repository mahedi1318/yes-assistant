import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Adam Ding",
    role: "Founder and Owner",
    video: "/adam.png", // replace with actual image/video thumbnail
    rating: 5,
  },
  {
    name: "Blake Boyd",
    role: "Actor/ Producer/ Director",
    video: "/blake.png",
    rating: 5,
  },
  {
    name: "Justin Koopmans",
    role: "Managing Partner",
    video: "/justin.png",
    rating: 5,
  },
];

export default function Review() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-2">
          Happy Faces, Proven Results!
        </h2>
        <p className="text-gray-600 mb-12">Hear From Our Satisfied Clients</p>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left Side */}
          <div className="text-left">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Clients Speak: The Impact We’ve Made Together
            </h3>
            <p className="text-gray-600 mb-6">
              Our clients’ stories show the real impact we’ve made. From helping
              them save time to boosting their productivity, their stories show
              the great experiences they’ve had, and we’re so happy to see them
              succeed. Take a look at what they have to say and see how we can
              help your business, too!
            </p>

            {/* Avatars + Stars */}
            <div className="flex items-center space-x-3 mb-6">
              <div className="flex -space-x-2">
                <img
                  src="/r-1.webp"
                  alt="client"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
                <img
                  src="/r-2.webp"
                  alt="client"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
                <img
                  src="/r-3.webp"
                  alt="client"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
                <img
                  src="/r-4.webp"
                  alt="client"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
              </div>
              <div className="flex items-center text-yellow-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FaStar key={i} />
                ))}
                <span className="ml-2 text-gray-700">5.0 from 800+ reviews</span>
              </div>
            </div>

            {/* Button */}
            <button className="bg-red-600 text-white px-6 py-3 rounded-full font-medium hover:bg-red-700 transition">
              Check Reviews
            </button>
          </div>

          {/* Right Side: Testimonials Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="bg-white shadow-md rounded-2xl p-4 text-left"
              >
                {/* Video/Image */}
                <div className="relative w-full h-40 mb-4">
                  <img
                    src={t.video}
                    alt={t.name}
                    className="w-full h-full object-cover rounded-xl"
                  />
                  <button className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 rounded-xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-12 w-12 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                </div>

                {/* Info */}
                <h4 className="font-bold text-gray-900">{t.name}</h4>
                <p className="text-gray-600 text-sm mb-2">{t.role}</p>
                <div className="flex text-yellow-500">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}