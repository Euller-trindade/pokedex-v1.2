import "./App.css";
import Pokedex from "./components/Pokedex";
import Searchbar from "./components/Searchbar";

function App() {
  return (
    <div>
      <Searchbar />
      <Pokedex/>
    </div>
  );
}

export default App;
