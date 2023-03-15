// import axios from "axios";
import {urls} from "../constants";
import {axiosService} from "./axios.service";

const UserService = {
    getAll:()=>axiosService.get(urls.users),
    getById:(id)=>axiosService.get(`${urls.users}/${id}`)
};

export {UserService};
