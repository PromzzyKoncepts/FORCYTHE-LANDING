import { FaPlay } from "react-icons/fa";

const BookButton = ({text, play }) => {
  return (
    <div className="relative group w-fit">
      <div className="cursor pointer  border-2 group-hover:border-[#064386] border-white px-6 py-3 border-dashed w-fit  flex items-center  rounded-full ">
        {text ? text : "Book a Call"} {play && <FaPlay size={13} />}
      </div>
      <button
        className="absolute flex items-center gap-2 -top-0.5 left-1  px-4 py-3 font-semibold text-black transition-all duration-500 bg-white border-black rounded-full group-hover:bg-[#064386] group-hover:border-blue-500 group-hover:text-white focus:outline-none w-full"
      >
        {text ? text : "Book a Call"} {play && <FaPlay size={13} />}
      </button>
    </div>
  );
};

export default BookButton;
