import './App.css';
import React, { useState } from 'react';
import { Link } from "react-router-dom";


function PhotoRandomizerSettings({photoRandomizer, setPhotoRandomizer}) {
  

  const toggleItem = (item) => {
    if(photoRandomizer.selectedItems.includes(item)){
      const selectedItems = [...photoRandomizer.selectedItems];
      const index = selectedItems.indexOf(item);
      selectedItems.splice(index, 1);
      setPhotoRandomizer({
        ...photoRandomizer,
        selectedItems
      })
    } else {
      setPhotoRandomizer({
        ...photoRandomizer,
        selectedItems: [...photoRandomizer.selectedItems, item]
      })
    }
  }

  return (
    <div id="prs">
      <h2>Photo Randomizer Settings</h2>
      <ul>
        {photoRandomizer.items.map((i,k) => {
        return (<li className={`${photoRandomizer.selectedItems.includes(i) ? "" : "strikethrough"}`} key={k} onClick={() => toggleItem(i)}>
          {i}
        </li>)

        })}
      </ul>
      <div className="center">
        <Link class="link-button" to="/photo-randomizer">Save</Link>
      </div>


    </div>
  );
}

export default PhotoRandomizerSettings;

