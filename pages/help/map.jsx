// import React from 'react'
// import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';



// const containerStyle = {
//   width: '400px',
//   height: '400px'
// };

// const center = {
//   lat: 30.708690,
//   lng: 76.742320
// };

// function MyComponent() {
//   const { isLoaded } = useJsApiLoader({
//     id: 'google-map-script',
//     googleMapsApiKey: "AIzaSyDFV4xaQARSMROoLZGQBkbiRuBsz5LYUik"
//   })

//   const [map, setMap] = React.useState(null)

//   const onLoad = React.useCallback(function callback(map) {
//     // This is just an example of getting and using the map instance!!! don't just blindly copy!
//     const bounds = new window.google.maps.LatLngBounds(center);
//     map.fitBounds(bounds);

//     setMap(map)
//   }, [])

//   const onUnmount = React.useCallback(function callback(map) {
//     setMap(null)
//   }, [])

//   return isLoaded ? (
//     <GoogleMap
//       mapContainerStyle={containerStyle}
//       // center={center}
//       zoom={-2}
     
//       onLoad={onLoad}
//       onUnmount={onUnmount}
//     >
//       <Marker position={{
//         lat: 30.708690,
//         lng: 76.742320
//       }} />
//       <></>
//     </GoogleMap>
//   ) : <></>
// }

// export default React.memo(MyComponent)


"user client"
import 'bootstrap/dist/css/bootstrap.css';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = () => {
  const containerStyle = {
    width: '100%',
    height: '400px',
  };

  const center = {
    lat: 30.706413,
    lng:  76.718100,
  };

  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={13}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;