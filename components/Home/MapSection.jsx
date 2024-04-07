import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

function MapSection() {
  const containerStyle = {
    width: '100%',
    height: window.innerWidth * 0.45
  };
  
  const center = {
    lat: -3.745,
    lng: -38.523
  };

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={{mapId: 'a15984ecdd2cd79f'}}
    >
      { /* Child components, such as markers, info windows, etc. */ }
      <></>
    </GoogleMap>
  )
}

export default MapSection