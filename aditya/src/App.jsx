import React from 'react';


import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./components/Home";
import { MemberShip } from "./components/MemberShip";
import { SignIn } from "./components/SignIn";
import { Write } from "./components/Write";
import { OurStory } from "./components/OurStory";



function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/ourstory" element={<OurStory />}></Route>
        <Route path="/membership" element={<MemberShip />}></Route>
        <Route path="/write" element={<Write />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
        {/* <Route path="/about" element={<About />}></Route>
        <Route path="/terms" element={<Terms />}></Route>
        <Route path="/Privacy" element={<Privacy />}></Route>
        <Route path="/help" element={<Help />}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
