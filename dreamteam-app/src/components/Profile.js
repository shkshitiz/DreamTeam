function Profile({profile}) {
  return(
    <section className="profile">
      <h2>{profile.name}</h2>
      <img src={`http://ddragon.leagueoflegends.com/cdn/12.20.1/img/profileicon/${profile.profileIconId}.png`} alt="icon" />
      <p>level: {profile.summonerLevel}</p>
    </section>
  )
}

export default Profile