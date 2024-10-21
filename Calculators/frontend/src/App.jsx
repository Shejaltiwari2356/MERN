import React from "react";
import InterestCalculator from "./intrestcalculator";
// import InterestCalculator from "./IntrestCalculator"; // Assuming InterestCalculator is inside components folder

const App = () => {
  return (
    <div className="App">
      <h1>Savings Interest Calculator</h1>
      <InterestCalculator/>
    </div>
  );
};

export default App;
