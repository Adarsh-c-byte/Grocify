import React, { useEffect, useState } from "react";
import { Heart } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import { Search } from "lucide-react";
import { Menu } from "lucide-react";
import { Logs } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showMenu, setShowMen] = useState(false);
  const [isScrolled, setisScrolled] = useState(false);

  const toggelMenu = () => {
    setShowMen(!showMenu);
  };

  useEffect(() => {
    const handleScroll = () => {
      setisScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll',handleScroll)
    return ()=> window.removeEventListener('scroll',handleScroll)
  },[]);

  return (
    <header className={`bg-white  fixed top-0 right-0 left-0 z-50 ${isScrolled ? 'shadow-lg' : ''}`}>
      <nav className=" max-w-[1400px] mx-auto px-10 md:h-[14vh] h-[12vh] items-center flex justify-between">
        {/* logo */}

        <Link to="/" className="text-3xl font-bold">
          Gr<span className="text-orange-600 uppercase">o</span>cify
        </Link>

        {/* Desktop menu */}

        <ul className="md:flex items-center gap-x-15 hidden ">
          <li>
            <a
              href="#"
              className="font-semibold tracking-wider text-orange-500 "
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-semibold tracking-wider text-zinc-700 hover:text-orange-400"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-semibold tracking-wider text-zinc-700 hover:text-orange-400"
            >
              Process
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-semibold tracking-wider text-zinc-700 hover:text-orange-400"
            >
              Contact Us
            </a>
          </li>
        </ul>

        {/* Nav Action */}

        <div className="flex items-center gap-x-5">
          {/* input field */}
          <div className="md:flex p-1 border-2 border-orange-400 rounded-full hidden">
            <input
              type="text"
              name="text"
              id="text"
              placeholder="Search..."
              className="flex h-[5vh] px-3 focus:outline-none"
            />
            <button className="flex justify-center items-center text-white bg-gradient-to-b from-orange-300 to-orange-500 h-10 w-10 rounded-full ">
              <Search />
            </button>
          </div>

          <a href="#" className="text-2xl text-zinc-700">
            <Heart />
          </a>
          <a href="#" className="text-2xl text-zinc-700">
            <ShoppingCart />
          </a>

          {/* Hamburger */}

          <a href="#" className="text-zinc-700 md:hidden " onClick={toggelMenu} >
            {showMenu ? <Logs size={26} /> : <Menu size={26} />}
          </a>

          {/* mobail menu */}

          <ul
            className={`flex flex-col gap-y-9 bg-orange-500/15 backdrop-blur-xl shadow-lg rounded-xl p-8 items-center gap-x-15 md:hidden absolute top-25 -left-full transform -translate-x-1/2 transition-all duration-700 ${showMenu ? "left-1/2" : ""}`}
          >
            <li>
              <a
                href="#"
                className="font-semibold tracking-wider text-orange-500 "
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-semibold tracking-wider text-zinc-700 hover:text-orange-400"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-semibold tracking-wider text-zinc-700 hover:text-orange-400"
              >
                Process
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-semibold tracking-wider text-zinc-700 hover:text-orange-400"
              >
                Contact Us
              </a>
            </li>

            <li className="flex p-1 border-2 border-orange-400 rounded-full md:hidden">
              <input
                type="text"
                name="text"
                id="text"
                placeholder="Search..."
                className="flex h-[5vh] px-3 focus:outline-none"
              />
              <button className="flex justify-center items-center text-white bg-gradient-to-b from-orange-300 to-orange-500 h-10 w-10 rounded-full ">
                <Search />
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
