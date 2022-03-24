import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  auth,
  googleAuthProvider,
  facebookAuthProvider,
} from "../../firebase/firebase";
import { LOGGED_IN_USER } from "../../reduxStore/actionType";
import "./signin.css";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";

export const Create = () => {
  const [show, setShow] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClose = () => {
    setShow(false);
    navigate("/")
  };

  const googleLogin = async () => {
    setShow(false);
    auth
      .signInWithPopup(googleAuthProvider)
      .then(async (result) => {
        const { user } = result;
        const { token, claims } = await user.getIdTokenResult();
        const { name, picture } = claims;
        dispatch({
          type: LOGGED_IN_USER,
          payload: {
            email: user.email,
            name,
            picture,
            token,
          },
        });
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
        window.location.reload();
      });
  };

  const facebookLogin = () => {
    setShow(false);
    auth
      .signInWithPopup(facebookAuthProvider.addScope("user_birthday,email"))
      .then(async ({ user }) => {
        const { token, claims } = await user.getIdTokenResult();
        const { name, picture } = claims;
        dispatch({
          type: LOGGED_IN_USER,
          payload: {
            email: user.email,
            name,
            picture,
            token,
          },
        });
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
        window.location.reload();
      });
  };
  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton> </Modal.Header>
        <Modal.Body>
          <div className="main">
            <h2>Join Medium.</h2>
            <div>
              <button onClick={googleLogin} className="signInBtn">
                {" "}
                <img src="https://cdn-icons-png.flaticon.com/512/281/281764.png" />
                Sign up with google{" "}
              </button>
              <br />
              <button onClick={facebookLogin} className="signInBtn">
                {" "}
                <img src="https://cdn-icons-png.flaticon.com/512/174/174848.png" />
                Sign up with facebook{" "}
              </button>
              <br />
              <button className="signInBtn">
                {" "}
                <img src="https://cdn-icons.flaticon.com/png/512/2549/premium/2549872.png?token=exp=1645807581~hmac=bc792696e62b08ceab4f2d923a755565" />
                Sign up with Email{" "}
              </button>
            </div>

            <h6>
              Already have an account ?{" "}
              <span>
                <Link to="/signin" className="create">
                  Sign in
                </Link>
              </span>
            </h6>
            <p className="para">
              Click “Sign Up” to agree to Medium’s{" "}
              <span className="underline">Terms of Service</span> and
              acknowledge that Medium’s{" "}
              <span className="underline">Privacy Policy</span> applies to you.
            </p>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
