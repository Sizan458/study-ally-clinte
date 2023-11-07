import axios from "axios";

const  instance = axios.create({
    baseURL : "http://localhost:5001",
    withCredentials :true,
})
const useAxios = () => {
    instance.interceptors.response.use(function (response) {
         console.log(response);
      }, function (error) {
        console.log( error);
      });

    return  instance
};

export default useAxios;