import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav.js'
import NavItem from './components/NavItem.js'
import List from './components/List.js'
import ListItem from './components/ListItem.js'

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

function App() {
  return (
    <div className="divide-y divide-slate-100">
      <Nav>
        <NavItem href="/new" isActive>New Releases</NavItem>
        <NavItem href="/top">Top Rated</NavItem>
        <NavItem href="/picks">Vincent’s Picks</NavItem>
      </Nav>
      <List>
        {movies.map((movie) => (
          <ListItem key={movie.id} movie={movie} />
        ))}
      </List>
    </div>
  )
}

export default App;
