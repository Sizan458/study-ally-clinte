import Marquee from "react-fast-marquee";

const Mar = () => {
    return (
        <div className="w-[98%] mx-auto m-3">
            <div>
          <p className="m-2 text-center text-xl text-black font-bold dark:text-red-600 md:text-2xl lg:text-3xl">Our most recent event</p>
            </div>
            <div>
             <Marquee pauseOnHover  gradient gradientColor="#ff9999" gradientWidth={100}>
                <img src="https://i.ibb.co/ygzjDNC/pexels-agung-pandit-wiguna-3401403.jpg" className="h-[150px] w-[290px] m-2 rounded-lg md:h-[250px] md:w-[300px] "/>
                <img src="https://i.ibb.co/ggvdsKB/pexels-thirdman-5257759.jpg"  className="h-[150px] w-[290px] m-2 rounded-lg md:h-[250px] md:w-[300px]" />
                <img src="https://i.ibb.co/p0tRSSd/pexels-monstera-production-9431442.jpg" className="h-[150px] w-[290px] m-2 rounded-lg md:h-[250px] md:w-[300px]"/>
                <img src="https://i.ibb.co/5RGthZg/pexels-monstera-production-6238038.jpg" className="h-[150px] w-[290px] m-2 rounded-lg md:h-[250px] md:w-[300px]"/>
                <img src="https://i.ibb.co/jJJ6njy/pexels-mikhail-nilov-8923258.jpg" className="h-[150px] w-[290px] m-2 rounded-lg md:h-[250px] md:w-[300px]"/>
             </Marquee>
            </div>
        </div>
    );
};

export default Mar;