import "./App.css";

import axios from "axios";
import { Routes, Route } from "react-router-dom";

// authentication
import { auth } from "./firebase/firebase";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { LOGGED_IN_USER } from "./reduxStore/actionType";
import { SignIn } from "./components/auth/signin";
import { Create } from "./components/auth/create";

import { Blogs_before_login } from "./components/Before_login/Blogs_before_login";
import { Blogs_after_login } from "./components/After_login/Blogs_after_login";
import { FilterTag } from "./components/After_login/filter_by_tag";


import { YourStories } from "./components/yourStories/yourStories";
import { WriteBlog } from "./components/writeBlog/writeBlog";
import { OpenBlog } from "./components/yourStories/openBlog";
import { OurStory } from "./components/navContent/OurStory/OurStory";
import { MemberShip } from "./components/navContent/MemberShip/MemberShip";
import { Write } from "./components/navContent/Write/Write";
import { Saveitems, SaveItemsTrending } from "./reduxStore/action";
import { ShowFeed } from "./components/feedDetail/feedDetail";

function App() {
  const dispatch = useDispatch();
  useEffect(async () => {
    const userAuth = auth.onAuthStateChanged(async (user) => {
      if (user) {
        // const { displayName, photoURL } = user._delegate;
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

  useEffect(() => {
    getFeeds();
    getTrendingFeeds();
  }, []);

  const getFeeds = () => {
    axios
      .get("http://localhost:3001/display_feeds")
      .then((res) => dispatch(Saveitems(res.data)));
  };
  const getTrendingFeeds = () => {
    axios
      .get("http://localhost:3001/trending_feeds")
      .then((res) => dispatch(SaveItemsTrending(res.data)));
  };

  return (
    <div className="App">
      <Routes>
        <Route path={"/"} element={<Blogs_before_login />}></Route>
        <Route path={"/loggedIn"} element={<Blogs_after_login />}></Route>
        <Route path={"/tags"} element={<FilterTag />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/create" element={<Create />}></Route>
        <Route path="/stories/*" element={<YourStories />}></Route>
        <Route path="/writeBlog" element={<WriteBlog />}></Route>
        <Route path="/openblog/:id" element={<OpenBlog />}></Route>
        <Route path="/ourstory" element={<OurStory />}></Route>
        <Route path="/membership" element={<MemberShip />}></Route>
        <Route path="/write" element={<Write />}></Route>
        <Route path="/showFeed" element={<ShowFeed />}></Route>
      </Routes>
    </div>
  );
}

export default App;
