import Footer from "../../Footer/Footer";
import Banner from "../Banner/Banner";
import Faq from "../FAQ/FAQ";
import Feature from "../Feature/Feature";


const Home = () => {
    return (
        <div>
            <div>
                <Banner></Banner>
            </div >
            <div className="text-center text-xl m-2 font-bold text-teal-400 dark:text-red-600 md:text-2xl lg:text-3xl">
            <p >Why Choose us</p>
            
            </div>
            <div>
                <Feature></Feature>
            </div>
            <div>
               <Faq></Faq>
            </div>
            <div className="mt-2 w-[99%] mx-auto ">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;