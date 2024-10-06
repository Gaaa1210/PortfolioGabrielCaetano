import React from "react";
import { Link } from "react-router-dom";

const Card = ({ title, description, github, demo, image, id }) => {
  return (
    <div className="bg-white dark:bg-zinc-900 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-2xl text-black dark:text-white font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>
        <div className="flex justify-between">
          <Link
            to={`/projects/${id}`} 
            className="bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-400 text-white font-bold py-2 px-4 rounded"
          >
            Ver detalhes
          </Link>
          <a
            href={github}
            className="bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-400 text-white font-bold py-2 px-4 rounded"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          
        </div>
      </div>
    </div>
  );
};

export default Card;
