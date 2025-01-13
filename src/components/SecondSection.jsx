import React, { useEffect, useState } from "react";
import EmblaCarousel from "../utils/EmblaCarousel";
import stac from "../assets/images/stac.svg";
import africaFund from "../assets/images/africaFund.svg";
import execPro from "../assets/images/exec-pro.svg";
import starks from "../assets/images/starks.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SecondSection = () => {
  const SLIDES = [
    stac,
    africaFund,
    execPro,
    starks,
    africaFund,
    stac,
    africaFund,
    execPro,
    starks,
    africaFund,
  ];

  const options = { loop: true, direction: "ltr", duration: 60 };

  const [slidesToShow, setSlidesToShow] = useState(4); // Default for desktop

  useEffect(() => {
    const updateSlidesToShow = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setSlidesToShow(1); // Mobile
      } else if (width < 1024) {
        setSlidesToShow(3); // Tablet
      } else {
        setSlidesToShow(4); // Desktop
      }
    };

    // Set initial value
    updateSlidesToShow();

    // Add event listener to update on resize
    window.addEventListener("resize", updateSlidesToShow);

    // Cleanup listener on unmount
    return () => window.removeEventListener("resize", updateSlidesToShow);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow,
    slidesToScroll: 5,
    autoplay: true,
    speed: 20000,
    loop: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    rtl: true,
    pauseOnFocus: false,
    pauseOnHover: false,
  };

  return (
    <div>
      <EmblaCarousel options={options} slides={SLIDES} />
      <div className="overflow-hidden">
        <Slider {...settings}>
          {SLIDES.map((item, index) => (
            <div key={index}>
              <img src={item} alt="carousel image" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SecondSection;
