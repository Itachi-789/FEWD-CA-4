import React, { useEffect, useState } from "react";
import QuestionBox from './components/QuestionBox';
// import Result from './components/Result';
export const ToggleTheme=React.createContext()

function App() {

  // const [state,setState]=useState(true)
  // const handleToggle=()=>{
  //   setState(state=>!state)
  // }
  return (
    // <ToggleTheme.Provider value={state}>
    // <div className="container">
    // <button className="click" onClick={handleToggle}>Light</button>
    // </div>
  <div>
    <QuestionBox/>
    {/* <button onClick={()=>reset()}></button> */}
  </div>
  // </ToggleTheme.Provider>
    // <div className="App">
    //   {/* <Result/> */}
    //   <QuestionBox/>
    // </div>
  );
}

export default App;
