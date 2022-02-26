import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { IndividualPage, Like } from "../../redux/action";
import { NavbarBeforeLogin } from "./navbar_before_login";

export const Blogs_before_login = ()=>{
  let [data,setData] = useState([])
  let [otherdata,setOtherData] = useState([])
  let dispatch = useDispatch()
  
  useEffect(()=>{
    GetData()
   } ,[])

   useEffect(()=>{
     GetOtherData()
   },[])
    const GetData = ()=>{
      fetch("http://localhost:3000/display_feeds")
      .then(res=>res.json())
      .then(res=>{
          // console.log(res)
          setData(res)
      })
    }

    const GetOtherData = ()=>{
      fetch("http://localhost:3000/trending_feeds")
      .then(res=>res.json())
      .then(res=>{
          // console.log(res)
          setOtherData(res)
      })
    }

    const IndividualClick = (e)=>{
      const action = IndividualPage(e);
      console.log(action)
      dispatch(action)
    }

    const BookmarkClick = (e)=>{
      const BookmarkAction = Like(e);
      console.log(BookmarkAction)
      dispatch(BookmarkAction)
    }
  
    return(
      <div>
      <NavbarBeforeLogin/>
      <div className="TheParent">
      <div id="trendingOn">
      <img src="https://img.icons8.com/ios/24/000000/circled-up-right-2.png"/>
        <h3>
          Trending on Medium
        </h3>
      </div>
         <div onLoad={GetOtherData} id="trending_div">
             {
              otherdata.map((e)=>{
                return(
                <div className="feed">
                <div id="numbering_trending"><h2>0{e.id}</h2></div>
                <div className="feed_left_trending">
                    <div className="feed_top" id="feed_top_trending">
                       <img src={e.profile_url}/>
                      <p>{e.author}<span className="feed_top_span"></span>{e.source.name ? " in " + e.source.name : "" }</p>
                    </div>
                    <div className="feed_middle_trending" onClick={ ()=> IndividualClick(e.id)}>
                       <h3>{e.title}</h3>
                    </div>
                    <div className="feed_bottom">
                    <div className="time_trending">
                       <p>{(e.date)}</p>
                       <p>{e.reading_time} </p>
                       
                       </div>
                    </div>
                </div>
                </div>
                )
              })
             }
         </div>
         <hr id="trending_bottom"/>

         <div id="setfeed_parent">

        <div onLoad={GetData} id="setfeed_div">
          {
            data.map((e)=>{
              return(
                <div className="feed">
                <div className="feed_left">
                    <div className="feed_top">
                       <img src={e.profile_url}/>
                      <p>{e.author}<span className="feed_top_span"></span>{e.source.name ? " in " + e.source.name : "" }</p>
                    </div>
                    <div className="feed_middle" onClick={ ()=> IndividualClick(e.id)}>
                       <h2>{e.title}</h2>
                       <p>{e.description}</p>
                    </div>
                    <div className="feed_bottom">
                    <div className="time">
                       <p>{(e.date)}</p>
                       <p>{e.reading_time} </p>
                       <p className="theTag">{e.tag}</p>
                       
                       </div>
                       <div className="bookmark" onClick={()=>BookmarkClick(e.id)}>
                       <img src="https://img.icons8.com/external-kmg-design-basic-outline-kmg-design/22/000000/external-bookmark-ui-essential-kmg-design-basic-outline-kmg-design.png"/>
                       </div>
                    </div>
                </div>
                <div className="feed_right" >
                <img src={e.urlToImage}/>
                </div>
                </div>
                )
              
            })
          }
        </div>
        <div id="setfeed_right">
        <div className="recommended_topics">
           <p>Recommended Topics</p>
           <div className="various_tags">
              <div>
                <p>NFT'S</p>
                <p>WEB 3.0</p>
                <p>Meetings</p>
              </div>
              <div>
                <p>NATO</p>
                <p>Psychology</p>
              </div>
              <div>
                <p>Philosophy</p>
              </div>
           </div>
           
        </div>
        <hr className="hr_after_divs2"/>

      <div className="reading_list">
         <p className="reading_list_p_1">Reading List</p>
         <p className="reading_list_p_2">Click the <span> <img src="https://img.icons8.com/external-kmg-design-basic-outline-kmg-design/22/000000/external-bookmark-ui-essential-kmg-design-basic-outline-kmg-design.png"/>
         </span> on any story to easily add it to your <br/> reading list or a custom list that you can share.</p>
      </div>
        </div>
        </div>
        </div>
        </div>
    )
}