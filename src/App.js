import './App.css';
import PhotoRandomizer, {InitPhotoRandomizer} from './PhotoRandomizer';
import GhostEvidence, {InitGhostEvidence} from './GhostEvidence';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCameraRetro, faHome, faTable } from '@fortawesome/free-solid-svg-icons'

import { HashRouter, Switch, Route, Link } from "react-router-dom";
import PhotoRandomizerSettings from './PhotoRandomizerSettings';



function App() {
  const [photoRandomizer, setPhotoRandomizer] = useState(InitPhotoRandomizer());
  const [ghostEvidence, setGhostEvidence] = useState(InitGhostEvidence());
 

  return (
    <HashRouter>
      <div>
        <div id="main">
        <Switch>
        <Route path="/photo-randomizer/settings">
            <PhotoRandomizerSettings photoRandomizer={photoRandomizer} setPhotoRandomizer={setPhotoRandomizer} />
          </Route>
          <Route path="/photo-randomizer">
            <PhotoRandomizer photoRandomizer={photoRandomizer} setPhotoRandomizer={setPhotoRandomizer} />
          </Route>
         
          <Route path="/ghost-evidence" >
            <GhostEvidence ghostEvidence={ghostEvidence} setGhostEvidence={setGhostEvidence}/>
          </Route>
          <Route path="/">
            <div>
              <h2 class="front">
                Fan made mobile tools to enhance the experience and help you while playing <a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwiHhsPpzKjuAhXw-SoKHVZSAsYQFjAIegQIARAC&url=https%3A%2F%2Fstore.steampowered.com%2Fapp%2F739630%2FPhasmophobia%2F&usg=AOvVaw2ZDD5MkMpzDKwtTrH3sgO6">Phasmophobia</a>
              </h2>
                <Link class="link-button-home"to="/photo-randomizer"> <FontAwesomeIcon icon={faCameraRetro} /> Photo Randomizer</Link>
                <Link class="link-button-home" to="/ghost-evidence"><FontAwesomeIcon icon={faTable} />Ghost Evidence</Link>
           </div>
          </Route>
        </Switch>
        </div>
        <div class="navigation">
          <Link to="/"><FontAwesomeIcon icon={faHome} /> Home</Link>
          <Link to="/photo-randomizer"><FontAwesomeIcon icon={faCameraRetro} />  PR</Link>
          <Link to="/ghost-evidence"><FontAwesomeIcon icon={faTable} />GE</Link>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
