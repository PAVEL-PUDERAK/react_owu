
import {useForm} from "react-hook-form";

import {carsService} from "../../services";
import {joiResolver} from "@hookform/resolvers/joi";

import {carValidator} from "../validators";
import {useEffect} from "react";

const CarForm =  ({carUpdater,setCarUpdater,SetNewCar}) => {
    const {
        register,
        reset,
        handleSubmit,
        formState: {errors},
        setValue
    } = useForm({resolver: joiResolver(carValidator)}), submit = async (car) => {
        if (carUpdater){
           const {data} = await carsService.updateById(carUpdater.id, car)
            setCarUpdater(data)
            } else {
            const {data} = await carsService.create(car);
            SetNewCar(data)
            reset()
        }
    };
    useEffect(() => {
        if (carUpdater){
            const {model,price,year} = carUpdater;
            setValue('model',model  )
            setValue('price',price  )
            setValue('year',year  )
        }

    }
    ,[carUpdater, setValue])



    return (
        <form onSubmit={handleSubmit(submit)}>
            <div><label><b>Model:</b> <input type="text"{...register('model')}/></label></div>
            {errors.model && <span>{errors.model.message}</span>}
            <div><label><b>Price:</b> <input type="text"{...register('price',{valueAsNumber:true})}/></label></div>
            {errors.price && <span>{errors.price.message}</span>}
            <div><label><b>Year:</b><input type="text"{...register('year', {valueAsNumber:true})}/></label></div>
            {errors.year && <span>{errors.year.message}</span>}
            <button>Save</button>
        </form>

);
};

export {CarForm};