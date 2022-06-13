import React, { useState } from "react";

// FontAwesome Components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [toggled, setToggled] = useState<boolean>(false);

  function toggleMenu() {
    setToggled(!toggled);
  }

  return (
    <nav className="h-18 fixed top-0 z-50 flex w-full justify-center border-2 border-white bg-[#8E44AD] px-4 py-2.5 sm:h-20 sm:px-14">
      <div className="container mx-auto flex flex-wrap items-center justify-end">
        <div
          className="hidden w-full items-center justify-between md:flex md:w-auto"
          id="mobile-menu-4"
        >
          <ul className="mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium">
            <li className="hidden lg:inline-block">
              <a
                href="#about"
                className="block rounded py-2 pr-4 pl-3 text-base text-white hover:text-black md:p-0 lg:text-lg"
              >
                เกี่ยวกับหมอหมึก
              </a>
            </li>
            <li>
              <a
                href="#testimonial"
                className="block rounded py-2 pr-4 pl-3 text-base text-white hover:text-black md:p-0 lg:text-lg"
              >
                บทความ
              </a>
            </li>
            <li className="hidden lg:inline-block">
              <a
                href="#contact"
                className="block rounded py-2 pr-4 pl-3 text-base text-white hover:text-black md:p-0 lg:text-lg"
              >
                จองคิว
              </a>
            </li>
          </ul>
        </div>
        <div className="flex">
          <button
            aria-label="mobile-menu"
            type="button"
            className="inline-flex items-center rounded-lg p-2 text-white md:hidden border-2 border-white"
            onClick={toggleMenu}
          >
            <FontAwesomeIcon icon={faBars} width="16" height="16" />
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={
          toggled
            ? "fixed top-14 flex w-full rounded-b-lg bg-white p-6 sm:top-20 justify-center text-center"
            : "fixed top-14 hidden w-full rounded-b-lg bg-white p-6 sm:top-20"
        }
      >
        <ul
          className="ml-4 flex flex-col gap-4 focus:bg-white"
          onClick={toggleMenu}
        >
          <li>
            <a
              href="#about"
              className="block rounded py-2 pr-4 pl-3 text-base text-black hover:text-sky-700 md:p-0"
            >
              เกี่ยวกับหมอหมึก
            </a>
          </li>
          <li>
            <a
              href="#testimonial"
              className="block rounded py-2 pr-4 pl-3 text-base text-black hover:text-sky-700 md:p-0"
            >
              บทความ
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="block rounded py-2 pr-4 pl-3 text-base text-black hover:text-sky-700 md:p-0"
            >
              จองคิว
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
