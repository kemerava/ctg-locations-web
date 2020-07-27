import axios from 'axios';

export const signUp = (username, password) => {
  return async (dispatch) => {
    await axios.post('http://localhost:3000/auth/signup', {
      username,
      password, 
    });

    dispatch({
      type: 'USER_SIGNUP',
    });
  };
};

export const signIn = (username, password) => {
  return async (dispatch) => {
    await axios.post('http://localhost:3000/auth/signin', {
      username,
      password, 
    }, {
      withCredentials: true,
    });

    dispatch({
      type: 'USER_SIGNIN',
      user: username,
    });
  };
};