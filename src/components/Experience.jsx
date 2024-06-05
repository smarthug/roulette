import React, { useState } from 'react';
import './App.css';

import { Wheel } from 'react-custom-roulette';

// const data = [
//   { option: 'REACT' },
//   { option: 'CUSTOM' },
//   { option: 'ROULETTE', style: { textColor: '#f9dd50' } },
//   { option: 'WHEEL' },
//   { option: 'REACT' },
//   { option: 'CUSTOM' },
//   { option: 'ROULETTE', style: { textColor: '#70bbe0' } },
//   { option: 'WHEEL' },
// ];

const data = [
  { option: '0', style: { backgroundColor: '#3f9e4d', textColor: '#ffffff' } },
  { option: '32', style: { backgroundColor: '#000000', textColor: '#ffffff' } },
  { option: '15', style: { backgroundColor: '#ff0000', textColor: '#ffffff' } },
  { option: '19', style: { backgroundColor: '#000000', textColor: '#ffffff' } },
  { option: '4', style: { backgroundColor: '#ff0000', textColor: '#ffffff' } },
  { option: '21', style: { backgroundColor: '#000000', textColor: '#ffffff' } },
  { option: '2', style: { backgroundColor: '#ff0000', textColor: '#ffffff' } },
  { option: '25', style: { backgroundColor: '#000000', textColor: '#ffffff' } },
  { option: '17', style: { backgroundColor: '#ff0000', textColor: '#ffffff' } },
  { option: '34', style: { backgroundColor: '#000000', textColor: '#ffffff' } },
  { option: '6', style: { backgroundColor: '#ff0000', textColor: '#ffffff' } },
  { option: '27', style: { backgroundColor: '#000000', textColor: '#ffffff' } },
  { option: '13', style: { backgroundColor: '#ff0000', textColor: '#ffffff' } },
  { option: '36', style: { backgroundColor: '#000000', textColor: '#ffffff' } },
  { option: '11', style: { backgroundColor: '#ff0000', textColor: '#ffffff' } },
  { option: '30', style: { backgroundColor: '#000000', textColor: '#ffffff' } },
  { option: '8', style: { backgroundColor: '#ff0000', textColor: '#ffffff' } },
  { option: '23', style: { backgroundColor: '#000000', textColor: '#ffffff' } },
  { option: '10', style: { backgroundColor: '#ff0000', textColor: '#ffffff' } },
  { option: '5', style: { backgroundColor: '#000000', textColor: '#ffffff' } },
  { option: '24', style: { backgroundColor: '#ff0000', textColor: '#ffffff' } },
  { option: '16', style: { backgroundColor: '#000000', textColor: '#ffffff' } },
  { option: '33', style: { backgroundColor: '#ff0000', textColor: '#ffffff' } },
  { option: '1', style: { backgroundColor: '#000000', textColor: '#ffffff' } },
  { option: '20', style: { backgroundColor: '#ff0000', textColor: '#ffffff' } },
  { option: '14', style: { backgroundColor: '#000000', textColor: '#ffffff' } },
  { option: '31', style: { backgroundColor: '#ff0000', textColor: '#ffffff' } },
  { option: '9', style: { backgroundColor: '#000000', textColor: '#ffffff' } },
  { option: '22', style: { backgroundColor: '#ff0000', textColor: '#ffffff' } },
  { option: '18', style: { backgroundColor: '#000000', textColor: '#ffffff' } },
  { option: '29', style: { backgroundColor: '#ff0000', textColor: '#ffffff' } },
  { option: '7', style: { backgroundColor: '#000000', textColor: '#ffffff' } },
  { option: '28', style: { backgroundColor: '#ff0000', textColor: '#ffffff' } },
  { option: '12', style: { backgroundColor: '#000000', textColor: '#ffffff' } },
  { option: '35', style: { backgroundColor: '#ff0000', textColor: '#ffffff' } },
  { option: '3', style: { backgroundColor: '#000000', textColor: '#ffffff' } },
  { option: '26', style: { backgroundColor: '#ff0000', textColor: '#ffffff' } },
];


const backgroundColors = ['#ff8f43', '#70bbe0', '#0b3351', '#f9dd50'];
const textColors = ['#0b3351'];
const outerBorderColor = '#30261a';
const outerBorderWidth = 10;
const innerBorderColor = '#30261a';
const innerBorderWidth = 10;
const innerRadius = 40;
const radiusLineColor = '#eeeeee';
const radiusLineWidth = 2;
const fontFamily = 'Nunito';
const fontWeight = 'bold';
const fontSize = 20;
const fontStyle = 'normal';
const textDistance = 85;
const spinDuration = 1.0;

const App = () => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <Wheel
          mustStartSpinning={mustSpin}
          prizeNumber={prizeNumber}
          data={data}
          backgroundColors={backgroundColors}
          textColors={textColors}
          fontFamily={fontFamily}
          fontSize={fontSize}
          fontWeight={fontWeight}
          fontStyle={fontStyle}
          outerBorderColor={outerBorderColor}
          outerBorderWidth={outerBorderWidth}
          innerRadius={innerRadius}
          innerBorderColor={innerBorderColor}
          innerBorderWidth={innerBorderWidth}
          radiusLineColor={radiusLineColor}
          radiusLineWidth={radiusLineWidth}
          spinDuration={spinDuration}
          startingOptionIndex={2}
          perpendicularText
          textDistance={textDistance}
          onStopSpinning={() => {
            setMustSpin(false);
          }}
        />
        <button className={'spin-button'} onClick={handleSpinClick}>
          SPIN
        </button>
      </header>
    </div>
  );
};

export default App;
