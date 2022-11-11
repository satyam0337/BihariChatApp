import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import logo from "../assets/skkk.jpg"



const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "Skills",
    },
    {
      id: 4,
      link: "projects",
    }, 

    {
      id: 5,
      link: "statistics",
    },
    {
      id: 6,
      link: "contact",
    },

  ];

  return (
    <div

      className="flex justify-between items-center w-full h-20 px-4 text-white bg-black bg-opacity-50 bg-clip-padding blur-backdrop-filter fixed nav ">
      <div >
        <Link className="link-underline link-underline-black "   ><img src={logo} alt="S/K" className="rounded-full h-20  cursor-pointer" /></Link>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="nav-links px-4 cursor-pointer capitalize font-medium text-white hover:scale-105 hover:text-sky-400 font-medium duration-200 link-underline"
          >
            <Link offset={-100} to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link
                offset={-100}
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
