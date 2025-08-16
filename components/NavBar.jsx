import React from "react";
import { IoLogoGithub } from "react-icons/io";
import { FiLink } from "react-icons/fi";

export default function Navbar() {
  return (
    <nav
      className="
        w-full px-4 py-4 flex justify-between items-center 
        md:w-1/2 md:mx-auto relative 
      "
    >
      <div className="flex items-center space-x-2">
        <FiLink className="text-blue-600" size={26} />
        <h1 className="text-2xl font-extrabold text-gray-900">Linkly</h1>
      </div>
      <a
        href="https://github.com/0x-mayank/Linkly"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-700 hover:text-black transition"
      >
        <IoLogoGithub size={28} />
      </a>
    </nav>
  );
}
