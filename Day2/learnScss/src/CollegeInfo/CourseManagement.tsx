import Course from "../assets/image/CourseManagement.svg"

function CourseManagement() {
  return (
    <div className="collegeContainer w-[728px] flex flex-col gap-[60px] items-center">
      <img src={Course} alt="Information Category Management" className="w-[348px] h-[264px]"/>
      <p className="w-[532px] text-center text-[16px] font-[400] leading-[25.6px] text-[#6B7280]">"No courses, no problems… until the students arrive! Let’s get started!" 😅🖥️</p>
    </div>
  )
}

export default CourseManagement
