import React from "react";
import { FaChevronRight } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-zinc-200 md:py-20 py-14 ">
      <div className="flex flex-wrap gap-5 justify-between max-w-[1400px] mx-auto px-10">
        <div className="w-xl">
          <a href="#" className="text-3xl font-bold">
            Gr<span className="text-orange-800 uppercase">o</span>cify
          </a>

          <p className="text-zinc-600 mt-6 max-w-[350px]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima,
            suscipit perspiciatis.
          </p>

          <p className="text-zinc-600 mt-6">2026 &copy; All Rights Reserved</p>
        </div>

        <ul>
          <li>
            <h5 className="text-zinc-800 font-bold text-xl">Company</h5>
          </li>
          <li className="mt-6">
            <a href="#" className="text-zinc-800  hover:text-orange-500">
              About
            </a>
          </li>
          <li className="mt-6">
            <a href="#" className="text-zinc-800  hover:text-orange-500">
              FAQ
            </a>
          </li>
        </ul>

        <ul>
          <li className="text-zinc-800 font-bold text-xl">Support</li>

          <li className="mt-6">
            <a href="#" className="text-zinc-800  hover:text-orange-500">
              Support Center
            </a>
          </li>
          <li className="mt-6">
            <a href="#" className="text-zinc-800  hover:text-orange-500">
              Feedback
            </a>
          </li>
          <li className="mt-6">
            <a href="#" className="text-zinc-800  hover:text-orange-500">
              Contact Us
            </a>
          </li>
        </ul>

        <ul className="max-w-[340px]">
            <li>
                <h5 className="text-zinc-800 text-xl font-bold">Stay Connected</h5>
            </li>
            <li className="text-zinc-600 mt-6 ">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi!
            </li>
            <div className="flex justify-between p-1 mt-6 border-none bg-white rounded-xl ">
            <input
              type="text"
              name="text"
              id="text"
              placeholder="Enter email..."
              className="flex h-[5vh] px-3 focus:outline-none"
            />
            <button className="flex justify-center items-center text-xl text-white bg-gradient-to-b from-orange-300 to-orange-500 h-10 w-10 rounded-lg ">
             <FaChevronRight />
            </button>
          </div>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
