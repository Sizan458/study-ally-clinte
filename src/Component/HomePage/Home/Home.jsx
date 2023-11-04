import Footer from "../../Footer/Footer";
import Banner from "../Banner/Banner";


const Home = () => {
    return (
        <div>
            <div>
                <Banner></Banner>
            </div>
            <div className="mt-2 w-[99%] mx-auto ">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;