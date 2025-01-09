import Gallery from "../assets/image/GalleryManagement.svg"

function GalaryManagement() {
  return (
    <div className="collegeContainer w-[728px] flex flex-col gap-[36px] items-center">
    <img src={Gallery} alt="Information Category Management" className="w-[319px] h-[269px]"/>
    <p className="w-[532px] text-center text-[16px] font-[400] leading-[160%] text-[#6B7280]"><span className="text-[#1CA3FD] font-[600]">No albums created yet?</span> Looks like your gallery’s waiting for its first semester! 📚 Let’s start adding some memories!</p>
  </div>
  )
}

export default GalaryManagement
