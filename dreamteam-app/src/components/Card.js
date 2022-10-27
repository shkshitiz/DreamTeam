import Fetcher from "./Fetcher";

function Card(gameIndex) {
  return(
    <div className="Card">
      <h2>{gameIndex.championName}</h2>
      <img src={Fetcher.championCard(gameIndex.championName)} alt='champion'/>
      <p>{gameIndex.kills}/{gameIndex.deaths}/{gameIndex.assists}</p>
      <p>{(gameIndex.kills + gameIndex.assists) / gameIndex.deaths}:1 KDA</p>
    </div>
  )
}

export default Card