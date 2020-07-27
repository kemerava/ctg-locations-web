import React from 'react';
import styled from '@emotion/styled';
import { useSelector, useDispatch } from 'react-redux';
import { deleteLocation, setShowPublic } from '../../actions/locations';

const LocationItem = styled.div`
  padding: 20px;
`;

const Filters = styled.div`
  background: #8095A8;
  padding: 10px;
  color: white;
`;

export default function SideMenu() {
  const locations = useSelector((state) => state.locations);
  const dispatch = useDispatch();

  const renderLocationItems = () =>
    locations.map((location) => {
      const { description, id } = location;

      return (
        <LocationItem key={id}>
          <p>{description}</p>
          {location.canDelete && <button onClick={() => dispatch(deleteLocation(id))}>Delete</button>}
        </LocationItem>
      );
    });

  const handleFilterChange = (event) => {
    dispatch(setShowPublic(event.target.checked));
  };

  return (
    <>
      <Filters>
        <p>
          Show public locations
          <input type="checkbox" onChange={handleFilterChange} />
        </p>
      </Filters>
      {renderLocationItems()}
    </>
  );
}