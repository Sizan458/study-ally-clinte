import axios from "axios";

const  instance = axios.create({
    baseURL : "https://study-ally-server-bniw1tw2p-mdsizan-mahmuds-projects.vercel.app",
    withCredentials: true,
})
const useAxios = () => {
    
    return  instance
};

export default useAxios;