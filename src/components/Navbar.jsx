import React,{ useEffect, useState}  from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';

// Navbar component
const Navbar = () => {
  // State for the active link
  const [active, setActive] = useState('');
  // State for the toggle button
  const [toggle, setToggle] = useState(false);

  // Render
  return (
    // Navigation bar container
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className= "w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <Link 
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            // Clear active link
            setActive("");
            // Scroll to top of page
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Henrique Negrão&nbsp; {/* Empty space */}
            <span className="sm:block hidden">
            </span>
          </p>
        </Link>

        {/* Desktop Navigation */}

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {/* Map over navLinks constant */}
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title
                  ? "text-white"
                  : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Navigation */}

        <div className="sm:hidden flex flex-1 justify-end items-center">
          {/* Toggle button */}
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => {
              // Toggle the state of the button
              setToggle(!toggle)
            }}
          />
        </div>

        {/* Mobile menu */}
        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
            {/* Map over navLinks constant */}
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.title
                    ? "text-white"
                    : "text-secondary"
                } font-poppins font-medium cursor-pointer text-[16px]`}
                onClick={() => {
                  // Toggle the state of the button
                  setToggle(!toggle);
                  // Set active link
                  setActive(link.title);
                }}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

// Exporting the Navbar component
export default Navbar;