import React, { useRef } from 'react';
import { useParams } from 'react-router-dom';
import useMap from '../hooks/useMap';
import useCurrentPosition from '../hooks/useCurruntPosition';
import useEmergencyMarker from '../hooks/useEmergencyMarker';
// import useFilteringMarker from '../hooks/useFilteringMarkerWithAPI';

function EmergencyPage() {
  const mapRef = useRef(null);
  const { currentPosition } = useCurrentPosition();
  const { map } = useMap(
    mapRef,
    currentPosition?.coords.latitude,
    currentPosition?.coords.longitude,
  );
  const { emergencyId } = useParams();
  useEmergencyMarker(map, emergencyId);
  // useFilteringMarker(map);

  return (
    <div id="map" style={{ width: '500px', height: '500px' }} ref={mapRef} />
  );
}

export default EmergencyPage;
