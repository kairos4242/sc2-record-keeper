import './App.css';
import Nav from './components/Nav.js'
import NavItem from './components/NavItem.js'
import List from './components/List.js'
import ListItem from './components/ListItem.js'
import Race from './components/Race';
import SearchBar from './components/SearchBar';
import AddDataButton from './components/AddDataButton';
import { parse } from '@vanillaes/csv'
import { data } from './data/Data'
import { useCallback, useState } from 'react';

const player_model1 = {
  id: 0,
  clan: "OIGE",
  name: "RENDER",
  race: Race.TERRAN,
  matches: [0],
  notes: ""
}

const player_model2 = {
  id: 0,
  clan: "TESTCLAN",
  name: "JIMBLE",
  race: Race.ZERG,
  matches: [1, 2, 3],
  notes: "worst player ever"
}

const players = [player_model1, player_model2]

const match_model = {
  date: "shouldnt be string but todo problem",
  opponent: 0,
  opp_build: "2-1-1",
  opp_comp: "Bio",
  my_build: "Standard",
  notes: ""
}

function checkUrlActive(desired_subpath) {
  if (window.location.toString().split('/')[3] == desired_subpath) {
    return true
  }
  return false
}

const filterPlayers = (player_list, query) => {
  if (!query) {
    return player_list
  }

  return player_list.filter((player) => {
    const playerName = player.name.toLowerCase();
    return playerName.includes(query)
  })
}

function App() {  
  const parsedData = parse(data)
  let player_clan = ""
  let player_name = ""
  let player_race = ""
  let player_notes = ""
  const dataBeforeState = []

  parsedData.forEach(player => {
    if (player[1] == "Race") {
      return;
    }
    if (player[0][0] == '<'){
      //player has a clan name, add it
      player_clan = player[0].split('<')[1].split('>')[0]
      player_name = player[0].split('> ')[1]
    }
    else {
      player_clan = ""
      player_name = player[0]
    }
    //console.log(player[1])
    switch (player[1]) {
      case "T": player_race = Race.TERRAN;
      break;
      case "P": player_race = Race.PROTOSS;
      break;
      case "Z": player_race = Race.ZERG;
      break;
      case "R": player_race = Race.RANDOM;
      break;
      default: break;
    }
    player_notes = player[2]
    //console.log(player_race)
    
    let playerObject = {
      id: 0,
      clan: player_clan,
      name: player_name,
      race: player_race,
      matches: [0],
      notes: player_notes
    }

    dataBeforeState.push(playerObject)
  })
  const [stateData, setStateData] = useState(dataBeforeState)

  const {search} = window.location;
  const query = new URLSearchParams(search).get('s');
  const filteredPlayers = filterPlayers(stateData, query)

  const handleAddDataCallback = (childData) =>{
    const dataBeforeState = stateData.concat([childData])
    dataBeforeState.forEach(player => console.log("new: " + player.name))
    setStateData(dataBeforeState)
    stateData.forEach(player => console.log("final: " + player.name))
}

  return (
    <div className="divide-y divide-slate-100">
      <Nav>
        <NavItem href="/players" isActive={checkUrlActive("players")}>Players</NavItem>
        <NavItem href="/stats" isActive={checkUrlActive("stats")}>Stats</NavItem>
        <NavItem href="/builds" isActive={checkUrlActive("builds")}>Builds</NavItem>
        <SearchBar />
        <AddDataButton parentCallback={handleAddDataCallback}/>
      </Nav>
      <List>
        {filteredPlayers.map((player) => (
          <ListItem key={player.id} player={player} />
        ))}
      </List>
    </div>
  )
}

export default App;