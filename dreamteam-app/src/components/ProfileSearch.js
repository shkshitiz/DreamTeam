import {useState} from 'react'
import Fetcher from './Fetcher'
import Card from './Card'
import Profile from './Profile'

function ProfileSearch() {
  const [summoner, setSummoner] = useState("")
  const [profile, setProfile] = useState({})
  const [games, setGames] = useState([])

  // const [details, setDetails] = useState({profile: {}, games: []})



  const handleSubmit = async(event) => {
    event.preventDefault()
    console.log(summoner)

    // Fetching all required data
    Fetcher.profile(summoner)
      .then(({name, profileIconId, summonerLevel, puuid}) => 
        setProfile({name, profileIconId, summonerLevel, puuid}))

    Fetcher.queues(profile.puuid)
      .then(res => {
        let arr = res
        arr.forEach(queue => {
          Fetcher.match(queue, profile.puuid)
            .then(res => {
              setGames([...games, res])
            })
        })
      })

      // .then(res => setDetails(details.games = Fetcher.queues(details.profile.puuid)
      //   .then(res => res.forEach((queue, index) => {
      //     setDetails(details.games[index] = Fetcher.match(queue, details.profile.puuid))
      //   }))  
      // ))
      .then(res => console.log(res))
      // .then(res => setDetails(details.games = Object.keys(details.games)))
      .then(res => console.log(profile))
      .then(res => console.log(games))
      // .then(console.log(typeof(details.games)))
  }

  return (
    <div>
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
      <section className='profile'>
        <Profile profile={profile} />
      </section>
      <section className='match-history'>
        {games.map((game, index) => {
          return <Card 
            key={index}
            gameIndex={game[0]}
          />
        })}
      </section>
    </div>
  )
}

export default ProfileSearch



//   res.forEach((queue, index) => {
      //   setDetails(details.games[index] = Fetcher.match(queue, details.profile.puuid))
      // }))

// scraps
// fetch(`https://sea.api.riotgames.com/lol/match/v5/matches/OC1_547148976?api_key=${process.env.REACT_APP_API_KEY}`)
// .then(res => res.json())
// .then(res => console.log(res.info.teams[1].win))

// const searchProfile = (summoner) => {
//   fetch(`https://oc1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summoner}?api_key=${process.env.REACT_APP_API_KEY}`)
//   .then(res => res.json())
//   .then(profile => {
//     console.log(profile)
//     console.log(`http://ddragon.leagueoflegends.com/cdn/12.20.1/img/profileicon/${profile.profileIconId}.png`)
//   })
// }
