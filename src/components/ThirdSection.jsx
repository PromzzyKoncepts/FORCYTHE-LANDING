import React from "react";
import TextAnimation from "../utils/TextAnimation";
import TabSwitcher from "./AutoSwitchTab";

const ThirdSection = () => {
  return (
    <div>
      <div className=" text-[2rem] leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.6rem] lg:leading-[3.5rem] pt-16 max-w-4xl mx-auto text-center">
        <TextAnimation>
          Discover the{" "}
          <span className="text-secondary">transformative stories</span> of
          startups that scaled new heights with us
        </TextAnimation>
      </div>

      <TabSwitcher />
    </div>
  );
};

export default ThirdSection;
