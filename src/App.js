import './App.css';
import React, { useState } from 'react';
function App() {
  const [dob, setDob] = useState('');
  const [age, setAge] = useState(null);
  const Calculate = ()=>{
    const birthDate = new Date(dob);
    const today = new Date();
    const ageInMilliseconds = today - birthDate;
    const ageInYears = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25));
    setAge(ageInYears);
  };
  return (
    <div className="App">
      <h1>Age Calculator</h1>
      <h3>Enter your Date of Birth</h3>
      <input type="date" className='w-25 p-2 m-2'value={dob}
          onChange={(e) => setDob(e.target.value)}></input>
      <div>
        <button className="btn btn-primary m-3" onClick={Calculate}>Calculate Age</button>
      </div>
      {age !== null && (
        <h3>You are {age} years old.</h3>
      )}
    </div>
  );
}

export default App;
