import React from 'react';
import PublicMarker from './marker_public.png';
import PrivateMarker from './marker_private.png';

export default function LocationMarker({ isPublic }) {
  return (
    <img src={isPublic ? PublicMarker : PrivateMarker} alt="Random Location" width="40px" />
  );
}