import './App.css';
import React, { useState } from 'react';

const  pRItems = [

  "EMF Reader",
  "Ghost Writing Book",
  "Spirit Box",
  "Thermometer",
  "Video Camera",
  "UV Flashlight",
  "Photo Camera",
  "Flashlight & Strong Flashlight",
  "Candle",
  "Crucifix",
  "Glow Stick",
  "Head Mounted Camera",
  "Infrared Light Sensor",
  "Lighter",
  "Motion Sensor",
  "Parabolic Microphone",
  "Salt Shaker",
  "Sanity Pills",
  "Smudge Sticks",
  "Sound Sensor",
  "Tripod",
]

function App() {
  const [photoR, setPhotoR] = useState({
    items : [

      "EMF Reader",
      "Ghost Writing Book",
      "Spirit Box",
      "Thermometer",
      "Video Camera",
      "UV Flashlight",
      "Candle",
      "Crucifix",
      "Glow Stick",
      "Head Mounted Camera",
      "Infrared Light Sensor",
      "Motion Sensor",
      "Parabolic Microphone",
      "Salt Shaker",
      "Sanity Pills",
      "Smudge Sticks",
      "Sound Sensor",
      "Tripod",
    ],
    selectedItems : []
  });

  const pickItem = () => {
    const items = photoR.items;
    const i = Math.floor( Math.random() * items.length )
    const item = items.splice(i, 1)
    const selectedItems = [...photoR.selectedItems, item]
    const pr = {
      items,
      selectedItems
    }
    setPhotoR(pr);
  }

  return (
    <div className="App">
      <h1>Photo Randomizer</h1>
      <button onClick={pickItem}>Pick item</button>

      <ul>
      {photoR.selectedItems.map((i,k) => {
      return (<li key={k}>
        {i}
      </li>)

      })}
      </ul>
    </div>
  );
}

export default App;
