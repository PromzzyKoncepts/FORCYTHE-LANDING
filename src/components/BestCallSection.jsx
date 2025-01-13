import React from "react";
import icon from "../assets/images/layers-three.svg";
import TextAnimation from "../utils/TextAnimation";

const BestCallSection = () => {
  const data = [
    {
      title: "Experience",
      desc: "Decades of collective wisdom. Leverage our extensive experience to avoid common pitfalls and accelerate your business growth.",
    },
    {
      title: "Quick Support",
      desc: "We are your reliable partner, always there when you need us, ensuring smooth operations at every stage of your growth.",
    },
    {
      title: "Cost Savings",
      desc: "Maximising impact, minimising costs efficiency is key. We provide cost-effective solutions without compromising on quality.",
    },
  ];
  return (
    <div className="px-5 md:px-28 bg-gradient-to-t from-[#0B2442] to-transparent py-16">
      <div>
        <div className="text-5xl text-secondary text-center my-10">
          <TextAnimation>
            Your best call for B2B /B2C product innovation
          </TextAnimation>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 md:gap-8">
          {data.map((item, index) => (
            <div className="flex itens-start gap-5 flex-col  w-full bg-[#030516] rounded-2xl px-8 sm:px-10 sm:py-16 py-12 hover:shadow-secondary animate transition-all duration-300 ease ">
              <img src={icon} className="w-10" alt={item.title + "icon"} />
              <h3 className="text-2xl">{item.title}</h3>
              <p className="opacity-70">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestCallSection;
