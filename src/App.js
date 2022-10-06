import {Cars} from "./components";
import {CarForm} from "./components/CarForm/CarForm";
import {useState} from "react";
import  './App.css'


function App() {
    const [newCar,SetNewCar] = useState(null)
    const [carUpdater,setCarUpdater] = useState(null);
  return (
      <div>
          <CarForm setCarUpdater={setCarUpdater} carUpdater={carUpdater} SetNewCar={SetNewCar}/>
          <hr/>
        <Cars setCarUpdater={setCarUpdater} carUpdater={carUpdater} newCar={newCar} />
      </div>
  );
}

export default App;
