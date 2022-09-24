import AxiosService from "./axios.service";
import {urls} from "../constants/urls";

const PostService = {
   getPostByUserId:(userId) => AxiosService.get(`${urls.posts}?userId=${userId}`)


}
export default PostService;
