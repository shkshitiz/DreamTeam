const Fetcher = {
  profile(summoner) {
    return fetch(`https://oc1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summoner}?api_key=${process.env.REACT_APP_API_KEY}`)
    .then(res => res.json())
  },

  queues(puuid){
    return fetch(`https://sea.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?start=0&count=5&api_key=${process.env.REACT_APP_API_KEY}`)
    .then(res => res.json())
  },

  match(queue, puuid) {
    return fetch(`https://sea.api.riotgames.com/lol/match/v5/matches/${queue}?api_key=${process.env.REACT_APP_API_KEY}`)
    .then(res => res.json())
    .then(res => {
      let obj = res.info.participants
      return obj.filter(participant => participant.puuid === puuid)
    })
  },

  icon(profileIconId) {
    return `http://ddragon.leagueoflegends.com/cdn/12.20.1/img/profileicon/${profileIconId}.png`
  },

  championCard(champion) {
    return `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion}_0.jpg`
  }
}

export default Fetcher