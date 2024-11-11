// App.js
import React from 'react';
import Sidebar from './components/SideBar.jsx';
import Dashboard2 from './components/Dashboard2.jsx';
import './App.css';

function App() {
  return (
    <div className="main"> 
     <div className="app">
      <Sidebar />
      <Dashboard2 />
    </div>
    </div>

  );
}

export default App;
