import Footer from "../../Footer/Footer";
import Mar from "../../HomePage/Marquee/Marquee";
import From from "../From/From";


const Register = () => {
    return (
        <div>
           <div>
           <From></From> 
           </div>
           <div>
            <Mar></Mar>
           </div>
           <div className="w-[97%] mx-auto">
            <Footer></Footer>
           </div>
        </div>
    );
};

export default Register;