import { FaPhoneAlt, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaTelegramPlane } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-orange-400 text-white px-8 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Left Section - Company Info */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">CODERS CAFE</h2>
            <p className="text-sm leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ea ratione quidem libero, praesentium ab
              atque? Quidem maxime numquam dolores
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <FaPhoneAlt className="w-4 h-4" />
                <span className="text-sm">+1 (123) 456-7890</span>
              </div>
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="w-4 h-4" />
                <span className="text-sm">Noida, Uttar Pradesh</span>
              </div>
            </div>
          </div>

          {/* Middle Section - Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2">
              <div className="space-y-2">
                <a href="#" className="block text-sm hover:underline">
                  Home
                </a>
                <a href="#" className="block text-sm hover:underline">
                  About
                </a>
                <a href="#" className="block text-sm hover:underline">
                  Contact us
                </a>
                <a href="#" className="block text-sm hover:underline">
                  Privacy Policy
                </a>
              </div>
              <div className="space-y-2">
                <a href="#" className="block text-sm hover:underline">
                  Home
                </a>
                <a href="#" className="block text-sm hover:underline">
                  About
                </a>
                <a href="#" className="block text-sm hover:underline">
                  Contact us
                </a>
                <a href="#" className="block text-sm hover:underline">
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>

          {/* Right Section - Social Media & Payment */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex gap-3">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                  <FaFacebookF className="w-5 h-5 text-blue-600" />
                </div>
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                  <FaInstagram className="w-5 h-5 text-pink-600" />
                </div>
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                  <FaTelegramPlane className="w-5 h-5 text-blue-500" />
                </div>
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-lg font-bold text-blue-600">G</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Payment Methods</h3>
              <div className="flex gap-2 flex-wrap">
                <div className="bg-white rounded px-2 py-1">
                  <span className="text-blue-600 font-bold text-xs">VISA</span>
                </div>
                <div className="bg-white rounded px-2 py-1">
                  <span className="text-red-600 font-bold text-xs">MC</span>
                </div>
                <div className="bg-white rounded px-2 py-1">
                  <span className="text-blue-600 font-bold text-xs">maestro</span>
                </div>
                <div className="bg-white rounded px-2 py-1">
                  <span className="text-blue-600 font-bold text-xs">PayPal</span>
                </div>
                <div className="bg-white rounded px-2 py-1">
                  <span className="text-orange-600 font-bold text-xs">DISCOVER</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright */}
        <div className="border-t border-white/20 pt-6">
          <p className="text-center text-sm">Copyright © 2024 Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
