import './App.css';
import Scoreboard from "./components/Scoreboard.js"
import Info from "./components/Info.js"

function App() {
  return (
    <div className="App">
        <div className="App-body">
          <Scoreboard home="Casa" team_name="Vasco"></Scoreboard>
          <Info local="Maracanã/RJ" game_time="01/06/2016-19:00h"></Info>
          <Scoreboard home="Visitante" team_name="Flamengo"></Scoreboard>
      </div>{/* app-header */}
    </div>
 
  );
}

export default App;
