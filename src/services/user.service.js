import AxiosService from "./axios.service";
import {urls} from "../constants/urls";

const UserService = {
    getAll:()=> AxiosService.get(urls.users)
}
export default UserService