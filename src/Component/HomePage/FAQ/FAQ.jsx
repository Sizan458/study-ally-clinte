import Lottie from "lottie-react";
import FaqAnimation from"../../../assets/FAQ.json"

const Faq = () => {
    return (
        <div  className="w-[97%] mx-auto mt-1">
            <div className="hero   bg-[#b3d9ff] dark:bg-emerald-200 dark:rounded-lg">
  <div className="hero-content flex-col md:flex-row">
    <Lottie animationData={FaqAnimation} className="md:w-[450px] md:h-[450px] lg:w-[580px]"></Lottie>
    <div className="flex justify-center">
    <div className="join join-vertical  ml-6 lg:h-[350px]">
  <div className="collapse collapse-arrow join-item text-black border   border-base-300 dark:text-emerald-500">
    <input type="radio" name="my-accordion-4"  /> 
    <div className="collapse-title text-xl font-medium ">
    How do I submit assignment  on website?
    </div>
    <div className="collapse-content "> 
      <p className=" text-black dark:text-emerald-500" >Go to assignment page .There you will see a  from</p>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item text-black border border-base-300  dark:text-emerald-500">
    <input type="radio" name="my-accordion-4" /> 
    <div className="collapse-title text-xl font-medium">
     Make given by expert team ?
    </div>
    <div className="collapse-content"> 
      <p className=" text-black dark:text-emerald-500">Yes</p>
    </div>
  </div>
  <div className="collapse collapse-arrow text-black join-item border border-base-300">
    <input type="radio" name="my-accordion-4" /> 
    <div className="collapse-title text-xl font-medium  dark:text-emerald-500">
     Customer  service  time ?
    </div>
    <div className="collapse-content"> 
      <p className=" text-black dark:text-emerald-500">24/7</p>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item text-black border border-base-300  dark:text-emerald-500">
    <input type="radio" name="my-accordion-4" /> 
    <div className="collapse-title text-xl font-medium">
      Can I update my assignments ?
    </div>
    <div className="collapse-content"> 
      <p className=" text-black dark:text-emerald-500">Yes</p>
    </div>
  </div>
</div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Faq;