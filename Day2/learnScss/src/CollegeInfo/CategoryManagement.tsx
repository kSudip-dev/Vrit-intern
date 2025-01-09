import Category from "../assets/image/CategoryManagement.svg"

function CategoryManagement() {
  return (
    <div className="categoryContainer w-[728px] flex flex-col gap-[60px] items-center">
      <img src={Category} alt="Information Category Management" className="w-[410px] h-[285px]"/>
      <p className="w-[532px] text-center text-[16px] font-[400] leading-[160%] text-[#6B7280]">Your information is having an existential crisis! 🤔 Let’s help it find its purpose and get it organized!</p>
    </div>
  )
}

export default CategoryManagement
