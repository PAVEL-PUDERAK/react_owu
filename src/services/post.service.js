
import {urls} from "../constants";
import {axiosService} from "./axios.service";

const PostService = {
    getAll:()=>axiosService.get(urls.posts),
    getById:(id)=>axiosService.get(`${urls.posts}/${id}`),
};
export { PostService };