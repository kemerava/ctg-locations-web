import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import Map from '../components/Map';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLocations } from '../actions/locations';
import SideMenu from '../components/SideMenu/SideMenu';
import {fetchModal} from "../actions/modal";

const LocationsContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

const MapContainer = styled.div`
  flex: 1;
`;

const SideMenuContainer = styled.div`
  width: 240px;
`;

export default function LocationsPage() {
  const dispatch = useDispatch();
  const showPublicLocations = useSelector(state => state.showPublicLocations);
  const showModal = useSelector(state => state.showModalWindow)

  useEffect(() => {
    dispatch(fetchLocations(showPublicLocations));
    dispatch(fetchModal(false))
    console.log('Locations fetched');
  });

  return (
    <LocationsContainer>
      <MapContainer>
        <Map />
      </MapContainer>
      <SideMenuContainer>
        <SideMenu />
      </SideMenuContainer>
    </LocationsContainer>
  );
}