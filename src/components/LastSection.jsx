import React, { useState } from "react";
import aitakeover from "../assets/images/aitakeover.webp";
import cvst from "../assets/images/cvst.webp";
import cvsca from "../assets/images/cvsca.webp";
import TextAnimation from "../utils/TextAnimation";
import BookButton from "../utils/BookButton";

const LastSection = () => {
  const items = [
    {
      image: aitakeover,
      title: "Blog",
      desc: "The Reformist",
      date: "May 29th, 2024",
      caption: "Will AI take over Art",
    },
    {
      image: cvst,
      title: "Blog",
      desc: "The Reformist",
      date: "May 29th, 2024",
      caption: "Cryptocurrency vs Tokens",
    },
    {
      image: cvsca,
      title: "Blog",
      desc: "The Reformist",
      date: "May 29th, 2024",
      caption: "Cryptocurrency vs Crypto asset",
    },
  ];

  return (
    <div className="px-5 md:px-28 my-10">
      <div className="flex flex-col md:flex-row gap-4 justify-between py-5">
        <div className="text-3xl md:text-4xl">
          <TextAnimation>Read our articles, news and product blog</TextAnimation> 
        </div>
        <BookButton text="Visit Blog" play="true" />
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5  lg:mb-24">
        {items.map((item, index) => {
          const [isLoaded, setIsLoaded] = useState(false); // Track loading state

          return (
            <div
              key={index}
              className="w-full  rounded-[1.3rem] relative overflow-hidden h-[25rem] cursor-pointer group hover:shadow-sm   hover:shadow-secondary transition-all duration-500"
            >
              {/* Loader - visible when image hasn't loaded */}
              {!isLoaded && (
                <div className="bg-secondary z-0 w-full h-full absolute top-0 left-0 bg-opacity-10 rounded-[1.3rem] animate-pulse"></div>
              )}

              {/* Image */}
              <img
                src={item.image}
                className={`w-full h-[68%] rounded-[1.3rem] transition-transform object-cover  duration-300 transform group-hover:scale-105 ${
                  isLoaded ? "opacity-100" : "opacity-0"
                }`} // Hide the image until it's loaded
                alt={item.caption}
                onLoad={() => setIsLoaded(true)} // Set loaded state when image loads
                onError={() => setIsLoaded(true)} // Handle image load error
              />

              {/* Content */}
              <div className="pl-5 py-2 my-2.5 relative before:absolute before:w-[1px] before:h-[90%] before:bg-white before:left-0 before:top-[50%] before:-translate-y-[50%] group-hover:translate-x-4 transition-all duration-300 ease flex flex-col gap-1">
                <h3 className="text-xl">{item.title}</h3>
                <div className="flex items-center opacity-60 ">
                  <span>{item.desc}</span>
                  <div className="h-2 w-2 rounded-full bg-white mx-[6px]"></div>
                  <span>{item.date}</span>
                </div>
                <h2 className="text-lg md:text-2xl font-semibold line-clamp-2">
                  {item.caption}
                </h2>
              </div>
            </div>
          );
        })}
      </div>

      <div className="max-w-[45rem] mx-auto">
        <h2 className="text-[2rem] text-center leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.6rem] lg:leading-[3rem] mt-7 mb-6"><span class="text-secondary">Ready to Scale?</span> <br/> Join successful brands that chose us as their <span class="text-secondary"> growth accelerator</span></h2>
      </div>
      <div className="flex justify-center py-6"><BookButton /></div>
    </div>
  );
};

export default LastSection;
