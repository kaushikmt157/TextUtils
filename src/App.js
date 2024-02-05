import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TextForms from './components/TextForms';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    const newMode = mode === 'dark' ? 'light' : 'dark';
    showAlert(`${newMode} mode enable`, 'success');
    setMode(newMode);
    document.body.style.backgroundColor = newMode === 'dark' ? '#0e1b29' : '#f8f9fa';
  };

  return (
    <div className="App">
      {/* <Router> */}
        <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <TextForms heading="Enter the text to analyse" mode={mode} showAlert={showAlert} />
        {/* <Routes>
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/" element={<div className="container my-3"> */}
            
            {/* </div>} /> */}
        {/* </Routes> */}
      {/* // </Router> */} 
    </div>
  );
}

export default App;
