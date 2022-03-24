import "../yourStories/openBlog.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Popup } from "../popUp/popup";
import { DeletePopup } from "../popUp/deletePopup";
import { Navbar_login } from "../leftNavbar/nav";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Like } from "../../reduxStore/action";
import { RightsideLogin } from "../After_login/rightside_after_login";

export const ShowFeed = () => {
  const user = useSelector((store) => store.user);
  const { allFeeds, Individual_data, likes } = useSelector(
    (store) => store.feeds
  );
  const feedId = Individual_data;
  const dispatch = useDispatch();

  const [like, setLikes] = useState(26);
  const [toggle, setToggle] = useState(true);

  console.log(
    "likes",
    likes
  );

  const filteredData = allFeeds.filter((el) => el.id === feedId);
  console.log(filteredData);
  //   const { id } = useParams();
  const navigate = useNavigate();
  //   const [data, setData] = useState();

  const handleLikes = () => {
    console.log("inside likes");
    setToggle(!toggle);
    toggle ? setLikes(Number(like) + 1) : setLikes(Number(like) - 1);
    // dispatch(Like(like));

    // if(userData&&userData.token){
    //     return
    // }else{

    //     !userData&&!userData.token&&dispatch(Like({incBy:1,user:user}))
    //     setLikes(like+1)
    // }
  };

  const HandleTag = (str) => {
    localStorage.setItem("tag", JSON.stringify(str));

    navigate("/tags");
  };

  //   useEffect(() => {
  //     getData();
  //   }, []);
  //   const getData = () => {
  //     fetch(`http://localhost:3001/blogs/${id}`)
  //       .then((d) => d.json())
  //       .then((res) => setData(res));
  //   };

  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container">
      {/* left part */}
      <div className="leftDiv">{<Navbar_login />}</div>

      {/* middle part */}
      <div className="middleDiv">
        <div className="topMostDiv">
          <div className="user">
            <img style={{width:"50px",height:"55px",borderRadius:"50%"}} src={filteredData[0].profile_url} alt="" />
          </div>
          <div>
            <div className="userName">{filteredData[0].author}</div>
            <div>{filteredData[0].date}</div>
          </div>
        </div>
        <div className="blogBody">
          <p className="blogTitle">{filteredData[0].title}</p>
          <p style={{ fontSize: "14px", fontWeight: "500" }}>
            {filteredData[0].description}
          </p>
          <div>
            <img
              style={{ width: "450px", height: "300px", margin: "15px 0px" }}
              src={filteredData[0].urlToImage}
              alt=""
            />
          </div>
          <p className="blogBody">{filteredData[0].content}</p>
        </div>

        <div className="imgDiv">
          <div className="commentDiv">
            <span>
              <img
                src="https://www.pngitem.com/pimgs/m/21-212930_transparent-square-speech-bubble-png-transparent-instagram-comment.png"
                alt=""
              />
            </span>

            <span onClick={handleLikes}>
              <img
                src={
                  toggle
                  ? "https://cdn-icons-png.flaticon.com/512/126/126473.png"
                  : "https://cdn-icons.flaticon.com/png/512/739/premium/739231.png?token=exp=1645974826~hmac=bfa258d05362780d418798a266cb2abc"
                }
                alt=""
              />
            </span>
            <span>{like}</span>
          </div>
          <div className="socialIcons">
            <img
              src="https://image.similarpng.com/very-thumbnail/2020/06/Black-icon-Twitter-logo-transparent-PNG.png"
              alt=""
            />
            <img
              src="https://www.citypng.com/public/uploads/preview/-11595326936asbkomoamd.png"
              alt=""
            />
            <img
              src="https://cdn.icon-icons.com/icons2/2428/PNG/512/linkedin_black_logo_icon_147114.png"
              alt=""
            />
            <img
              src="https://icon-library.com/images/link-png-icon/link-png-icon-1.jpg"
              alt=""
            />

            <button onClick={togglePopup}>
              <img
                src="https://png.pngtree.com/png-clipart/20190520/original/pngtree-delete-vector-icon-png-image_4236653.jpg"
                alt=""
              />
            </button>

            {isOpen && (
              <Popup
                handleClose={togglePopup}
                content={
                  <div>
                    <DeletePopup />{" "}
                  </div>
                }
              />
            )}
          </div>
        </div>

        <div className="moreFrom">
          <p>More from {filteredData[0].author}</p>
        </div>
        <div className="bottomText">
          Love podcasts or audiobooks? Learn on the go with our new app.{" "}
          <button>Try knowable</button>
        </div>
      </div>

      {/* right part */}
      <div style={{marginLeft:"-1155px"}}>

      <RightsideLogin/>
      </div>
      {/* <div className="rightDiv" style={{marginLeft:"0.1rem",paddingLeft:"-2rem",marginRight:"0"}}>
        <div id="upgrade_and_search">
          <button id="updgrade_btn">Upgrade</button>
          <div id="search_under_upgrade">
            <img src="https://img.icons8.com/ios-glyphs/30/000000/search--v1.png" />
            <input type="text" placeholder="Search" />
          </div>
        </div>
        <div className="connect_with_us">
          <div className="connect_div_1">
            <img
              src="https://img.search.brave.com/cSPT9S8ZzjPVNfkjbbjI5At5Mhsn7dAQLj1QoB5Vtwg/rs:fit:632:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5R/eE9QakVROTFOOC15/ZUdfbTJSOUlRSGFG/aiZwaWQ9QXBp"
              id="connect_logo_1"
            />
            <p>+</p>
            <img
              src="https://img.search.brave.com/i1Ns_8508zS07aRea7nDTEcAXM8S3BfAwPHrC38an0k/rs:fit:583:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5x/WlliUXhZQ1d0aTBQ/Z0NPNko4V3pRSGFH/QiZwaWQ9QXBp"
              id="connect_logo_2"
            />
          </div>
          <div className="connect_div_2">
            <p>Discover Medium writers you already follow on Twitter.</p>
          </div>
          <div className="connect_div_3">
            <div style={{width:"115%",marginLeft:"-2rem"}}>
              <a href="https://twitter.com/mediumsupport" style={{textDecoration:"none"}}>
                <div className="connect_div_3_button">
                  <img
                    src="https://img.icons8.com/ios/50/000000/twitter--v1.png"
                    id="connect_logo_3"
                  />
                  <p id="twitter">Connect to Twitter</p>
                </div>
              </a>
            </div>
            <hr className="hr_after_divs" />
          </div>
        </div>
        <div className="recommended_topics">
          <p  style={{textAlign:"left"}}>Recommended Topics</p>
          <div className="various_tags">
            <div>
              <p onClick={() => HandleTag("NFT's")}>NFT'S</p>
              <p onClick={() => HandleTag("WEB-3")}>WEB 3.0</p>
              <p onClick={() => HandleTag("Meetings")}>Meetings</p>
            </div>
            <div>
              <p onClick={() => HandleTag("NATO")}>NATO</p>
              <p onClick={() => HandleTag("Psychology")}>Psychology</p>
            </div>
            <div>
              <p onClick={() => HandleTag("Philosophy")}>Philosophy</p>
              <p onClick={() => HandleTag("Nature")}>Nature</p>
            </div>
          </div>
        </div>
        <hr className="hr_after_divs2" />
      </div> */}
    </div>
  );
};
