import React from "react";
import Button from "./ui/Button";
import { FaLinkedinIn } from "react-icons/fa6";

const Navbar: React.FC = () => {
  return (
    <nav
      className="container mx-auto mt-4 px-4 sm:px-8 flex justify-between items-center"
      aria-label="Main Navigation"
    >
      <div>
        <img src="/assets/Logo.png" alt="Supreme Group Logo" className="h-8 sm:h-10" />
      </div>
      <div className="flex items-center gap-4">
        <Button text="Contact Us" color="blue" />
        <button aria-label="LinkedIn">
          <FaLinkedinIn size={20} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
