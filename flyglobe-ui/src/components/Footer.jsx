import React from 'react';
export default function Footer() {
 return (
    <footer id='footer' className="bg-[#0B1120] text-white px-4 sm:px-6 lg:px-20 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-sm">
        <div>
          <h3 className="text-xl font-bold italic">FLYGLOBE</h3>
          <p className="mt-2">
            FlyGlobe is more than just a flight booking app; it's your
            one-stop shop for seamless travel experiences.
          </p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-2">About Us</h4>
          <ul className="space-y-1">
            <li>Promo</li>
            <li>Help</li>
            <li>Order</li>
            <li>Contact</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-2">Resources</h4>
          <ul className="space-y-1">
            <li>Documentation</li>
            <li>Carrier</li>
            <li>Work With Us</li>
            <li>Blog & News</li>
            <li>Affiliate</li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-2">Legal</h4>
          <ul className="space-y-1">
            <li>Terms and Condition</li>
            <li>Privacy Policy</li>
            <li>Cookies Policy</li>
            <li>Developers</li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-2">Contact Us</h4>
          <p>flyglobe@gmail.com</p>
          <p>+12 345 678 09</p>
          <p>Singapore, Indonesia</p>
          <h5 className="mt-4 font-semibold">Follow Us On Social</h5>
          <div className="flex flex-wrap gap-4 mt-2 text-2xl">
            <span>📘</span>
            <span>🐦</span>
            <span>💼</span>
            <span>📺</span>
            <span>📸</span>
            <span>🎵</span>
          </div>
        </div>
      </div>
      <div className="text-center text-sm mt-10 border-t border-white/20 pt-6">
        © 2025 FlyBritoin. All rights reserved.
      </div>
    </footer>
  );
}
