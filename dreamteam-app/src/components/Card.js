import Fetcher from "./Fetcher";

function Card(gameIndex) {
  const game = gameIndex.gameIndex
  return(
    <div className="Card">
      <h3>{game.championName}</h3>
      <img src={Fetcher.championCard(game.championName)} alt='champion'/>
      <p>{game.kills}/{game.deaths}/{game.assists}</p>
      <p>{(game.kills + game.assists) / game.deaths}:1 KDA</p>
    </div>
  )
}

export default Card