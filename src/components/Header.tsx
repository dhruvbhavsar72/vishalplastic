import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Add this import

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <nav className="bg-white py-3">
        <div className="container">
          <div id="navbarNav" className='flex items-center justify-between' >
            <Link className="max-w-[203px] block" to="/">
              <img src="img/logo.png" alt="Logo" />
            </Link>

            <ul className={`flex items-center gap-[20px] m-0 xl:static fixed top-0 h-screen xl:h-auto flex-col xl:flex-row z-50 bg-white w-[calc(100%-50px)] p-0 xl:justify-end justify-center flex-1 ease-in-out duration-300 transition-all 
              ${isMenuOpen ? 'left-0' : '-left-full'}`}>
              <li className="">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="">
                <Link className="nav-link" to="/about">About us</Link>
              </li>
              {/* <li className="">
                <Link className="nav-link" to="/products">Our Products</Link>
              </li>
              <li className="">
                <Link className="nav-link" to="/gallery">Gallery</Link>
              </li>
              <li className="">
                <Link className="nav-link" to="/feedback">Feedback</Link>
              </li>
              <li className="">
                <Link className="nav-link" to="/contact">Contact us</Link>
              </li> */}
              <li className="nav-i">
                <button type="button" className="btn btn-gradient">
                  Download Brochure
                </button>
              </li>
            </ul>
            

            <button
              onClick={toggleMenu}
              className="xl:hidden focus:outline-none"
              aria-label="Toggle menu"
            >
              <div className="space-y-1">
                <span
                  className={`block h-0.5 w-6 bg-[#CC3232] transition-transform duration-300 ${isMenuOpen ? "rotate-45 translate-y-1.5" : ""
                    }`}
                ></span>
                <span
                  className={`block h-0.5 w-6 bg-[#CC3232] transition-opacity duration-300 ${isMenuOpen ? "opacity-0" : "opacity-100"
                    }`}
                ></span>
                <span
                  className={`block h-0.5 w-6 bg-[#CC3232] transition-transform duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                    }`}
                ></span>
              </div>
            </button>
          </div>

        </div>
      </nav>
    </header>
  );
};

export default Header;