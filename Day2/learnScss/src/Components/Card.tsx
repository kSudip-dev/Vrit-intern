import AffiliationManagement from "../CollegeInfo/AffiliationManagement"
import CategoryManagement from "../CollegeInfo/CategoryManagement"
import CollegeManagement from "../CollegeInfo/CollegeManagement"
import ConfigurationCard from "../CollegeInfo/ConfigurationCard"
import CourseManagement from "../CollegeInfo/CourseManagement"
import EventManagement from "../CollegeInfo/EventManagement"
import GalaryManagement from "../CollegeInfo/GalaryManagement"
import SocialMediaManagement from "../CollegeInfo/SocialMediaManagement"
import StaffManagement from "../CollegeInfo/StaffManagement"
import "../Styles/Card.scss"

function Card() {
  return (
    <div className="w-[100%] flex  flex-wrap py-[50px]">
      <ConfigurationCard text={"Discipline"}/>
      <CategoryManagement/>
      <CollegeManagement/>
      <CourseManagement/>
      <AffiliationManagement/>
      <SocialMediaManagement/>
      <EventManagement/>
      <GalaryManagement/>
      <StaffManagement/>

    </div>
  )
}

export default Card
