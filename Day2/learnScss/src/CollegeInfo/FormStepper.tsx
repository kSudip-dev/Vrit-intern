import { useState } from "react";
import { BsBank } from "react-icons/bs";
import { AiFillDollarCircle } from "react-icons/ai";
import { IoMdSettings } from "react-icons/io";
import { HiPhoto } from "react-icons/hi2";
import { HiBriefcase } from "react-icons/hi";
import "../Styles/FormStepper.scss";

function FormStepper() {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [completedSteps, setCompletedSteps] = useState<number>(0);

  const steps = [
    { id: 1, name: "College Information", icon: <BsBank /> },
    { id: 2, name: "Course & Fee", icon: <AiFillDollarCircle /> },
    { id: 3, name: "Facilities", icon: <IoMdSettings /> },
    { id: 4, name: "Gallery", icon: <HiPhoto /> },
    { id: 5, name: "Placement", icon: <HiBriefcase /> },
  ];

  const handleNextClick = () => {
    if (currentStep < steps.length) {
      setCompletedSteps((prev) => Math.max(prev, currentStep)); // Mark current step as completed
      setCurrentStep((prev) => prev + 1); // Move to the next step
    }
  };

  const handlePrevClick = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1); // Move to the previous step
    }
  };
  const CalculateProgressWidth=()=>{
    return ((currentStep-1)/(steps.length-1))*100;
  }

  return (
    <div className="form-steper">
      <div className="steps">
        {steps.map((item) => (
          <div
            key={item.id}
            className={`step ${
              item.id === currentStep ? "currentStep" : ""
            } ${item.id <= completedSteps ? "isCompleted" : ""}`}
          >
            <div className="icons"><span>{item.icon}</span></div>
            <p>{item.name}</p>
          </div>
        ))}
      </div>
      <div className="stepper-buttons">
        <button
          onClick={handlePrevClick}
          className="btn border-[1px] px-[10px]"
          disabled={currentStep === 1} // Disable Prev button on the first step
        >
          Prev
        </button>
        <button
          onClick={handleNextClick}
          className="btn border-[1px] px-[10px]"
          disabled={currentStep === steps.length} // Disable Next button on the last step
        >
          Next
        </button>
      </div>
      <div className="progress-bar">
        <div className="progress" style={{width: `${CalculateProgressWidth()}%`}}></div>
      </div>
    </div>
  );
}

export default FormStepper;
