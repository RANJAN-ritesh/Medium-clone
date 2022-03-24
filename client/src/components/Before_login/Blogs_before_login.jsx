import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IndividualPage, Like } from "../../reduxStore/action";
import { NavbarBeforeLogin } from "./navbar_before_login";
import { Blogs_after_login } from "../After_login/Blogs_after_login";

export const Blogs_before_login = () => {
  const user = useSelector((store) => store.user);
  const {allFeeds} = useSelector(store=>store.feeds)
  const {allTrendingFeeds} = useSelector(store=>store.feeds)
  // console.log("feeds",allTrendingFeeds)
  let dispatch = useDispatch();
  const navigate = useNavigate();
  

  const IndividualClick = (e) => {
    const action = IndividualPage(e);
    // console.log(action);
    dispatch(action);
    navigate("/signin");
  };

  const BookmarkClick = (e) => {
    const BookmarkAction = Like(e);
    // console.log(BookmarkAction);
    dispatch(BookmarkAction);
  };

  return user && user.token ? (
    <Blogs_after_login />
  ) : (
    <div>
      <NavbarBeforeLogin />
      <div className="TheParent">
        <div id="trendingOn">
          <img src="https://img.icons8.com/ios/24/000000/circled-up-right-2.png" />
          <h3>Trending on Medium</h3>
        </div>
        <div  id="trending_div">
          {allTrendingFeeds.map((e) => {
            return (
              <div className="feed" key={e.id}>
                <div id="numbering_trending">
                  <h2>0{e.id}</h2>
                </div>
                <div className="feed_left_trending">
                  <div className="feed_top" id="feed_top_trending">
                    <img src={e.profile_url} />
                    <p>
                      {e.author}
                      <span className="feed_top_span"></span>
                      {e.source.name ? " in " + e.source.name : ""}
                    </p>
                  </div>
                  <div
                    className="feed_middle_trending"
                    onClick={() => IndividualClick(e.id)}
                    style={{textAlign:"left"}}
                  >
                    <h3 id="feed_middle_trending_h3">{e.title}</h3>
                  </div>
                  <div className="feed_bottom">
                    <div className="time_trending">
                      <p>{e.date}</p>
                      <p>{e.reading_time} </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <hr id="trending_bottom" />

        <div id="setfeed_parent">
          <div  id="setfeed_div">
            {allFeeds.map((e) => {
              return (
                <div className="feed" key={e.id}>
                  <div className="feed_left">
                    <div className="feed_top">
                      <img src={e.profile_url} />
                      <p>
                        {e.author}
                        <span className="feed_top_span"></span>
                        {e.source.name ? " in " + e.source.name : ""}
                      </p>
                    </div>
                    <div
                      className="feed_middle" id="feed_middle_id"
                      onClick={() => IndividualClick(e.id)}
                    >
                      <h2>{e.title}</h2>
                      <p>{e.description}</p>
                    </div>
                    <div className="feed_bottom">
                      <div className="time">
                        <p>{e.date}</p>
                        <p>{e.reading_time} </p>
                        <p className="theTag">{e.tag}</p>
                      </div>
                      <div
                        className="bookmark"
                        onClick={() => BookmarkClick(e.id)}
                      >
                        <img src="https://img.icons8.com/external-kmg-design-basic-outline-kmg-design/22/000000/external-bookmark-ui-essential-kmg-design-basic-outline-kmg-design.png" />
                      </div>
                    </div>
                  </div>
                  <div className="feed_right">
                    <img src={e.urlToImage} />
                  </div>
                </div>
              );
            })}
          </div>
          <div id="setfeed_right">
            <div className="recommended_topics">
              <p>Recommended Topics</p>
              <div className="various_tags">
                <div>
                  <p onClick={IndividualClick}>NFT'S</p>
                  <p onClick={IndividualClick}>WEB 3.0</p>
                  <p onClick={IndividualClick}>Meetings</p>
                </div>
                <div>
                  <p onClick={IndividualClick}>NATO</p>
                  <p onClick={IndividualClick}>Psychology</p>
                </div>
                <div>
                  <p onClick={IndividualClick}>Philosophy</p>
                </div>
              </div>
            </div>
            <hr className="hr_after_divs2" />

          </div>
        </div>
      </div>
    </div>
  );
};
