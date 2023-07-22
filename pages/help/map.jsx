"use Client";

import React, { useEffect, useRef } from "react";



const  Map = () => {
  const mapContainerRef = useRef(null);
  const jubileeWalkLatLng = { lat: 30.6862, lng: 76.7077 };
  const markerTitle = "RBS LABS, Sector 70, Mohali";
  let marker;

  useEffect(() => {
    let map;
    let infoWindow;

    const loadMap = () => {
      map = new window.google.maps.Map(mapContainerRef.current, {
        center: jubileeWalkLatLng,
        zoom: 16,
      });

      marker = new window.google.maps.Marker({
        position: jubileeWalkLatLng,
        map: map,
        title: markerTitle,
        animation: window.google.maps.Animation.DROP,
      });

      infoWindow = new window.google.maps.InfoWindow({
        content: `<div>${markerTitle}</div>`,
      });

      // Add a click event listener to show the info window when the marker is clicked
      marker.addListener("click", () => {
        infoWindow.open(map, marker);
      });
    };

    // Load Google Maps script dynamically on the client-side
    if (typeof window !== "undefined" && typeof window.google === "undefined") {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDFV4xaQARSMROoLZGQBkbiRuBsz5LYUik`;
      script.async = true;
      script.defer = true;
      script.onload = loadMap;
      document.head.appendChild(script);
    } else {
      loadMap();
    }

    return () => {
      if (marker) {
        marker.setMap(null);
      }
    };
  }, []);

  return <div className="responsive-map" ref={mapContainerRef} style={{ height: '600px' }}></div>;
};

export default  Map;
