

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
    // console.log('got app data')
    // we need weather data
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