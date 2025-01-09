import College from "../assets/image/CollegeManagement.svg"

function CollegeManagement() {
  return (
    <div className="collegeContainer w-[728px] flex flex-col gap-[60px] items-center">
      <img src={College} alt="Information Category Management" className="w-[344px] h-[222px]"/>
      <p className="w-[532px] text-center text-[16px] font-[400] leading-[160%] text-[#6B7280]"><span className="text-[#1CA3FD] font-[600]">No colleges added yet?</span> Looks like your campus connections are waiting to go live! 🏫 Add colleges to start building the network!</p>
    </div>
  )
}

export default CollegeManagement
