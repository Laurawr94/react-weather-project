import SearchEngine from "./SearchEngine";
import Forecast from "./Forecast";

import "./App.css";

function App() {
  return (
    <div className="container">
      <div id="weather" className="weather-container">
        <div className="App">
          <SearchEngine />
          <Forecast />
        </div>
      </div>
      <footer>
        <a href="/" target="_blank">
          Open-source code
        </a>
        <small>, by </small>
        <a
          rel="noreferrer"
          href="https://www.linkedin.com/in/laura-doherty-6548a766/"
          target="_blank"
        >
          Laura Doherty
        </a>
      </footer>
    </div>
  );
}

export default App;
