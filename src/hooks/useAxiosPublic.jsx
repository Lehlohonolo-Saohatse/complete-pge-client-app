import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://complete-pge-server.onrender.com'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;
