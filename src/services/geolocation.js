export function getCurrentLatLng() {
  // Wrap getCurrentPosition to return a promise
  //promise allows us to handle things that take forever to finish , takes time to get responce and then get location 
  return new Promise(resolve => {
    navigator.geolocation.getCurrentPosition(pos => resolve({
      lat: pos.coords.latitude,
      lng: pos.coords.longitude
    }));
  });
}