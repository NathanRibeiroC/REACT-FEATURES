import React from 'react';
import './style.css';
// Components
import Navbar from './components/Navbar';
import ContentBox from './components/ContentBox';
// Data
import data from './data';

function App() {
  const contentBoxes = data.map((cardInfo) => (
    // <Card
    //   id = {cardInfo.id}
    //   image={cardInfo.coverImg}
    //   rating={cardInfo.stats.rating}
    //   reviewCount={cardInfo.stats.reviewCount}
    //   country={cardInfo.location}
    //   title={cardInfo.title}
    //   price={cardInfo.price}
    //   openSpots={cardInfo.openSpots}
    // />
    <ContentBox
    {...cardInfo}
  />
  ));
  return (
    <div className="main--container">
      <Navbar/>
      <section className='content--boxes--section'>{contentBoxes}</section>
    </div>
  );
}

export default App;
