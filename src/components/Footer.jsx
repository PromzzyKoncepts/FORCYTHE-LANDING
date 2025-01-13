import React from "react";
import {
  FaFacebook,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaLinkedinIn,
  FaPodcast,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import logo from "../assets/images/forcythe.svg";
import { FiYoutube } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="flex flex-col gap-5 py-10 px-5 md:px-28 bg-bgsecondary">
      <div className="lg:grid grid-cols-3 flex flex-wrap items-start md:gap-9">
        <div>
          <div className="border rounded-full flex pl-5">
            <input
              type="email"
              name="email"
              placeholder="Your Email Address"
              id="email"
							className="w-full outline-0 border-0 bg-transparent placeholder:text-sm"
            />
            <button className="bg-white py-4 text-primary px-5 rounded-r-full text-sm">Subscribe</button>
          </div>
					<div className="flex items-center gap-1 py-4">

          <input  type="radio" name="" id="" className="checked:bg-transparent" /> <span className="text-sm">I agree to recieve other
          notifications from Forcythe</span>
					</div>
        </div>

        <div className="flex flex-col gap-5  mt-5 md:mt-0 items-start">
          <div className="flex items-center ">
            <img src={logo} alt="Forcythe logo" />
          </div>
          <div>
            <p>We are the growth company for businesses looking to scale. </p>
            <p className="">
              We are dedicated to transforming businesses with bespoke digital
              solutions that drive growth.
            </p>
          </div>

          <div className="md:flex gap-2 text-secondary hidden ">
            <a href="http://" target="_blank" rel="noopener noreferrer" className="p-2 border-secondary border rounded-full">
              <FaFacebookF />
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer" className="p-2 border-secondary border rounded-full">
              <FaInstagram />
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer" className="p-2 border-secondary border rounded-full">
              <FaXTwitter />
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer" className="p-2 border-secondary border rounded-full">
              <FaLinkedinIn />
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer" className="p-2 border-secondary border rounded-full">
              <FiYoutube />
            </a>
            
            <a href="http://" target="_blank" rel="noopener noreferrer" className="p-2 border-secondary border rounded-full">
              <FaPodcast />
            </a>
          </div>
        </div>

        <div className="flex gap-3 mt-5 md:mt-0 flex-col lg:items-center r">
          <h4 className="text-2xl">Company</h4>
          <div className="flex flex-col gap-1">
            <Link to="/about">About</Link>
            <Link to="/about">Services</Link>
            <Link to="/about">Portfolio</Link>
            <Link to="/about">Studio</Link>
            <Link to="/about">Foundation</Link>
            <Link to="/about">Careers</Link>
            <Link to="/about">Blog</Link>
          </div>
        </div>
      </div>
      <div className="flex gap-2 items-center justify-center text-secondary md:hidden ">
            <a href="http://" target="_blank" rel="noopener noreferrer" className="p-2 border-secondary border rounded-full">
              <FaFacebookF />
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer" className="p-2 border-secondary border rounded-full">
              <FaInstagram />
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer" className="p-2 border-secondary border rounded-full">
              <FaXTwitter />
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer" className="p-2 border-secondary border rounded-full">
              <FaLinkedinIn />
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer" className="p-2 border-secondary border rounded-full">
              <FiYoutube />
            </a>
            
            <a href="http://" target="_blank" rel="noopener noreferrer" className="p-2 border-secondary border rounded-full">
              <FaPodcast />
            </a>
          </div>
			<hr></hr>
			<div>
				Copyright &copy; Forcythe. All rights reserved.
			</div>
    </footer>
  );
};

export default Footer;
