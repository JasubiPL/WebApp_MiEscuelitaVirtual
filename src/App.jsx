import './App.css'
import Vowels from './components/Vowels'

const audioVocalA = document.getElementById("audioVocalA");
const audioVocalE = document.getElementById("audioVocalE");
const audioVocalI = document.getElementById("audioVocalI");
const audioVocalO = document.getElementById("audioVocalO");
const audioVocalU = document.getElementById("audioVocalU");

function App() {


  return (
    <div className="App">
      <Vowels />
    </div>
  )
}

export default App
