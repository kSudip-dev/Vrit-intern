import Staff from "../assets/image/StaffManagement.svg"

function StaffManagement() {
  return (
    <div className="collegeContainer w-[728px] flex flex-col gap-[36px] items-center">
    <img src={Staff} alt="Information Category Management" className="w-[266px] h-[266px]"/>
    <p className="w-[532px] text-center text-[16px] font-[400] leading-[160%] text-[#6B7280]"><span className="text-[#1CA3FD] font-[600]">No members  yet?</span> Looks like your team is playing hide and seek—only they forgot to come out!  Let’s find some new faces!</p>
  </div>
  )
}

export default StaffManagement
