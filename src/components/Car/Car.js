import React from 'react';
import {carsService} from "../../services";

const Car = ({car,setDeleteById,setCarUpdater}) => {
    const {id,model,price,year} = car;

    const deleteCar =  async () =>{
            await carsService.deleteById(id)
                setDeleteById(id)
        }



    return (
        <div className={'car'}>
            <h3>{model}</h3>
                <div>Price:<b>{price}</b></div>
                    <div><b>Year:{year}</b></div>
                        <button onClick={()=>deleteCar()}>Delete</button>
                            <button onClick={()=>{setCarUpdater(car)}}>Update</button>
        </div>
    );
};

export {Car};