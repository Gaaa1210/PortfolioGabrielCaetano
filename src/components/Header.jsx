import { Link } from "react-router-dom";
import logoGabriel from "/LogoGabrielWanderley.svg";
import { IoMoon, IoSunny } from "react-icons/io5";

import React, { useState, useEffect } from "react";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);

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

  return (
    <>
      <header className="h-40 bg-gray-50 text-white flex flex-col md:flex-row justify-between items-center p-4 md:p-2 lg:px-16 dark:bg-zinc-950 dark:text-gray-200">
        <button
          onClick={toggleDarkMode}
          className="absolute top-4 right-4 p-2 text-blue-500 dark:text-blue-400 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition duration-300"
        >
          {darkMode ? (
            <IoSunny className="w-6 h-6" />
          ) : (
            <IoMoon className="w-6 h-6" />
          )}
        </button>
        <div className="flex justify-center md:justify-start w-full md:w-auto mb-4 md:mb-0">
          <img src={logoGabriel} alt="logo Gabriel" className="w-32 md:w-40" />
        </div>

        <nav className="w-full md:w-auto">
          <ul className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-lg md:text-xl lg:text-2xl">
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
                className=" text-blue-500 dark:text-blue-400 hover:text-gray-400 dark:hover:text-gray-300"
              >
                Projetos
              </Link>
            </li>
            <li>
              <Link
                to="/contato"
                className=" text-blue-500 dark:text-blue-400 hover:text-gray-400 dark:hover:text-gray-300"
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
