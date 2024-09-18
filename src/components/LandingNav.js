import { useState } from "react";
import { Link } from "react-router-dom";

const LandingNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-secondary-3 text-white">
      <div className="container max-w-screen-xl px-4 md:px-6 mx-auto flex justify-between py-4">
        <div className="flex items-center gap-x-10 z-20">
          <div
            id="logo"
            className="text-3xl bg-gradient-to-r from-amber-400 to-red-600 bg-clip-text text-transparent"
          >
            CRAFTY
          </div>
          <div className="hidden md:block">
            <div className="flex items-center gap-x-8">
              <Link className="font-base font-semibold sm:text-base text-theme-neutral-200 hover:text-fuchsia-500 transition-all" to="/">
                Home
              </Link>
              <Link className="font-base font-semibold sm:text-base text-theme-neutral-200 hover:text-fuchsia-500 transition-all" to="/courses">
                All Courses
              </Link>
              <Link className="font-base font-semibold sm:text-base text-theme-neutral-200 hover:text-fuchsia-500 transition-all" to="/add-course">
                Add Course
              </Link>
              <a className="font-base font-semibold sm:text-base text-theme-neutral-200 hover:text-fuchsia-500 transition-all" href="/perks">
                Perks
              </a>
              <a className="font-base font-semibold sm:text-base text-theme-neutral-200 hover:text-fuchsia-500 transition-all" href="/pricing">
                Pricing
              </a>
              <a className="font-base font-semibold sm:text-base text-theme-neutral-200 hover:text-fuchsia-500 transition-all" href="/categories">
                Categories
              </a>
              <a className="font-base font-semibold sm:text-base text-theme-neutral-200 hover:text-fuchsia-500 transition-all" href="/cart">
                Cart
              </a>
            </div>
          </div>
        </div>
        <div className="block md:hidden flex items-center z-20" onClick={toggleMenu}>
          <div role="button" className="w-14 h-14 bg-neutral-800 rounded-full flex items-center p-3 hover:bg-neutral-700">
            <div className="space-y-1.5 w-full">
              <div className="h-px bg-white"></div>
              <div className="h-px bg-white"></div>
              <div className="h-px bg-white"></div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? "block" : "hidden"}`}>
        <div className="flex flex-col justify-start items-start h-full z-10 md:hidden">
          <div className="flex flex-col items-center gap-8 ml-4 py-4">
            <Link className="font-base font-semibold sm:text-base text-theme-neutral-200 hover:text-fuchsia-500 transition-all" to="/">
              Home
            </Link>
            <Link className="font-base font-semibold sm:text-base text-theme-neutral-200 hover:text-fuchsia-500 transition-all" to="/courses">
              All Courses
            </Link>
            <Link className="font-base font-semibold sm:text-base text-theme-neutral-200 hover:text-fuchsia-500 transition-all" to="/add-course">
              Add Course
            </Link>
            <a className="font-base font-semibold sm:text-base text-theme-neutral-200 hover:text-fuchsia-500 transition-all" href="/perks">
              Perks
            </a>
            <a className="font-base font-semibold sm:text-base text-theme-neutral-200 hover:text-fuchsia-500 transition-all" href="/pricing">
              Pricing
            </a>
            <a className="font-base font-semibold sm:text-base text-theme-neutral-200 hover:text-fuchsia-500 transition-all" href="/categories">
              Categories
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default LandingNav;
