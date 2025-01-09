import { FaArrowRight } from "react-icons/fa6";
interface ConfigurationProps {
  text: string;
}

function ConfigurationCard({ text }: ConfigurationProps) {
  return (
    <div className="w-[344px] h-[80px] flex items-center">
      <div className="w-[325px] h-[80px] bg-[#FBFBFB] rounded-[8px] flex  items-center fill-[var(--Foundation-White-white-500)] fill-[#FBFBFB] stroke-[var(--Foundation-neutral-neutral-50)] stroke-[#E7E6E7] stroke-[0.5px] drop-shadow-[0px_2px_6px_rgba(16,24,40,0.06)] border-[0.5px] border-[#D9D9D9]">
        <div className="div h-[80px] w-[10px] bg-[#1CA3FD] rounded-tl-[8px] rounded-bl-[8px] "></div>
        <p className="text-[#41393E] text-[18px] font-[400] relative left-[38px] leading-[27px]">
          {text}
        </p>
      </div>
      <div className="outerCircle h-[40px] w-[40px] flex items-center  relative left-[-18px] border-[0.5px] border-[#D9D9D9] py-[2px]pt-[2.95px] rounded-full">

        <div className="innerCircle w-[20px] h-[40px] bg-[#FFF] flex items-center absolute left-[47%]"></div>
        <div className="innerCircle w-[20px] h-[38.5px] bg-[#FFF] flex items-center absolute left-[45%] top-[1%]"></div>
      <div className="circle w-[36px] h-[36px] flex items-center bg-[#1CA3FD] justify-center rounded-[60px] relative left-[2.93px]">

        
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="21"
          height="21"
          viewBox="0 0 21 21"
          fill="none"
          className="w-[20px] h-[20px]"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10.8578 4.47503C11.1996 4.13332 11.7536 4.13332 12.0953 4.47503L17.3453 9.72503C17.687 10.0667 17.687 10.6208 17.3453 10.9625L12.0953 16.2125C11.7536 16.5542 11.1996 16.5542 10.8578 16.2125C10.5161 15.8708 10.5161 15.3167 10.8578 14.975L14.6141 11.2188L4.47656 11.2188C3.99331 11.2188 3.60156 10.827 3.60156 10.3438C3.60156 9.8605 3.99331 9.46875 4.47656 9.46875H14.6141L10.8578 5.71247C10.5161 5.37076 10.5161 4.81674 10.8578 4.47503Z"
            fill="white"
          />
        </svg>
        </div>
      </div>
      </div>
  );
}

export default ConfigurationCard;
