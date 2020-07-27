import React from 'react';
import GoogleMapReact from 'google-map-react';
import LocationMarker from './LocationMarker';
import { useSelector, useDispatch } from 'react-redux';
import { addLocation } from '../actions/locations';

function Map() {
  const locations = useSelector((state) => state.locations);
  const dispatch = useDispatch();

  const renderMarkers = () =>
    locations.map((location) => {
      const { latitude, longitude, description, id, isPublic } = location;

      console.log(location);

      return (
        <LocationMarker
          key={id}
          lat={latitude}
          lng={longitude}
          description={description}
          isPublic={isPublic}
        />
      );
    });

  const handleAddLocation = event => {
    const { lat, lng } = event;
    const description = window.prompt('Choose a location name');

    if (!description) {
      return;
    }

    dispatch(addLocation(lat, lng, description, true));
  };

  const key = process.env.REACT_APP_API_KEY;
  const bootstrapURLKeys = key ? { key } : null;

  return (
    <GoogleMapReact
      bootstrapURLKeys={bootstrapURLKeys}
      defaultCenter={{
        lat: 52.3703911,
        lng: 4.8905929,
      }}
      defaultZoom={15}
      onClick={handleAddLocation}
    >
      {renderMarkers()}
    </GoogleMapReact>
  );
}

export default React.memo(Map);
