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

  const save = () => {
    setPhotoRandomizer({
      ...photoRandomizer,
      itemsToDrawFrom : [...photoRandomizer.selectedItems],
      drawnItems : []
    });
  }

  return (
    <div id="prs">
      <h2>Photo Randomizer Settings</h2>
        {photoRandomizer.items.map((i,k) => {
        return (
        <div className="list">
          <input type="checkbox" checked={photoRandomizer.selectedItems.includes(i)}/>
          <span className={`item ${photoRandomizer.selectedItems.includes(i) ? "" : "strikethrough"}`} key={k} onClick={() => toggleItem(i)}>
          {i}
          </span>
        </div>)
        })}
      <div className="center">
        <Link class="link-button" onClick={save} to="/photo-randomizer">Save</Link>
      </div>
    </div>
  );
}

export default PhotoRandomizerSettings;

