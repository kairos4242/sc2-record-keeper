import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav.js'
import NavItem from './components/NavItem.js'
import List from './components/List.js'
import ListItem from './components/ListItem.js'
import Race from './components/Race';
import SearchBar from './components/SearchBar';

const movie1 = {
  title: "Test",
  starRating: "5",
  year: 1979,
  genre: "Action",
  rating: "18A",
  runtime: "2h 39m",
  cast: "Whomst"
}

const movie2 = {
  title: "Test",
  starRating: "5",
  year: 1979,
  genre: "Action",
  rating: "18A",
  runtime: "2h 39m"
}

const movies = [movie1, movie2]

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
  const {search} = window.location;
  const query = new URLSearchParams(search).get('s');
  const filteredPlayers = filterPlayers(players, query)


  return (
    <div className="divide-y divide-slate-100">
      <Nav>
        <NavItem href="/players" isActive={checkUrlActive("players")}>Players</NavItem>
        <NavItem href="/stats" isActive={checkUrlActive("stats")}>Stats</NavItem>
        <NavItem href="/builds" isActive={checkUrlActive("builds")}>Builds</NavItem>
        <SearchBar />
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
