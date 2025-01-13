import React, { useEffect, useState } from "react";
import starksicon from "../assets/images/starksicon.svg";
import ExecutivePros from "../assets/images/ExecutivePros.svg";
import iwaria from "../assets/images/iwaria.svg";
import stacai from "../assets/images/stacai.svg";
import beaupreneur from "../assets/images/Beaupreneur.svg";
import john from "../assets/images/john.svg";
import edwin from "../assets/images/edwin.svg";
import iwariaF from "../assets/images/iwaria-founder.svg";
import christiana from "../assets/images/christina.svg";
import executive from "../assets/images/executive-pro-ceo.svg";
const TabSwitcher = () => {
  const tabs = [
    {
      id: 1,
      name: "Starks",
      icon: starksicon,
      title: "Starks Associate",
      content:
        "Partnering with Forcythe was like finding a hidden gem. Their genuine interest in our success was palpable, and the continuous support post-launch has been a testament to their commitment. They’ve become more than a service provider; they’re a trusted ally.",
      user: "John, Management",
      image: john,
    },
    {
      id: 2,
      icon: ExecutivePros,
      title: "ExecutivePros",
      content:
        "The team understood the assignment and delivered very well. One of the things that stood them out was how they took our concepts and turned it into visually appealing designs that caught the eyes of our clients and made increased web engagements. Kudos!",
      user: "John, Management",
      image: executive,

    },
    {
      id: 3,
      icon: stacai,
      title: "Stac AI",
      content:
        "Forcythe is seriously amazing when it comes to coming up with new ideas. They took our rough ideas and turned them into something incredible online. Their team’s commitment to our vision was evident every step of the way.",
      user: "Edwin, Former CTO",
      image: edwin,

    },
    {
      id: 4,
      icon: iwaria,
      title: "Iwaria",
      content:
        "The moment we engaged Forcythe, it was clear they were in a league of their own. Their strategic approach to our project not only enhanced our online platform but also enriched our brand’s story, captivating our audience like never before.",
      user: "Iwaria, Founder",
      image: iwariaF,

    },
    {
      id: 5,
      icon: beaupreneur,
      title: "Beaupreneur",
      content:
        "I’m beyond impressed with the dedication Forcythe showed. They didn’t just deliver—they educated us, involving us in the creative process. The result? A website that truly feels like ours and speaks directly to our customers’ hearts.",
      user: "Christiana, Founder",
      image: christiana,

    },
  ];

  // State for active tab
  const [activeTab, setActiveTab] = useState(0);

  // Automatically switch tabs every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prevTab) => (prevTab + 1) % tabs.length); // Cycle through tabs
    }, 10000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [tabs.length]);

  return (
    <div className="w-full relative lg:px-28 mx-auto p-4">
      {/* Tab Navigation */}
      <div className="flex justify-between items-stretch mx-auto rounded-full mb-4 border-2 border-[#113460] md::w-full overflow-x-auto whitespace-nowrap">
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(index)}
            className={`w-full flex-shrink-0 md:flex-shrink mx-auto ${
              activeTab === 0 && "md:rounded-l-full"
            }  ${
              activeTab === 4 && "md:rounded-r-full"
            } font-medium flex items-center justify-center text-xl ${
              activeTab === index ? "md:bg-[#0C2645] text-white " : " "
            } transition-colors`}
          >
            <img
              src={tab.icon}
              className={`${tab.name == "Starks" ? "w-6" : "w-24 py-5"}`}
              width={50}
              height={50}
              alt={"company logos"}
            />
            {tab.name && tab.name}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className={`bg-[#0C2645] relative ${activeTab == 2 && "md:left-[11rem]"} ${activeTab == 3 && "md:left-[45%]"} ${activeTab === 4 && "md:left-[52%]"} ${activeTab == 1 && "md:left-20"} p-4 rounded-2xl text-white gap-3 flex flex-col md:flex-row items-center md:items-start w-fit shadow-md`}>
        <div className="">
          <h2 className="text-lg font-semibold">{tabs[activeTab].title}</h2>
          <p className="mt-2 w-[20rem]">{tabs[activeTab].content}</p>
          <p className="mt-5 ">{tabs[activeTab].user}</p>
        </div>

        <img src={tabs[activeTab].image} alt={tabs[activeTab].user + "image"} />
      </div>
    </div>
  );
};

export default TabSwitcher;
