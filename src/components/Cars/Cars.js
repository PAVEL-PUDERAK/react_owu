import React, {useEffect, useState} from 'react';
import {carsService} from "../../services";
import {Car} from "../Car";

const Cars = ({newCar,setCarUpdater,carUpdater}) => {
    const [deletedCarId,setDeletedCarById] = useState(null);

    const [cars,setCars] = useState([]);
    useEffect(()=>{
        if (deletedCarId){
            setCars(cars.filter(car => car.id !== deletedCarId))
        }
    },[cars, deletedCarId])
    useEffect(()=>{
        carsService.getAll().then(({data})=>{setCars(data)})
    },[])
    useEffect(()=>{
        if (newCar){
            setCars(cars => [...cars,newCar])
        }
    }, [newCar])
    useEffect(() => {
            if (carUpdater) {
                const car = cars.find(car => car.id === carUpdater.id)
                Object.assign(car, carUpdater)
                setCars([...cars])
            }
        },
        [carUpdater, cars])



    return (
        <div className={'cars'}>
            {cars.map((car)=><Car setCarUpdater={setCarUpdater} setDeleteById={setDeletedCarById} key={car.id} car={car}/>)}
        </div>
    );
};

export {
    Cars
};