import './App.css';
import React, { useState } from 'react';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";


function App({photoRandomizer, setPhotoRandomizer}) {
  

  const draw = () => {
    const itemsToDrawFrom = photoRandomizer.itemsToDrawFrom;
    if(itemsToDrawFrom.length > 0){
    const i = Math.floor( Math.random() * itemsToDrawFrom.length )
    const item = itemsToDrawFrom.splice(i, 1)
    const drawnItems = [...photoRandomizer.drawnItems, item]
    setPhotoRandomizer({
      ...photoRandomizer,
      itemsToDrawFrom,
      drawnItems
    });
  } else {
    alert("You have drawn all items");
  }
  }

  const reset = () => {
    setPhotoRandomizer({
      ...photoRandomizer,
      itemsToDrawFrom : [...photoRandomizer.selectedItems],
      drawnItems : []
    });
  }

  return (
    <div id="pr">
      <h2>Photo Randomizer</h2>
      <div className="center">
      <button onClick={reset}>Reset</button>
      <Link class="link-button" to="/photo-randomizer/settings"><FontAwesomeIcon icon={faCog} />Settings</Link>
      </div>
      <ol>
      {photoRandomizer.drawnItems.map((i,k) => {
      return (<li key={k}>
        {i}
      </li>)

      })}
      </ol>
      <button id="draw" onClick={draw}>Pick item</button>

    </div>
  );
}

export default App;

export const InitPhotoRandomizer = () => {
  return {
    items : [
      "EMF Reader",
      "Ghost Writing Book",
      "Spirit Box",
      "Thermometer",
      "Video Camera",
      "UV Flashlight",
      "Photo Camera",
      "Flashlight",
      "Strong Flashlight",
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
    ],
    selectedItems : [
      "EMF Reader",
      "Ghost Writing Book",
      "Spirit Box",
      "Thermometer",
      "Video Camera",
      "UV Flashlight",
      "Photo Camera",
      "Flashlight",
      "Strong Flashlight",
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
  ],
    itemsToDrawFrom : [
      "EMF Reader",
      "Ghost Writing Book",
      "Spirit Box",
      "Thermometer",
      "Video Camera",
      "UV Flashlight",
      "Photo Camera",
      "Flashlight",
      "Strong Flashlight",
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
    ],
    drawnItems : []
  };
}
