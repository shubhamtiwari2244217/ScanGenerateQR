import React from 'react';
// import logo from './logo.svg';
import './App.css';
import CreateQr from './components/CreateQr';
import ReadQr from './components/ReadQr';



function App() {
  return (
    <div className="container-fluid">
      <h1 className='my-5 text-center display-2'>Qr Code Reader & Generator</h1>
      <div className="row">
        <CreateQr />
        <ReadQr />
      </div>
    </div>
  );
}

export default App;
