import arc from "../assets/images/arc.svg";
import TextAnimation from "../utils/TextAnimation";

const ArcSection = () => {
  return (
    <div className=" relative bg-gradient-to-b from-[#0B2442] to-transparent flex flex-col items-center justify-center py-16">
      <img src={arc} alt="arc image" />
      <div className="absolute -translate-x-[50%] left-[50%] flex items-center justify-center">
        <div>
          <div className="text-lg md:text-2xl lg:text-4xl lg:max-w-[70%] md:max-w-[80%] mx-auto text-center mt-14 md:mt-0">
            <TextAnimation>
              We build solutions that help{" "}
              <span className="text-secondary">businesses</span> of all sizes to{" "}
              <span className="text-secondary">scale</span>
            </TextAnimation>
          </div>

          <div className="flex gap-5 lg:mt-9 justify-center items-center">
            <div className="flex flex-col gap-2">
              <h3 className="text-secondary text-xl md:text-4xl">50+</h3>
              Clients
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-secondary text-xl md:text-4xl">120+</h3>
              Projects
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-secondary text-xl md:text-4xl">10+</h3>
              Team Leads
            </div>
            <div className="flex flex-col gap-2 ">
              <h3 className="text-secondary text-xl md:text-4xl">10+</h3>
              Glorious Years
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArcSection;
