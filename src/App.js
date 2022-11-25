import React, { useState } from "react";
import { BrowserRouter,Routes, Route  } from "react-router-dom";
import FinalPage from "./Comps/FinalPage/FinalPage";
import HomePage from "./Comps/HomePage/HomePage";
import MainPage from "./Comps/MainPage/MainPage";
function App() {
  const [reward, setReward] = useState('');

  // const updateReward = (reward)=>{
  //   setReward(reward);
  // };
  return (

    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="mainPage" element={ <MainPage  setReward={setReward}/> } />
        <Route path="finalPage" element={ <FinalPage reward={reward}/> } />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;