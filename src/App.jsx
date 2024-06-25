import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Heading from './Components/Heading';
import InputNumber from './Components/InputNumber';
import Validate from './Components/Validate';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div className='flex flex-col w-screen h-screen bg-zinc-700 justify-start items-center'>
        <Heading />
        <Routes>
          <Route path="/" element={<InputNumber />} />
          <Route path="/OTP" element={<Validate />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
