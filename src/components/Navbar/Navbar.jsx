import { useState } from "react";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    "Home",
    "Studio",
    "Services",
    "Contact",
    "FAQs",
  ];

  return (
    <header className="w-full bg-[#f5f5f3]">
      <nav className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <h1 className="text-xl md:text-2xl font-semibold">
          Elementum
        </h1>

        <ul className="hidden md:flex items-center gap-10 text-sm">
          {navLinks.map((item) => (
            <li
              key={item}
              className="cursor-pointer hover:opacity-70 transition"
            >
              {item}
            </li>
          ))}
        </ul>

        <button
          className="md:hidden text-3xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-white px-6 pb-5">
          {navLinks.map((item) => (
            <div
              key={item}
              className="py-3 border-b"
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;