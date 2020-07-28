import React from 'react';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import SigninPage from './pages/SigninPage';
import SignupPage from './pages/SingupPage';
import LocationsPage from './pages/LocationsPage';
import Modal from "./components/Modal";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Route path="/" exact>
          <Redirect to="/signin" />
        </Route> */}
        <Route path="/signin" component={SigninPage} exact />
        <Route path="/signup" component={SignupPage} exact />
        <Route path="/locations" component={LocationsPage} exact />
        <Route path="/test-modal" component={Modal} exact />
      </BrowserRouter>
    </div>
  );
}

export default App;
