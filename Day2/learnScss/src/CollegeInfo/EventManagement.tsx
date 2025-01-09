import Event from "../assets/image/EventManagement.svg"

function EventManagement() {
  return (
    <div className="collegeContainer w-[728px] flex flex-col gap-[40px] items-center">
    <img src={Event} alt="Information Category Management" className="w-[270px] h-[158px]"/>
    <p className="w-[532px] text-center text-[16px] font-[400] leading-[160%] text-[#6B7280]"><span className="text-[#1CA3FD] font-[600]">No Events yet?</span> Looks like your calendar’s taking a nap! 😴 Time to wake it up and plan something awesome!</p>
  </div>
  )
}

export default EventManagement
