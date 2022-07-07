import React from 'react';
import './style.css';
// Components
import Navbar from './components/Navbar';
import ContentBox from './components/ContentBox';

function App() {
  return (
    <div className="main--container">
      <Navbar/>
      <ContentBox/>
    </div>
  );
}

export default App;
