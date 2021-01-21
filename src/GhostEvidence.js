import './App.css';
import React, { useState } from 'react';

const E = {
  EMF : "EMF",
  ORBS : "ORBS",
  WRITING : "WRITING",
  FREEZING : "FREEZING",
  SPIRITBOX : "SPIRITBOX",
  FINGIES : "FINGIES"
}

const ELabels = [E.EMF, E.ORBS, E.WRITING, E.FREEZING, E.SPIRITBOX, E.FREEZING];

const ghosts = [
  {
    name:"Shade",
    evidence: [E.EMF,E.ORBS,E.WRITING]
  },
  {
    name:"Phantom",
    evidence: [E.EMF,E.EMF,E.FREEZING]
  },
  {
    name:"Jinn",
    evidence: [E.EMF,E.EMF,E.SPIRITBOX]
  },
  {
    name:"Yurei",
    evidence: [E.ORBS,E.WRITING,E.FREEZING]
  },
  {
    name:"Mare",
    evidence: [E.ORBS,E.FREEZING,E.SPIRITBOX]
  },
  {
    name:"Deamon",
    evidence: [E.WRITING,E.FREEZING,E.SPIRITBOX]
  },
  {
    name:"Banshee",
    evidence: [E.EMF,E.FREEZING,E.FINGIES]
  },
  {
    name:"Revenant",
    evidence: [E.EMF,E.WRITING,E.FINGIES]
  },
  {
    name:"Oni",
    evidence: [E.EMF,E.WRITING,E.SPIRITBOX]
  },
  {
    name:"Poltergeist",
    evidence: [E.ORBS,E.SPIRITBOX,E.FINGIES]
  },
  {
    name:"Spirit",
    evidence: [E.WRITING,E.SPIRITBOX,E.FINGIES]
  },
  {
    name:"Wraith",
    evidence: [E.FREEZING,E.SPIRITBOX,E.FINGIES]
  },
  
]

function App() {



  return (
    <div id="ge">
      <h2>Ghost Evidence</h2>
      <table>
        <thead>
          <tr>
            <th></th>
            {
              ELabels.map(i => <th><div className="rotate90deg">{i}</div></th>)
            }
          </tr>
        </thead>
        <tbody>
        {ghosts.map(g => <tr>
            <td>{g.name}</td>
            {
              ELabels.map(e => <th>{g.evidence.includes(e) ? "X" : ""}</th>)

            }
          </tr>
          )}
          
          
        </tbody>
      </table>

    
    </div>
  );
}

export default App;
