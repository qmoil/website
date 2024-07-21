import { useRef, useEffect } from 'react';
import mapboxgl, { LngLatLike } from 'mapbox-gl';

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;
console.log(mapboxgl.accessToken);

const Map = () => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (mapContainerRef.current && !mapRef.current) {
      // Initialize only if not already initialized
      const centerCoordinates = [3.4454153, 6.4565217] as LngLatLike;

      mapRef.current = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: centerCoordinates,
        zoom: 13,
      });

      // Add navigation control (the +/- zoom buttons)
      mapRef.current.addControl(
        new mapboxgl.NavigationControl(),
        'bottom-right'
      );

      // Add marker to the center
      new mapboxgl.Marker().setLngLat(centerCoordinates).addTo(mapRef.current);

      // Clean up on unmount
      return () => {
        if (mapRef.current) {
          mapRef.current.remove();
          mapRef.current = null;
        }
      };
    }
  }, []);

  return (
    <div className="w-full h-96 p-6 flex justify-center">
      <div className="w-[1120px] h-full" ref={mapContainerRef} />
    </div>
  );
};

export default Map;
