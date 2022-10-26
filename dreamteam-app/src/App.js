import './App.css';
import Profile from './components/Profile';
console.log(process.env.REACT_APP_API_KEY)

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Dream Team</h1>
        <Profile />
      </header>
    </div>
  );
}

export default App;
