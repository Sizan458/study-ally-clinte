import Lottie from "lottie-react";
import bannerAnimation from "../../../assets/banner.json"
import {  useTypewriter } from 'react-simple-typewriter'

const Banner = () => {
    const [typeEffect]=useTypewriter({
        words:["Assignment is boring.But with us is fun"],
        loop:1,
        typeSpeed:100,
        deleteSpeed:50,
        
        
    })
    return (
        <div className="w-[97%] mx-auto mt-1">
           <div className="hero bg-[#b3d9ff] dark:bg-emerald-200 dark:rounded-lg">
  <div className="hero-content flex-col md:flex-row-reverse ">
    <div>
    <Lottie animationData={ bannerAnimation} className="h-[190px] md:h-[360px] md:w-[310px] lg:w-[550px] lg:h-[450px]"></Lottie>
    </div>
    <div>
      <div>
      <h1 className="text-[1.1rem] text-center font-bold  md:text-[1.2rem] lg:text-[2rem]  dark:text-emerald-400" >{typeEffect}</h1>
      </div>
      
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;