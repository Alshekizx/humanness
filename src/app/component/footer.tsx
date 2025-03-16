"use client";

import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const navList = [
  {
    title: "Shop",
    links: ["New Arrivals", "Dresses", "Tops", "Bottoms", "Accessories", "Coming Soon"],
  },
  {
    title: "Company",
    links: ["Our Mission", "About Us", "Careers", "Contact"],
  },
  {
    title: "Help",
    links: ["FAQs", "Shipping & Returns", "Privacy Policy", "Terms & Conditions"],
  },
];

const Footer = () => {
  return (
    <footer className="bg-primary text-secondary py-12">
      <div className="container mx-auto px-4 lg:px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Section */}
        <div>
          <h2 className="text-lg font-bold">About Us</h2>
          <p className="text-sm mt-3">
            Bringing you the latest fashion trends with quality and affordability. 
            Explore our collections and elevate your style effortlessly.
          </p>
        </div>

        {/* Navigation Links */}
        {navList.map((category) => (
          <div key={category.title} className="hidden lg:block">
            <h2 className="text-lg font-bold">{category.title}</h2>
            <ul className="mt-3 space-y-2">
              {category.links.map((link) => (
                <li key={link}>
                  <Link href={`/${link.toLowerCase().replace(/ /g, "-")}`} className="hover:underline text-sm">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Social Media */}
        <div >
          <h2 className="text-lg font-bold">Follow Us</h2>
          <div className="flex space-x-4 mt-3">
            <Link href="#" className="hover:text-accent"><FaFacebookF size={20} /></Link>
            <Link href="#" className="hover:text-accent"><FaInstagram size={20} /></Link>
            <Link href="#" className="hover:text-accent"><FaTwitter size={20} /></Link>
            <Link href="#" className="hover:text-accent"><FaYoutube size={20} /></Link>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-secondary mt-8 pt-4 text-center text-xs">
        © {new Date().getFullYear()} YourBrand. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
