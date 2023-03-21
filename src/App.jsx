import { Route, Routes } from "react-router-dom";
// import SignUp from './SignUp';
import Login from "./Login";
import Dash from "./Dash";
import "./App.css";
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import SignUp from "./SignUp";
import Login from "./Login";
import Dash from "./Dash";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  // if loggedIn is truthy, go to Dash; if not, redirect to Login
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Login />} />
        {/* <Route path="/signup" element={<SignUp />}></Route> */}
        <Route path="/dash" element={<Dash />}></Route>
      </Routes>
    </div>
  );
}

export default App;
