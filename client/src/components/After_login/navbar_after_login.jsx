import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import firebase from "firebase/compat/app";
import { LOGOUT } from "../../reduxStore/actionType";

export const Navbar_login = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    firebase.auth().signOut();
    dispatch({
      type: LOGOUT,
      payload: null,
    });
    navigate("/");
  };

  return (
    <div className="navbar_after_login" id="navbar_a_id">
      <div onClick={()=>navigate("/loggedIn")}>
        <img
          src="https://img.search.brave.com/cSPT9S8ZzjPVNfkjbbjI5At5Mhsn7dAQLj1QoB5Vtwg/rs:fit:632:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5R/eE9QakVROTFOOC15/ZUdfbTJSOUlRSGFG/aiZwaWQ9QXBp"
          id="medium_logo"
        />
      </div>
      <div  onClick={()=>navigate("/loggedIn")} title="Go to HomePage">
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
      <div >
        <img
          src="https://img.icons8.com/external-phatplus-solid-phatplus/64/000000/external-bookmarks-essential-phatplus-solid-phatplus.png"
          id="bookmark_logo"
        />
      </div>
      <div  onClick={()=>navigate("/stories/*")} title="Write Story">
        <img
          src="https://img.icons8.com/material-sharp/24/000000/overview-pages-1.png"
          id="stories_logo"
        />
      </div>
      <div  onClick={()=>navigate("/writeBlog")} title="Your Stories">
        <img
          src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/000000/external-edit-interface-kiranshastry-solid-kiranshastry-1.png"
          id="note_logo"
        />
      </div>
      <div > 
        <Link to="/" onClick={handleLogout}>
          <div id="signout_logo" title={"Signout from" + " " + user.name} >
            <img src={user.picture}/>
          </div>
        </Link>
      </div>
    </div>
  );
};
