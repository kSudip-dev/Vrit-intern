import Social from "../assets/image/SocialMediaManagement.svg"

function SocialMediaManagement() {
  return (
    <div className="collegeContainer w-[728px] flex flex-col gap-[36px] items-center">
      <img src={Social} alt="Information Category Management" className="w-[226px] h-[265px]"/>
      <p className="w-[532px] text-center text-[16px] font-[400] leading-[160%] text-[#6B7280]"><span className="text-[#1CA3FD] font-[600]">No links added yet?</span> Looks like social connections are waiting to go live! 🌐 Add channels to start building the network!</p>
    </div>
  )
}

export default SocialMediaManagement
