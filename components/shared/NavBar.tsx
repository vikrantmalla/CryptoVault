import React, { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  //   const handleClick = (): void => {
  //     setmenuIconClick(!menuIconClick);
  //   };
  return (
    <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-blue-600 mb-3">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex flex-row justify-between">
          <div className="flex">
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              {navbarOpen ? (
                <FaTimes size={25} style={{ color: "#fff" }} />
              ) : (
                <FaBars size={25} style={{ color: "#fff" }} />
              )}
            </button>
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              href="#pablo"
            >
              CryptoVault
            </a>
          </div>
          <div className="flex gap-3">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">hello1</button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">hello2</button>
          </div>
        </div>
        {/* <div
          className={
            "lg:flex flex-grow items-center" + (navbarOpen ? "flex" : " hidden")
          }
          id="example-navbar-danger"
        >
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li className="nav-item">
              <button>INR</button>
            </li>
            <li className="nav-item">
              <button>LOGIN</button>
            </li>
          </ul>
        </div> */}
      </div>
    </nav>
  );
};

export default NavBar;
