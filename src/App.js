import React from "react";
import FunctionalComp from "./Components/FunctionalComp";
import { ClassComp1,ClassComp2 } from "./Components/ClassComp";
import Click from "./Components/Click";
import Counter from "./Components/Counter";
import ParentComp from "./Components/ParentComp";
import Classprops from "./Components/Classprops";
import FunctionalProps from "./Components/Functionprops";
import States from "./Components/States";

function App() {
  return (
    <div>
        <h1>Welcome to my first react application!!</h1>
        <FunctionalComp></FunctionalComp>
        <ClassComp1></ClassComp1>
        <Click/>
        <Counter/>
        <ParentComp/>
        <Classprops learnername="Learner1" place="PlaceX"><span>Children Component</span></Classprops>
        <Classprops learnername="Learner2" place="PlaceY"><button>Click</button></Classprops>
        <Classprops learnername="Learner3" place="PlaceZ"></Classprops>
        <FunctionalProps learnername="Learner4" place="PlaceA"></FunctionalProps>
        <States/>
    </div> 
  );
}

export default App;
