import React from 'react';
import './global.css'
import './normalizer.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify';
import Routes from './routes';
function App() {
  return (
      <div className="App">
          <Routes></Routes> 
      </div>
  );
}

export default App;
