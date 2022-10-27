import {useState} from 'react'
import Fetcher from './Fetcher'

function Profile() {
  const [summoner, setSummoner] = useState("")

  const details = {profile: {}, games: []}

  // const searchProfile = (summoner) => {
  //   fetch(`https://oc1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summoner}?api_key=${process.env.REACT_APP_API_KEY}`)
  //   .then(res => res.json())
  //   .then(profile => {
  //     console.log(profile)
  //     console.log(`http://ddragon.leagueoflegends.com/cdn/12.20.1/img/profileicon/${profile.profileIconId}.png`)
  //   })
  // }

  const handleSubmit = async(event) => {
    event.preventDefault()
    console.log(summoner)

    // Fetching all required data
    Fetcher.profile(summoner)
      .then(({profileIconId, summonerLevel, puuid}) => 
        details.profile = {profileIconId, summonerLevel, puuid})
      .then(res => details.games = Fetcher.queues(details.profile.puuid))
      .then(res => res.forEach((queue, index) => {
        details.games[index] = Fetcher.match(queue, details.profile.puuid)
      })).then(res => console.log(details))
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your summoner:
        <input 
          type="text" 
          value={summoner}
          onChange={(e) => setSummoner(e.target.value)}
        />
      </label>
      <button>Search</button>
    </form>
  )
}

// scraps
// fetch(`https://sea.api.riotgames.com/lol/match/v5/matches/OC1_547148976?api_key=${process.env.REACT_APP_API_KEY}`)
// .then(res => res.json())
// .then(res => console.log(res.info.teams[1].win))


export default Profile
