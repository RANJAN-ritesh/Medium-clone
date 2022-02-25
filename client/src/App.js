import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar/Navbar";
import { Home } from "./pages/home/Home";
import { About } from "./pages/about/About";
import { Counter } from "./components/Counter/Counter";
import { SignIn } from "./pages/signup/signin";

// authentication
import { auth } from "./firebase/firebase";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { LOGGED_IN_USER } from "./reduxStore/actionType";
import { Create } from "./pages/signup/create";

function App() {
  const dispatch = useDispatch();
  useEffect(async () => {
    const userAuth = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const { displayName, photoURL } = user._delegate;
        const { token, claims } = await user.getIdTokenResult();
        const { name, picture } = claims;
        console.log(claims);
        dispatch({
          type: LOGGED_IN_USER,
          payload: {
            email: user.email,
            name,
            picture,
            token,
          },
        });
      }
    });

    return () => userAuth();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/create" element={<Create />} />

      </Routes>
    </div>
  );
}

export default App;
