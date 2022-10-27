import Fetcher from "./Fetcher";
import Chart from 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import BarChart from "./BarChart";
import LineChart from "./LineChart";

function Card(gameIndex) {
  const game = gameIndex.gameIndex
  let result
  if (game.win == true) {
    result = 'Win'
  } else {
    result = 'Loss'
  }
  
  return(
    <div className="Card">
      <h3>{game.championName}</h3>
      <img src={Fetcher.championCard(game.championName)} alt='champion'/>
      <p>{game.kills}/{game.deaths}/{game.assists}</p>
      <p>{(game.kills + game.assists) / game.deaths}:1 KDA</p>
      <p>{result}</p>
      <div className="chart">
        <canvas>
          <BarChart />
          <LineChart />
        </canvas>
      </div>
    </div>
  )
}

export default Card