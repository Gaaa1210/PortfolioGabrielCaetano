import { NavLink } from "react-router-dom";
import logoGabriel from "/LogoGabrielWanderley.svg";

export default function Header() {
  return (
    <>
      <header className="bg-black flex flex-col md:flex-row text-white justify-between items-center p-4 md:p-6 lg:px-16">

        <div className="flex justify-center md:justify-start w-full md:w-auto mb-4 md:mb-0">
          <img src={logoGabriel} alt="logo Gabriel" className="w-32 md:w-40" />
        </div>
        
        <nav className="w-full md:w-auto">
          <ul className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-lg md:text-xl lg:text-2xl">
            <li>
              <NavLink to="/" className="hover:text-gray-400">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/sobre" className="hover:text-gray-400">
                Sobre
              </NavLink>
            </li>
            <li>
              <NavLink to="/projetos" className="hover:text-gray-400">
                Projetos
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
