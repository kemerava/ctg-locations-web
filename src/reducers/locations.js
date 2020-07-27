import immer from 'immer';

const initialState = {
  user: null,
  locations: [],
  showPublicLocations: false,
};

const locationsReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'USER_SIGNUP':
      console.log('Signing up', action);
      return state;

    case 'USER_SIGNIN':
      console.log('Signed in as', action.user);
      state.user = action.user;
      return state;

    case 'FETCH_LOCATIONS':
      state.locations = action.locations;
      return state;

    case 'ADD_LOCATION':
      state.locations.push(action.location);
      return state;

    case 'DELETE_LOCATION':
      state.locations = state.locations.filter(location => location.id !== action.id);
      return state;

    case 'SET_SHOW_PUBLIC':
      state.showPublicLocations = action.value;
      return state;

    default:
      return state;
  }
};

export default immer(locationsReducer);