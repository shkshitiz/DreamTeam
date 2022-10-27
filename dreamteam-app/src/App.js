import './App.css'
import ProfileSearch from './components/ProfileSearch'
// import {useState, useEffect} from 'react'
console.log(process.env.REACT_APP_API_KEY)

function App() {
  // const [details, setDetails] = useState({})

  // const details = {profile: {}, games: []}

  return (
    <div className="App">
      <header className="App-header">
        <h1>Dream Team</h1>
        <ProfileSearch />
      </header>
    </div>
  );
}

export default App;
