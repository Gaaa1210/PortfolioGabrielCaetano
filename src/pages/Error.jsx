import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MdLaptop, MdOutlineCoPresent, MdErrorOutline } from "react-icons/md";
import { IoMoon, IoSunny } from "react-icons/io5";

export default function Error() {
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
      <div className="relative flex flex-col justify-center items-center h-screen bg-gray-50 dark:bg-zinc-950">
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

        <div className="text-center">
          <h1 className="text-6xl font-bold text-black dark:text-white mb-4">404</h1>
          <h2 className="text-3xl font-semibold text-black dark:text-white mb-4">
            Esta página não existe.
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Desculpe, não conseguimos encontrar a página que você está procurando.
          </p>
          <div className="space-y-4">
            <Link className="flex items-center justify-center text-blue-500 dark:text-blue-400 hover:underline">
              <MdLaptop className="mr-2" /> Projetos
            </Link>
            <Link className="flex items-center justify-center text-blue-500 dark:text-blue-400 hover:underline">
              <MdOutlineCoPresent className="mr-2" /> Sobre
            </Link>
            <Link className="flex items-center justify-center text-blue-500 dark:text-blue-400 hover:underline">
              <MdErrorOutline className="mr-2" /> Contato
            </Link>
          </div>
          <div className="mt-10">
            <Link className="block text-blue-500 dark:text-blue-400 hover:underline">
              &larr; Voltar para a página inicial
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
