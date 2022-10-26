import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [random, setRandom] = useState(Math.random());

  // Access Token
  mapboxgl.accessToken = "pk.eyJ1IjoibmlzaHUwMjMiLCJhIjoiY2w5b3R6cG9mMDJiazN2cDNsc2o4NGVjeiJ9.9pzPXrwOwI6fG-tR6IB6Hw";

  // Instantiate the map by wrapping them in a UseEffect so that it runs after the component re-renders, since it should run only once, [] as dependency 


  useEffect(() => {
    const map = new mapboxgl.Map({
    container: 'map', // matches <div id="map" />
     style: 'mapbox://styles/mapbox/dark-v10', // sets the dark mode
    center: [43.4723, 80.5449], // Sets the center of the map (long, lat)
     zoom: 9
});

},[])




  return (
    <div className="App">
    
      <h1>Ontario University Locator</h1>
      <button id="re-render" onClick={() => setRandom(Math.random())}>Re-render</button>
        <div id="map"></div>
     
    
    </div>
  )
}

export default App
