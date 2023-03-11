import axios from "axios";
import baseURL from "../constants/urls";


const AxiosService =  axios.create({baseURL})

export {
    AxiosService
}

