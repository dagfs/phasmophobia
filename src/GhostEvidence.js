import './App.css';





function App({ghostEvidence, setGhostEvidence}) {

  const toggleEvidence = (evidence) => {
    const evidenceState = ghostEvidence.selectedEvidence[evidence];

    var newState;
    if(evidenceState === STATE.NOT_CONFIRMED){
      newState=STATE.CONFIRMED;
    }
    else if(evidenceState === STATE.CONFIRMED){
      newState=STATE.CONFIRMED_NOT_PRESENT;
    } 
    else{
      newState = STATE.NOT_CONFIRMED;
    }
    setGhostEvidence({
      ...ghostEvidence,
      selectedEvidence: {
        ...ghostEvidence.selectedEvidence,
        [evidence]: newState
      }
    })
  }

  let filteredGhosts = [...ghosts];

  ELabels.map(el => {
    if(ghostEvidence.selectedEvidence[el] === STATE.CONFIRMED){
      filteredGhosts = filteredGhosts.filter(ghost => 
        ghost.evidence.includes(el)
       ) 
    } else if(ghostEvidence.selectedEvidence[el] === STATE.CONFIRMED_NOT_PRESENT){
      filteredGhosts = filteredGhosts.filter(ghost => 
        !ghost.evidence.includes(el)
      ) 
    }
  })

  return (
    <div id="ge">
      <h2>Ghost Evidence</h2>
      <table>
        <thead>
          <tr>
            <th></th>
            {
              ELabels.map(i => <th><div className="rotate90deg" onClick={() => toggleEvidence(i)}>{i} {getSymbol(ghostEvidence.selectedEvidence[i])}</div></th>)
            }
        </tr>
      </thead>
      <tbody>
        {filteredGhosts.map(g => <tr>
            <td>{g.name}</td>
            {
              ELabels.map(e => <td>{g.evidence.includes(e) ? "X" : ""}</td>)

            }
          </tr>
          )}
          
          
        </tbody>
      </table>

    
    </div>
  );
}

const getSymbol = (state) => {
  if(state === STATE.CONFIRMED) return "✓";
  if(state === STATE.CONFIRMED_NOT_PRESENT) return "x";
  return "?";
}

const E = {
  EMF : "EMF",
  ORBS : "ORBS",
  WRITING : "WRITING",
  FREEZING : "FREEZING",
  SPIRITBOX : "SPIRITBOX",
  FINGIES : "FINGIES"
}

const ELabels = [E.EMF, E.ORBS, E.WRITING, E.FREEZING, E.SPIRITBOX, E.FINGIES];

const ghosts = [
  {
    name:"Shade",
    evidence: [E.EMF,E.ORBS,E.WRITING]
  },
  {
    name:"Phantom",
    evidence: [E.EMF,E.ORBS,E.FREEZING]
  },
  {
    name:"Jinn",
    evidence: [E.EMF,E.ORBS,E.SPIRITBOX]
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

const STATE = {
  CONFIRMED: "CONFIRMED",
  NOT_CONFIRMED: "NOT_CONFIRMED",
  CONFIRMED_NOT_PRESENT: "CONFIRMED_NOT_PRESENT"
}

export default App;
export const InitGhostEvidence = () => {
  return {
    selectedEvidence : {
      EMF : STATE.NOT_CONFIRMED,
      ORBS : STATE.NOT_CONFIRMED,
      WRITING : STATE.NOT_CONFIRMED,
      FREEZING : STATE.NOT_CONFIRMED,
      SPIRITBOX : STATE.NOT_CONFIRMED,
      FINGIES : STATE.NOT_CONFIRMED
    }
  };
};
