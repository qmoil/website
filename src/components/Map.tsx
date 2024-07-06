import { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;

const Map = () => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (mapContainerRef.current) {
      const map = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [3.4454153, 6.4565217],
        zoom: 12.5,
      });

      // add navigation control (the +/- zoom buttons)
      map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');

      // clean up on unmount
      return () => map.remove();
    }
  }, []);

  return (
    <div className="w-full h-96 p-6 flex justify-center">
      <div className="w-[1120px] h-full" ref={mapContainerRef} />
    </div>
  );
};

export default Map;

// import React, { useRef, useEffect } from 'react';
// import mapboxgl from 'mapbox-gl';

// mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;
// console.log(mapboxgl.accessToken);

// // const center = useMemo(() => ({ lat: 6.4565217, lng: 3.4454153 }), []);

// // center: [-104.9876, 39.7405],

// const Map = () => {
//   const mapContainerRef = useRef(null);
//   // initialize map when component mounts
//   useEffect(() => {
//     const map = new mapboxgl.Map({
//       container: mapContainerRef.current,
//       // See style options here: https://docs.mapbox.com/api/maps/#styles
//       style: 'mapbox://styles/mapbox/streets-v11',
//       center: [3.4454153, 6.4565217],
//       zoom: 12.5,
//     });
//     // add navigation control (the +/- zoom buttons)
//     map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');
//     // clean up on unmount
//     return () => map.remove();
//   }, []); // eslint-disable-line react-hooks/exhaustive-deps
//   return (
//     <div className="w-full h-96 p-6 flex justify-center">
//       <div className="w-[1120px] h-full" ref={mapContainerRef} />
//     </div>
//   );
// };

// export default Map;
