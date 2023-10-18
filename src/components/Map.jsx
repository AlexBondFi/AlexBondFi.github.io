import React, { useRef, useState, useEffect } from 'react';

const GoogleMapComponent = ({ lat, lng }) => { // Notice the props are destructured here
  const ref = useRef(null);
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (ref.current && !map) {
      const newMap = new window.google.maps.Map(ref.current, {
        center: { lat, lng },
        zoom: 8
      });
      setMap(newMap);

      // Add a marker using the passed lat/lng props
      new window.google.maps.Marker({
        position: { lat, lng },
        map: newMap
      });
    }
  }, [ref, map, lat, lng]); // Notice lat and lng are also added to the dependency array

  return (
    <div ref={ref} style={{ width: '100%', height: '300px' }}></div>
  );
};

export default GoogleMapComponent;
