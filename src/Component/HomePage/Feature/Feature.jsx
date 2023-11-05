import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Feature = () => {
  //using the aos
  useEffect(() =>{
    AOS.init({duration: 3000});
  },[])
    return (
        <div className="bg-[#99b3ff]  hero-content  w-[95%]     mx-auto my-2 grid  grid-cols-1 gap-3 dark:rounded-xl  dark:bg-teal-400 md:grid-cols-2 lg:grid-cols-4 lg:h-[60vh]">
           
            <div className="card glass  md:h-[250px] " data-aos="fade-down">
  <figure><img src="https://i.ibb.co/v1tGLFv/rewards-exp.gif" className="h-[150px] mt-2 py-4"/></figure>
  <div className="card-body">
    
    <p className="text-xl text-center text-black font-bold dark:text-emerald-600">Give your best. we will reward you </p>
    
  </div>
</div>
<div className="card glass  md:h-[250px] lg:-mt-[120px]" data-aos="fade-up">
  <figure><img src="https://i.ibb.co/MVJZQqQ/YMXq.gif"  className="h-[150px] mt-2 py-4"/></figure>
  <div className="card-body">
    
    <p className="text-xl text-center text-black font-bold dark:text-emerald-600">Do your best.We will help you</p>
    
  </div>
</div>
<div className="card  glass  md:h-[250px]" data-aos="fade-down">
  <figure><img src="https://i.ibb.co/1TCWfGP/RfmR.gif"  className="h-[150px] mt-2 py-4"/></figure>
  <div className="card-body">
    
    <p className="text-xl text-center text-black font-bold dark:text-emerald-600">Our live class will help to improve you</p>
    
  </div>
</div>
<div className="card  glass  md:h-[250px] lg:mt-[100px]" data-aos="fade-up">
  <figure><img src="https://i.ibb.co/TMLBZhL/icons8-price.gif"  className="h-[150px] mt-2 py-8"/></figure>
  <div className="card-body">
    
    <p className="text-xl text-center text-black font-bold dark:text-emerald-600">We take 5$ every month, so that we can help you best</p>
    
  </div>
</div>
            
        </div>
    );
};

export default Feature;