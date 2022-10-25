import {useState} from 'react'

function Profile() {
  const [summoner, setSummoner] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()
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

export default Profile
