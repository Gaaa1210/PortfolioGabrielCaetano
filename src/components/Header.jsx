import { Link } from "react-router-dom";
import logoGabriel from "/LogoGabrielWanderley.svg";
import { IoMoon, IoSunny, IoMenu, IoClose } from "react-icons/io5";
import React, { useState, useEffect } from "react";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header className="h-28 sm:h-40 bg-gray-50 text-white flex justify-between items-center p-4 lg:px-16 dark:bg-zinc-950 dark:text-gray-200 relative">
        
        <div className="flex justify-start w-auto mb-4 sm:mb-0">
          <img src={logoGabriel} alt="Logo Gabriel" className="w-24 sm:w-32 md:w-40" />
        </div>

        <button
          onClick={toggleDarkMode}
          className="p-2 text-blue-500 dark:text-blue-400 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition duration-300 absolute top-4 right-16 sm:top-4 sm:right-16"
        >
          {darkMode ? (
            <IoSunny className="w-6 h-6" />
          ) : (
            <IoMoon className="w-6 h-6" />
          )}
        </button>

        <button
          onClick={toggleMenu}
          className="p-2 text-blue-500 dark:text-blue-400 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition duration-300 absolute top-4 right-4 sm:hidden" 
        >
          {menuOpen ? (
            <IoClose className="w-8 h-8" />
          ) : (
            <IoMenu className="w-8 h-8" />
          )}
        </button>

        <nav
          className={`${
            menuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
          } transform transition-transform duration-300 ease-in-out fixed top-0 right-0 z-50 bg-gray-50 dark:bg-zinc-950 w-64 h-full py-8 shadow-lg sm:hidden`} 
        >
          <div className="flex justify-end px-4">
            <button
              onClick={toggleMenu}
              className="p-2 text-blue-500 dark:text-blue-400 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition duration-300"
            >
              <IoClose className="w-8 h-8" />
            </button>
          </div>

          <ul className="flex flex-col items-center gap-6 text-lg sm:text-xl lg:text-2xl px-4 mt-4">
            <li>
              <Link
                to="/"
                onClick={toggleMenu}
                className="text-blue-500 dark:text-blue-400 hover:text-gray-400 dark:hover:text-gray-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/sobre"
                onClick={toggleMenu}
                className="text-blue-500 dark:text-blue-400 hover:text-gray-400 dark:hover:text-gray-300"
              >
                Sobre
              </Link>
            </li>
            <li>
              <Link
                to="/projetos"
                onClick={toggleMenu}
                className="text-blue-500 dark:text-blue-400 hover:text-gray-400 dark:hover:text-gray-300"
              >
                Projetos
              </Link>
            </li>
            <li>
              <Link
                to="/contato"
                onClick={toggleMenu}
                className="text-blue-500 dark:text-blue-400 hover:text-gray-400 dark:hover:text-gray-300"
              >
                Contato
              </Link>
            </li>
          </ul>
        </nav>

        <nav className="hidden sm:flex">
          <ul className="flex gap-6 text-lg sm:text-xl lg:text-2xl">
            <li>
              <Link
                to="/"
                className="text-blue-500 dark:text-blue-400 hover:text-gray-400 dark:hover:text-gray-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/sobre"
                className="text-blue-500 dark:text-blue-400 hover:text-gray-400 dark:hover:text-gray-300"
              >
                Sobre
              </Link>
            </li>
            <li>
              <Link
                to="/projetos"
                className="text-blue-500 dark:text-blue-400 hover:text-gray-400 dark:hover:text-gray-300"
              >
                Projetos
              </Link>
            </li>
            <li>
              <Link
                to="/contato"
                className="text-blue-500 dark:text-blue-400 hover:text-gray-400 dark:hover:text-gray-300"
              >
                Contato
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
