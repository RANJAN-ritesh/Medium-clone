import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { IndividualPage, Like } from "../../reduxStore/action";
import { Navbar_login } from "./navbar_after_login";
import { RightsideLogin } from "./rightside_after_login";

export const Blogs_after_login = () => {
  const { allFeeds, allTrendingFeeds, searchKeyword } = useSelector(
    (store) => store.feeds
  );

  console.log("re-render")

  let [data, setData] = useState(searchKeyword);
  let dispatch = useDispatch();
  const navigate = useNavigate();
  console.log("searchKeyword", searchKeyword);

  const IndividualClick = (e) => {
    const action = IndividualPage(e);
    // console.log(action)
    dispatch(action);
    navigate("/showFeed");
  };

  const BookmarkClick = (e) => {
    const BookmarkAction = Like(e);
    // console.log(BookmarkAction)
    dispatch(BookmarkAction);
  };

  const searched = (keyword) => (el) => {
    // console.log("el---------->",el)
    setData(keyword)
    el.author.toLowerCase().includes(keyword);
  };
  const searchedData = allFeeds.filter((el) =>
  el.author.toLowerCase().includes(data)
);
console.log("serchedData---->", searchedData);

  return (
    <div className="parent">
      <Navbar_login />
      <div>
        <div id="recommended_articles">Recommended Articles</div>
        <div>
          {
            allFeeds.map((e) => {
              return (
                <div className="feed_after_login" key={e.id}>
                  <div className="feed_left">
                    <div className="feed_top">
                      <img src={e.profile_url} />
                      <p>
                        {e.author}
                        <span className="feed_top_span"></span>
                        {e.source.name ? " in " + e.source.name : ""}
                      </p>
                      <p id="date_after_login">{e.date}</p>
                    </div>
                    <div
                      className="feed_middle"
                      onClick={() => IndividualClick(e.id)}
                      style={{ textAlign: "left" }}
                    >
                      <h2>{e.title}</h2>
                      <p>{e.description}</p>
                    </div>
                    <div className="feed_bottom">
                      <div className="time">
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
                    {/* <hr id="hr_line_1"></hr> */}
                  </div>
                  <div className="feed_right">
                    <img src={e.urlToImage} />
                    {/* <hr id="hr_line_2"></hr> */}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <RightsideLogin />
    </div>
  );
};
