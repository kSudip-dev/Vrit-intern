import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navigation from './Components/Navigation'
import CategoryManagement from './CollegeInfo/CategoryManagement'
import CollegeManagement from './CollegeInfo/CollegeManagement'
import CourseManagement from './CollegeInfo/CourseManagement'
import AffiliationManagement from './CollegeInfo/AffiliationManagement'
import SocialMediaManagement from './CollegeInfo/SocialMediaManagement'
import EventManagement from './CollegeInfo/EventManagement'
import GalaryManagement from './CollegeInfo/GalaryManagement'
import StaffManagement from './CollegeInfo/StaffManagement'

function App() {

  return (
    <>
      <Navigation/>
      <CategoryManagement/>
      <CollegeManagement/>
      <CourseManagement/>
      <AffiliationManagement/>
      <SocialMediaManagement/>
      <EventManagement/>
      <GalaryManagement/>
      <StaffManagement/>
    </>
  )
}

export default App
