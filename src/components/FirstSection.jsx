import React, { useState, useEffect } from "react";
import worldMap from "../assets/images/header-background.svg";
import BookButton from "../utils/BookButton";
import TextAnimation from "../utils/TextAnimation";

const FirstSection = () => {
  const fullText = "We  build products that shape a better future";
  const [displayedText, setDisplayedText] = useState(""); // Holds the currently typed text

  useEffect(() => {
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length - 1) {
        setDisplayedText((prev) => prev + fullText[currentIndex]); // Append the next character
        currentIndex++;
      } else {
        clearInterval(typingInterval); // Stop typing when done
      }
    }, 100); // Typing speed (adjust if needed)

    return () => clearInterval(typingInterval); // Cleanup on unmount
  }, [fullText]);

  // Split the displayed text and check if the word "products" is included
  const words = displayedText.split(" ").map((word, index) => {
    if (word === "products") {
      return (
        <span key={index} className="text-secondary">
          {word}{" "}
        </span>
      );
    }
    return word + " "; // Add a space after each word
  });

  return (
    <div
      style={{
        backgroundImage: `url(${worldMap})`, // Use the imported image
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover", // Ensure it covers the container
        backgroundPosition: "top center", // Adjust position if needed
      }}
      className="px-5 md:px-28 relative"
    >
      <div className="bg-white bg-opacity-10 p-4 lg:p-10 rounded-[2rem] h-full md:h-[25rem] flex justify-between flex-col">
        <div className="break-words text-wrap text-[2.5rem] sm:text-[4rem] lg:text-[5rem] leading-[1] w-full md:w-[80%]">
          <h1 className="text-content">{words}</h1>
        </div>

        {/* make the smooth text reveal aniamtion that wraps here*/}

        <div className="md:w-[62%] opacity-80 text-lg py-6">
					<TextAnimation>We’re the architects of digital excellence across industries. We redefine business with cutting-edge digital strategies that invokes sector-wide transformation.</TextAnimation> 
				</div>

        <div className="text-black">
          <BookButton play={true} />
        </div>
      </div>
      <h3 className="text-2xl md:text-3xl lg:text-5xl text-center pt-16 pb-5">
        Success in <span className="text-secondary">Motion</span> - Our clients'
        journey
      </h3>
    </div>
  );
};

export default FirstSection;
