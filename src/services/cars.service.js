import AxiosService from "./axios.service";
import {urls} from "../constants";

const carsService = {
    getAll:()=> AxiosService.get(urls.cars),
    create:(car) => AxiosService.post(urls.cars, car),
    updateById:(id, newCar) => AxiosService.put(`${urls.cars}/${id}`, newCar),
    deleteById:(id) => AxiosService.delete(`${urls.cars}/${id}`),
    getById:(id)=> AxiosService.get(`${urls.cars}/${id}`)
};
export {carsService};