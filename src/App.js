import './App.css';
import PhotoRandomizer from './PhotoRandomizer';
import GhostEvidence from './GhostEvidence';
import React, { useState } from 'react';


import { HashRouter, Switch, Route, Link } from "react-router-dom";


function App() {
  

  return (
    <HashRouter>
      <div>
        <Switch>
          <Route path="/photo-randomizer" component={PhotoRandomizer}></Route>
          <Route path="/ghost-evidence" component={GhostEvidence}></Route>
          <Route path="/">
            <div>
              <h2 class="front">
                Fan made mobile tools to enhance the experience and help you while playing <a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwiHhsPpzKjuAhXw-SoKHVZSAsYQFjAIegQIARAC&url=https%3A%2F%2Fstore.steampowered.com%2Fapp%2F739630%2FPhasmophobia%2F&usg=AOvVaw2ZDD5MkMpzDKwtTrH3sgO6">Phasmophobia</a>
              </h2>
                <Link class="link-button"to="/photo-randomizer"> Photo Randomizer</Link>
                <Link class="link-button" to="/ghost-evidence">Ghost Evidence</Link>
           </div>
          </Route>
        </Switch>
        <div class="navigation">
        <Link to="/"> Home</Link>
        <Link to="/photo-randomizer"> PR</Link>
                <Link to="/ghost-evidence">GE</Link>
           
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
