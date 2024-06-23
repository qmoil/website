import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
import { useMemo } from 'react';

const Map = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyBiHY6uXE-ORF2nrW1gqxK2FypMu26QTEI',
  });
  const center = useMemo(() => ({ lat: 6.4565217, lng: 3.4454153 }), []);
  return (
    <div className="h-screen">
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap
          mapContainerClassName="h-full w-full"
          center={center}
          zoom={10}
        >
          <Marker
            position={{ lat: 6.4565217, lng: 3.4454153 }}
            icon={'http://maps.google.com/mapfiles/ms/icons/green-dot.png'}
          />
        </GoogleMap>
      )}
    </div>
  );
};

export default Map;
