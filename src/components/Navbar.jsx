import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { motion } from "framer-motion";

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  const navLinks = [
    { id: "about", title: "About" },
    { id: "projects", title: "Projects" },
    { id: "contact", title: "Contact" },
  ];
  const bounce = {
    whileHover: { scale: 1.25, transition: { type: 'ease', stiffness: 300 } }
  };

  return (
    <nav className="flex items-center justify-between py-5 px-4 sm:px-8 lg:px-16 w-full fixed top-0 bg-primary z-9999">
      <div className="flex items-center gap-2">
        <p className="text-white text-lg sm:text-xl font-bold cursor-pointer flex">
          Justin Lau &nbsp;
        </p>
      </div>

      <ul className="hidden sm:flex flex-row space-x-4 md:space-x-10 z-9999">
        {navLinks.map((link) => (
          <motion.div
          key={link.id}
          borderRadius="lg" 
          overflow="hidden" 
          boxShadow="lg"
          initial="hidden"
          animate="visible"
          align="center"
          {...bounce}>
          <li
            
            className={`${active === link.title
              ? "text-secondary"
              : "text-white"
              } hover:text-secondary text-lg sm:text-xl font-medium cursor-pointer`}
            onClick={() => setActive(link.title)}
          >
            <Link
              activeClass="active"
              to={link.id}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              {link.title}
            </Link>
          </li>
          </motion.div>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <button
          className="w-7 h-7 relative cursor-pointer"
          onClick={() => setToggle(!toggle)}
        >
          <div className={`absolute w-1/2 h-[1px] bg-white rounded-full transform transition-transform duration-500 ${toggle ? "rotate-45 -translate-x-2 translate-y-2" : "translate-x-1/2 -translate-y-1/2"}`} />
          <div className={`absolute w-1/2 h-[1px] bg-white rounded-full transform transition-transform duration-500 ${toggle ? "-rotate-45 -translate-x-2 -translate-y-1" : "translate-x-1/2 translate-y-1/2"}`} />
        </button>

        <div className={`overflow-hidden transition-all duration-500 ease-in-out transform ${!toggle ? 'translate-y-full h-0 opacity-0' : 'translate-y-0 h-auto opacity-100'} p-6 bg-black absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl`}>
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <motion.div
              key={link.id}
              borderRadius="lg" 
              overflow="hidden" 
              boxShadow="lg"
              initial="hidden"
              animate="visible"
              align="center"
              {...bounce}>
              <li
                
                className={`${active === link.title
                  ? "text-secondary"
                  : "text-tertiary"
                  } font-poppins text-base sm:text-lg font-medium cursor-pointer`}
              >
                
                <Link
                  activeClass="active"
                  to={link.id}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  {link.title}
                </Link>
                
              </li>
              </motion.div>

            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
