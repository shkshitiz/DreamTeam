const Fetcher = {
  profile(summoner) {
    fetch(`https://oc1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summoner}?api_key=${process.env.REACT_APP_API_KEY}`)
    .then(res => res.json())
  },

  match(queue) {
    fetch(`https://sea.api.riotgames.com/lol/match/v5/matches/${queue}?api_key=${process.env.REACT_APP_API_KEY}`)
  },

  icon(profileIconId) {
    return `http://ddragon.leagueoflegends.com/cdn/12.20.1/img/profileicon/${profileIconId}.png`
  }
  
}