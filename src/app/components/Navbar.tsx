"use client";

import { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight - 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full p-4 transition-all duration-500 z-50 ${
        isScrolled ? "bg-blue-600 shadow-md text-white" : "bg-transparent text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Kozhikode PG</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-4">
          <li>
            <a href="/" className="hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="/rooms" className="hover:underline">
              Rooms
            </a>
          </li>
          <li>
            <a href="/about" className="hover:underline">
              About
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>

        {/* Hamburger Menu Button (Mobile) */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <AiOutlineClose size={28} /> : <AiOutlineMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-16 left-0 w-full transition-all duration-300 ease-in-out md:hidden ${
          isScrolled ? "bg-blue-600" : "bg-transparent"
        } ${isOpen ? "block" : "hidden"}`}
      >
        <ul className="flex flex-col items-center gap-4 py-4">
          <li>
            <a href="/" className="hover:underline" onClick={() => setIsOpen(false)}>
              Home
            </a>
          </li>
          <li>
            <a href="/rooms" className="hover:underline" onClick={() => setIsOpen(false)}>
              Rooms
            </a>
          </li>
          <li>
            <a href="/about" className="hover:underline" onClick={() => setIsOpen(false)}>
              About
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:underline" onClick={() => setIsOpen(false)}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
