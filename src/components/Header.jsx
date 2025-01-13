import { Link } from "react-router-dom";
import logo from "../assets/images/forcythe.svg";
import BookButton from "../utils/BookButton";
import { HiMenuAlt2 } from "react-icons/hi";
import { useState } from "react";
const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="fixed top-0 left-0 w-full z-50 backdrop-blur-md  flex items-center justify-between py-7 md:px-24 px-5 lg:px-28 shadow-md">
      <div className="flex items-center gap-20">
        <div className="flex items-center ">
          <img src={logo} alt="Forcythe logo" />
        </div>

        <nav className="hidden md:flex gap-4 items-center">
          <Link to={`about`}>About</Link>
          <Link to={`services`}>Services</Link>
          <Link to={`portfolio`}>Portfolio</Link>
          <Link to={`studio`}>Studio</Link>
          <Link to={`foundation`}>Foundation</Link>
        </nav>
      </div>

      <div className="hidden md:block">
        <BookButton />
      </div>
      <div className="relative md:hidden block">
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="px-3 cursor-pointer py-2.5  rounded-xl bg-white bg-opacity-10 block md:hidden"
        >
          <HiMenuAlt2 size={22} />
        </button>

        {showMenu && (
          <div>
            <nav className="md:hidden absolute bg-gradient-to-t from-black to-[#232237] shadow-sm right-0 top-16  shadow-secondary flex gap-5 text-lg flex-col rounded-xl py-14 px-10 w-[15rem]">
              <Link to={`about`}>About</Link>
              <Link to={`services`}>Services</Link>
              <Link to={`portfolio`}>Portfolio</Link>
              <Link to={`studio`}>Studio</Link>
              <Link to={`foundation`}>Foundation</Link>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
