import College from "../assets/image/CollegeManagement.svg"

function AffiliationManagement() {
  return (
      <div className="collegeContainer w-[728px] flex flex-col gap-[60px] items-center">
      <img src={College} alt="Information Category Management" className="w-[344px] h-[222px]"/>
      <p className="w-[532px] text-center text-[16px] font-[400] leading-[160%] text-[#6B7280]">Your affiliations are more elusive than a student skipping class! 🎓 Time to add some connections and make it official</p>
    </div>
  )
}

export default AffiliationManagement
