//import logo from './logo.svg';
import React from 'react';
import './App.css';
 import Home from './pages';
 import i18n from './i18n';
import { BrowserRouter as Router } from 'react-router-dom';
function App() {
 
  return (
    <div >
      <Router>
       <Home/>
     </Router>
    </div>
  );
}

export default App;


 