import React, { useEffect } from "react";
import { initNavbar } from "./initNavbar";
import "../App.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  useEffect(() => {
    initNavbar();
  }, []);
  return (
    <>
      <header className="bg-cyan-700 sticky top-0 left-0 w-full flex items-center z-10">
        <div className="container">
          <div className="flex items-center justify-between relative">
            <div className="px-4">
              <NavLink
                href="#"
                className="font-bold text-lg text-white block py-6"
              >
                reganedric
              </NavLink>
            </div>
            <div className="flex items-center px-4">
              <button
                id="hamburger"
                name="hamburger"
                type="button"
                className="block absolute right-4 lg:hidden"
              >
                <span className="hamburger-line transition duration-300 ease-in-out origin-top-left "></span>
                <span className="hamburger-line transition duration-300 ease-in-out"></span>
                <span className="hamburger-line transition duration-300 ease-in-out origin-bottom-left"></span>
              </button>

              <nav
                id="nav-menu"
                className="hidden sticky py-5 bg-cyan-700 shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none hover:transform scale(1.3) hover:transition: transition-0.3 ease"
              >
                <ul className="block lg:flex font-bold ">
                  <li className="group">
                    <NavLink
                      to="/home"
                      className="text-lg text-white py-2 mx-8 flex group-hover:underline underline-offset-8"
                    >
                      Home
                    </NavLink>
                  </li>
                  <li className="group">
                    <NavLink
                      to="/about"
                      className="text-lg text-white py-2 mx-8 flex group-hover:underline underline-offset-8"
                    >
                      About
                    </NavLink>
                  </li>
                  <li className="group">
                    <NavLink
                      href="#"
                      className="text-lg text-white py-2 mx-8 flex group-hover:underline underline-offset-8"
                    >
                      Projects
                    </NavLink>
                  </li>
                  <li className="group">
                    <NavLink
                      href="#"
                      className="text-lg text-white py-2 mx-8 flex group-hover:underline underline-offset-8"
                    >
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
