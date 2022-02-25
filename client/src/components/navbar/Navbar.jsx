import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { LOGOUT } from "../../reduxStore/actionType";
import firebase from "firebase/compat/app";
import { auth } from "../../firebase/firebase";
import { googleAuthProvider } from "../../firebase/firebase";
import { LOGGED_IN_USER } from "../../reduxStore/actionType";
import "./navbar.css";


export const Navbar = () => {
  const { user } = useSelector((store) => ({ ...store }));
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
    <>
      <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        {user && user.token ? (
          <>
            <Link to="/" onClick={handleLogout}>
              <div style={{ display: "flex", marginRight: "10px" }}>
                <span>Logout</span>
                <span>
                  <img className="img" src={user.picture} />
                </span>
                <span>
                  <p>{user.name}</p>
                </span>
              </div>
            </Link>
          </>
        ) : (
          <Link to="/signin" >
            Login
          </Link>
        )}
      </div>
    </>
  );
};
