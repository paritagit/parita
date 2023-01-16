import { useState } from 'react';
// import './App.css';

function App() {
  const [bmi,setbmi]=useState();
  const [info,setinfo]=useState();
  const [height,setheight]=useState();
  const [weight,setweight]=useState();
  const hanlebmi = () => {
    let val = (
      [Number(weight) / Number(height) / Number(height)] * 10000
    ).toFixed(1);
    setbmi(val);
    if(val < 18.5)
    {
      setinfo("UNDER WEIGHT");
    }
    else if(val > 18.5 && val <= 24.9)
    {
      setinfo("HEALTHY");
    }
    else if(val > 24.9 && val < 30)
    {
      setinfo("OVERWEIGHT");
    }
    else
    {
      setinfo("OBESE");
    }
  }
  return (
    <div className="App">
      <h1>BMI CALCULATOR</h1>
      <input type="text" onChange={ (e) => setheight(e.target.value)} placeholder="hegiht in cm" />
      <input type="text" onChange={ (e) => setweight(e.target.value)} placeholder="weight in kg" />
      <button onClick={hanlebmi}>CALCULATE</button>
      <h1>{bmi}</h1>
      <h1>{info}</h1>
    </div>
  );
}

export default App;
