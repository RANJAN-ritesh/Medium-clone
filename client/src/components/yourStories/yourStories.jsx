import { useState } from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import { Drafts } from "../getStories/drafts";
import { Published } from "../getStories/published";
import { Responses } from "../getStories/responces";
import { Navbar_login } from "../leftNavbar/nav";
import { RightsideLogin } from "../After_login/rightside_after_login";

import "./yourStories.css";
import "../../";
export const YourStories = () => {
  const navigate = useNavigate();
  const HandleTag = (str) => {
    localStorage.setItem("tag", JSON.stringify(str));

    navigate("/tags");
  };

  return (
    <div className="container">
      {/* left part */}
      <div className="leftDiv">
        {" "}
        <Navbar_login />
      </div>

      {/* middle part */}
      <div className="middleDiv">
        <div className="topDiv">
          <p>Your stories</p>

          <div className="btnDiv">
            <Link to="/writeBlog">
              {" "}
              <button className="firstBtn">Write a story</button>
            </Link>{" "}
            <button className="secondBtn">Import a story</button>
          </div>
        </div>
        <div className="linkDiv">
          <div>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="stories/draft"
            >
              Drafts
            </Link>
          </div>

          <div>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="stories/publish"
            >
              Published{" "}
            </Link>
          </div>

          <div>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="stories/responce"
            >
              Responses
            </Link>
          </div>
        </div>
        <div className="changingDiv">
          <Routes>
            <Route path="stories/draft" element={<Drafts />}></Route>
            <Route path="stories/publish" element={<Published />}></Route>
            <Route path="stories/responce" element={<Responses />}></Route>
          </Routes>
        </div>
      </div>

      {/* right part */}
      <div style={{ marginLeft: "-1155px" }}>
        <RightsideLogin />
      </div>
      {/* <div className="rightDiv">
      <div id="upgrade_and_search">
          <button id="updgrade_btn">Upgrade</button>
            <div id="search_under_upgrade">
              <img src="https://img.icons8.com/ios-glyphs/30/000000/search--v1.png"/>
              <input type="text" placeholder="Search"/>
            </div>
        </div>
        <div className="connect_with_us">
           <div className="connect_div_1">
             <img src="https://img.search.brave.com/cSPT9S8ZzjPVNfkjbbjI5At5Mhsn7dAQLj1QoB5Vtwg/rs:fit:632:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5R/eE9QakVROTFOOC15/ZUdfbTJSOUlRSGFG/aiZwaWQ9QXBp" id="connect_logo_1"/>
             <p>+</p>
             <img src="https://img.search.brave.com/i1Ns_8508zS07aRea7nDTEcAXM8S3BfAwPHrC38an0k/rs:fit:583:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5x/WlliUXhZQ1d0aTBQ/Z0NPNko4V3pRSGFH/QiZwaWQ9QXBp" id="connect_logo_2"/>
           </div>
           <div className="connect_div_2">
             <p>Discover Medium writers you already follow on Twitter.</p>
           </div>
           <div className="connect_div_3">
           <div>
           <a href="https://twitter.com/mediumsupport" style={{textDecoration:"none"}}>
             <div className="connect_div_3_button" id="twitterBtn"  onClick={"#"}>
             <img src="https://img.icons8.com/ios/50/000000/twitter--v1.png" id="connect_logo_3"/>
             <p id="twitter">Connect to Twitter</p>
             </div>
             </a>
             </div>
             <hr className="hr_after_divs"/>
           </div>
        </div>
        <div className="recommended_topics">
           <p>Recommended Topics</p>
           <div className="various_tags">
              <div>
                <p onClick={()=>HandleTag("NFT's")}>NFT'S</p>
                <p onClick={()=>HandleTag("WEB-3")}>WEB 3.0</p>
                <p onClick={()=>HandleTag("Meetings")}>Meetings</p>
              </div>
              <div>
                <p onClick={()=>HandleTag("NATO")}>NATO</p>
                <p onClick={()=>HandleTag("Psychology")}>Psychology</p>
              </div>
              <div>
                <p onClick={()=>HandleTag("Philosophy")}>Philosophy</p>
                <p onClick={()=>HandleTag("Nature")}>Nature</p>
              </div>
           </div>
        </div>
        <hr className="hr_after_divs2"/>
      </div> */}
    </div>
  );
};

//className="rightDiv"
