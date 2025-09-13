import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaPinterestP,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#1C1C1C] text-white pt-12 pb-6 px-4">
      <div className="container mx-auto grid md:grid-cols-5 gap-8">
        {/* Logo + Contact */}
        <div className="col-span-1">
          <Image src="/footer-logo.webp" alt="Yes Assistant Logo" width={140} height={60} />

          <div className="mt-6 text-sm space-y-4">
            <div>
              <p className="font-bold tracking-wide">DROP US A LINE</p>
              <p className="text-gray-400">clientcare@yesassistant.com</p>
            </div>
            <div>
              <p className="font-bold tracking-wide">CALL US NOW</p>
              <p className="text-gray-400">(888) 876-1048</p>
            </div>
            <div>
              <p className="font-bold tracking-wide">WHATSAPP</p>
              <p className="text-gray-400">(888) 876-1048</p>
            </div>

            <button className="mt-4 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-full shadow-md transition">
              Schedule a meeting
            </button>
          </div>
        </div>

        {/* Links Grid */}
        <div className="md:col-span-4 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-4 text-sm">
          {/* Column 1 */}
          <div>
            <h4 className="font-semibold mb-3">Administrative VA</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Administrative Assistant</li>
              <li>Data Entry Assistant</li>
              <li>Web Research Assistant</li>
              <li>Accounting Assistant</li>
              <li>Email Management VA</li>
              <li>Virtual Office Manager</li>
              <li>Calendar Management VA</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="font-semibold mb-3">Customer Support VA</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Appointment Setter VA</li>
              <li>Cold Calling Assistant</li>
              <li>Call Center Assistant</li>
              <li>Sales Virtual Assistant</li>
              <li>Lead Generation VA</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="font-semibold mb-3">General VA</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Executive Assistant</li>
              <li>Real Estate Assistant</li>
              <li>Personal Assistance</li>
              <li>Virtual Medical Assistant</li>
              <li>Virtual Medical Scribe</li>
              <li>Airbnb Virtual Assistant</li>
              <li>Logistics Virtual Assistant</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="font-semibold mb-3">Digital Marketing VA</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Website Development</li>
              <li>Content Writing</li>
              <li>SEO</li>
              <li>Social Media Marketing</li>
              <li>Graphic Design</li>
              <li>Podcast Virtual Assistant</li>
              <li>Business Cards Design</li>
            </ul>
          </div>

          {/* Column 5 */}
          <div>
            <h4 className="font-semibold mb-3">Useful Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Blog</li>
              <li>About Us</li>
              <li>Terms of Use</li>
              <li>Privacy Policy</li>
              <li>Contact Us</li>
              <li>Reviews</li>
              <li>Plans & Pricing</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-gray-700 pt-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          {/* Social Icons */}
          <div className="flex space-x-4 text-gray-400 text-xl">
            <FaTwitter className="hover:text-white" />
            <FaFacebookF className="hover:text-white" />
            <FaLinkedinIn className="hover:text-white" />
            <FaInstagram className="hover:text-white" />
            <FaYoutube className="hover:text-white" />
            <FaPinterestP className="hover:text-white" />
          </div>

          {/* Trust Ratings */}
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-300">RATED ⭐⭐⭐⭐⭐ ON</span>
            <Image src="/google-logo.png" alt="Google" width={60} height={20} />
            <Image src="/trustpilot-logo.png" alt="Trustpilot" width={80} height={20} />
          </div>
        </div>
      </div>
    </footer>
  );
}