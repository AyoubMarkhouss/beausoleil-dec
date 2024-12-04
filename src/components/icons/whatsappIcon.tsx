"use client";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { useState } from "react";

const WhatsAppIcon = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href="https://wa.me/+212694346666" // Replace with your WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="fixed bottom-5 right-5 flex items-center p-3 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition duration-300"
    >
      <div
        className={`flex items-center overflow-hidden transition-width duration-300 ease-out ${
          hovered ? "w-32" : "w-0"
        }`}
      >
        <span className="cabinet whitespace-nowrap pr-2">Contactez-nous</span>
      </div>
      <FaWhatsapp size={24} className="transition-transform duration-300" />
    </Link>
  );
};

export default WhatsAppIcon;
