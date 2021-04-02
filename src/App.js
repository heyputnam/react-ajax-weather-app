

//side effect step 1
import { useEffect, useState } from 'react';
import { getCurrentLatLng } from './services/geolocation';
import './App.css';
import Map from './components/Map/Map';
function App () {
  const [ appData, setAppData ] = useState({
    lat: null,
    lng: null,
  });
  async function getAppData() {
    const {lat, lng} = await getCurrentLatLng(); // await is like wait unil I'm done
    
    const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather'
    const API_KEY = '5b3c5a41e420b342a7d2e498f5e3fd82'

    const weatherDAta = await fetch(`${BASE_URL}?lat=${lat}lon=${lng}&units=imperial&appid=${API_KEY}`)
    .then(res => res.json());
  
    // set component state to the received values
    setAppData({lat, lng})
  }
   //side effect step 2
   useEffect(() => {
    //using the function we created above within the use effect
    // make your ajax request here or anything else you need on page load
    getAppData();
  }, []);
  return (
    <div className='App'>
      <Map lat={appData.lat} lng={appData.lng} />
      <header className='App-header'>
          REACT WEATHER
      </header>
    </div>
  );
}
export default App;