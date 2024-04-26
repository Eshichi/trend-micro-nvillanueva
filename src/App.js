import React from 'react';
import './style.css';
import Card from './components/Card';

const Style = {
  container : {
    padding: '20px',
  },
  headerTagDiv: {
    display: 'flex',
    justifyContent: 'center'
  },
  cardContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(6, 1fr)',
    gridGap: '10px'
  }
}

export default function App() {
  return (
    <div style={Style.container}>
      <div style={Style.headerTagDiv} >
        <h1>Memory Game</h1>
      </div>

      <div style={Style.cardContainer}>

      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      </div>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
