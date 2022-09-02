import axios from "axios";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import classes from "./basketball.module.css";

function App() {

  interface Player {
    id: string;
    name: string;
    team: string;
    season: string;
    games_played: string;
    avg_pts: string;
    avg_reb: string;
    avg_ast: string;
    avg_blk: string;
  }

  const [playerName, setPlayerName] = useState('');
  const [playerData, setPlayerData] = useState<string[]>([]);
  const NBA_BASE_URL = "https://www.balldontlie.io/api/v1/players";
  const NBA_SEASON_AVG_URL = "https://www.balldontlie.io/api/v1/season_averages"

  return (
    <section className={classes.basketball}>
      <h2>As part of the Microsoft Student Accelerator program I have created a....</h2>
      <h1>NBA Player Search</h1>

      <div>
        <TextField
        id="search-bar"
        className="text"
        value={playerName}
        onChange={(prop: any) => {
        setPlayerName(prop.target.value);
        }}
        label="Search for a NBA Player..."
        variant="outlined"
        placeholder="Search..."
        size="small"
        />
        <IconButton
          aria-label="search"
          onClick={() => {
            search();
          }}
        >
          <SearchIcon style={{ fill: "blue" }} />
        </IconButton>
      </div>

      <p>You have entered: {playerName}</p>

        <div>
            <ul className={classes.result}>
              {playerData.map(player => <li key={player}>{player}</li>)}              
            </ul>
        </div>
    </section>
  );

  function search() {
    playerData.splice(0)
    let player = {} as Player;
    axios.get(NBA_BASE_URL + "?search=" + playerName + "&per_page=1").then((res) => {
        player.id = res.data.data[0].id
        player.name = res.data.data[0].first_name + " " + res.data.data[0].last_name
        player.team = res.data.data[0].team.full_name
        setPlayerData([...playerData, player.name, player.team])

        axios.get(NBA_SEASON_AVG_URL + "?season&player_ids[]=" + player.id).then((result) => {
            player.season = result.data.data[0].season + " Season Stats"
            player.games_played = "Games Played: " + result.data.data[0].games_played
            player.avg_pts = "Points: " + result.data.data[0].pts + " (FGM: " + result.data.data[0].fgm + ", FGA: " + result.data.data[0].fga + ", FG%: " + result.data.data[0].fg_pct + ")"
            player.avg_reb = "Rebounds: " + result.data.data[0].reb + " (Offensive: " + result.data.data[0].oreb + ", Defensive: " + result.data.data[0].dreb + ")"
            player.avg_ast = "Assists: " + result.data.data[0].ast + " Turnovers: " + result.data.data[0].turnover
            player.avg_blk = "Blocks: " + result.data.data[0].blk + " Steals: " + result.data.data[0].stl
            setPlayerData([...playerData, player.name, player.team, player.season, player.games_played, player.avg_pts, player.avg_reb, player.avg_ast, player.avg_blk])
          }).catch(function (error) {
            player.season = "Player Not Active"
            setPlayerData([...playerData, player.name, player.team, player.season])
          })
        }).catch(function (error) {
          player.name = "Player Not Found"
          setPlayerData([...playerData, player.name])
        })
  };
}

export default App;