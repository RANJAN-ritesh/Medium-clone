import { Link, useNavigate } from "react-router-dom";
import "./nav.css"

export const Navbar_login = () => {
  const navigate = useNavigate()
  // const HandleClick = ()=>{
  //     navigate("/a_log")
  // }
  return (
    <div className="navbar_after_login">
      <div onClick={()=>navigate("/loggedIn")}>
        <img
          src="https://img.search.brave.com/cSPT9S8ZzjPVNfkjbbjI5At5Mhsn7dAQLj1QoB5Vtwg/rs:fit:632:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5R/eE9QakVROTFOOC15/ZUdfbTJSOUlRSGFG/aiZwaWQ9QXBp"
          id="medium_logo"
        />
      </div>
      <div  onClick={()=>navigate("/loggedIn")}>
        <img
          src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/000000/external-home-multimedia-kiranshastry-solid-kiranshastry.png"
          id="home_logo"
        />
      </div>
      <div>
        <img
          src="https://img.icons8.com/fluent-systems-filled/64/000000/appointment-reminders.png"
          id="notification_logo"
        />
      </div>
      <div>
        <img
          src="https://img.icons8.com/external-phatplus-solid-phatplus/64/000000/external-bookmarks-essential-phatplus-solid-phatplus.png"
          id="bookmark_logo"
        />
      </div>

      <div>
      <Link to="/stories/*">  <img
          src="https://img.icons8.com/material-sharp/24/000000/overview-pages-1.png"
          id="stories_logo"
        /></Link>
      </div>

      <div>
       <Link to="/writeBlog"> <img
          src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/000000/external-edit-interface-kiranshastry-solid-kiranshastry-1.png"
          id="note_logo"
        /></Link>
      </div>
    </div>
  );
};
