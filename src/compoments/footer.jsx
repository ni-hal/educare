import Link from 'next/link';
import React from 'react';
import { MapPin, Phone } from 'lucide-react'; 

const Footer = () => {
  return (
    <footer className="bg-rose-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl font-bold">Educare</span>
            </div>
            <p className="text-rose-200 text-sm">© 2024 Educare</p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm">
              {["Home", "About", "Services", "Tutors", "Career", "Contact us"].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-rose-200 hover:text-white">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:info@educare.com" className="text-rose-200 hover:text-white">
                  info@educare.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a href="tel:+97144123456" className="text-rose-200 hover:text-white">
                  +971 4 412 3456
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a href="tel:+97155557890" className="text-rose-200 hover:text-white">
                  +971 55 555 7890
                </a>
              </li>
              <li className="flex gap-3 mt-4">
                {["facebook", "twitter", "linkedin", "youtube"].map((social) => (
                  <Link
                    key={social}
                    href="#"
                    className="h-6 w-6 bg-rose-700 rounded-sm flex items-center justify-center hover:bg-rose-600"
                  >
                    <span className="sr-only">{social}</span>
                    {/* Add icon if needed */}
                  </Link>
                ))}
              </li>
            </ul>
          </div>

          {/* Office Address */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Office Address</h3>
            <div className="flex gap-3">
              <MapPin className="h-5 w-5 text-rose-300 flex-shrink-0 mt-1" />
              <address className="text-rose-200 text-sm not-italic">
                Educare Academic Center
                <br />
                Building 45, Al Saad Street,
                <br />
                Doha, Qatar
              </address>
            </div>
            <Link href="#" className="text-rose-200 hover:text-white text-sm underline mt-2 inline-block">
              View on Map
            </Link>
          </div>

        </div>

        {/* Bottom Line */}
        <div className="border-t border-rose-700 mt-8 pt-4 text-center text-rose-300 text-xs">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p>© 2024 Educare</p>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-white">
                Terms & Conditions
              </Link>
              <Link href="#" className="hover:text-white">
                Privacy Policy
              </Link>
            </div>
            <p>Designed by Innovative Technologies</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
