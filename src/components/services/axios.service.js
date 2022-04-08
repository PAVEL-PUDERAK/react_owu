import axios from "axios";
import baseURL from "../../constans/urls";

const AxiosService = axios.create({baseURL})


export default AxiosService;