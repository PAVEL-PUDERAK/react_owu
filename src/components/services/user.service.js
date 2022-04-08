import axiosService from "./axios.service";
import {urls} from "../../constans";

const userService = {
    getAll: () => axiosService.get(urls.users),
    getById:(id)=> axiosService(`${urls.users}/${id}`)
}
export {userService}