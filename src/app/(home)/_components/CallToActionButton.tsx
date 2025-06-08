import { RightArrowIcon } from "@/icons";

const CallToActionButton = ({ className = "" }: { className?: string }) => {
  return (
    <>
      <div className={` ${className}`}>
        <button className="uppercase bg-primary w-[350px] md:w-[313px] h-[39px] rounded-[10px]  my-[23px] pl-[2px] flex items-center justify-center gap-[10px]  shadow-[2px_2px_10px_0_#10cbe0]  ">
          <span className="text-[1.25rem] font-bold leading-[100%] ">
            GET STARTED
          </span>
          <span>
            <RightArrowIcon />
          </span>
        </button>
        <div className="w-[313px] text-center  -mt-[18px] pt-[2px] md:pt-0 ">
          <span className="text-[12px] font-normal">
            1-minute quiz for personalized Insights
          </span>
        </div>
      </div>
    </>
  );
};

export default CallToActionButton;
