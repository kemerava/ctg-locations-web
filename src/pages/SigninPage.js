import React, { useRef } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signIn } from '../actions/auth';

export default function SigninPage() {
  const history = useHistory();
  const usernameRef = useRef();
  const passwordRef = useRef();
  const dispatch = useDispatch();

  const handleSubmit = async () => {
    try {
      await dispatch(signIn(usernameRef.current.value, passwordRef.current.value));
      return history.push('/locations');
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <>
      <h1>Sign in</h1>
      <input ref={usernameRef} type="text" placeholder="Username" />
      <input ref={passwordRef} type="password" placeholder="Password" />
      <button onClick={handleSubmit}>Submit</button>

      <p>
        Don't have an account yet? Sign up <Link to="/signup">here</Link>.
      </p>
    </>
  );
}
