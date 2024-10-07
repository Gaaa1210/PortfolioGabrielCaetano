import { Link } from "react-router-dom";
import { FaLinkedin, FaInstagram, FaGithubSquare } from "react-icons/fa";

export default function Footer() {
  

  return (
    <footer className="bg-gray-50 dark:bg-zinc-950 py-8">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-start mb-4 md:mb-0">
          
          <p className="text-gray-600 dark:text-gray-400">
          Conectando criatividade e inovação em cada projeto.
          </p>
          <div className="flex gap-4 mt-2">
            <Link to="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-gray-800 dark:text-gray-400" />
            </Link>
            <Link to="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-gray-800 dark:text-gray-400" />
            </Link>
            <Link to="https://github.com/" target="_blank" rel="noopener noreferrer">
              <FaGithubSquare className="text-gray-800 dark:text-gray-400" />
            </Link>
            
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-4 mt-4 md:mt-0">
          <Link
            to="/"
            className="text-gray-800 dark:text-gray-400 hover:text-gray-400 dark:hover:text-gray-300"
          >
            Home
          </Link>
          <Link
            to="/sobre"
            className="text-gray-800 dark:text-gray-400 hover:text-gray-400 dark:hover:text-gray-300"
          >
            Sobre
          </Link>
          <Link
            to="/projetos"
            className="text-gray-800 dark:text-gray-400 hover:text-gray-400 dark:hover:text-gray-300"
          >
            Projetos
          </Link>
          <Link
            to="/contato"
            className="text-gray-800 dark:text-gray-400 hover:text-gray-400 dark:hover:text-gray-300"
          >
            Contato
          </Link>
        </div>
      </div>
    </footer>
  );
}
