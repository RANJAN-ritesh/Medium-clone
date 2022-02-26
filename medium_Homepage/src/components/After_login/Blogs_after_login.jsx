import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { IndividualPage, Like, Saveitems } from "../../redux/action";
import { Navbar_login } from "./navbar_after_login";
import { RightsideLogin } from "./rightside_after_login";

export const Blogs_after_login = ()=>{
  let [data,setData] = useState([])
  let dispatch = useDispatch()
  
  useEffect(()=>{
    GetData()
   } ,[])

    const GetData = ()=>{
      fetch("http://localhost:3000/display_feeds")
      .then(res=>res.json())
      .then(res=>{
          // console.log(res)
          
          setData(res)
          const action = Saveitems(res)
          dispatch(action)
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
      <div className="parent">
        <Navbar_login/>
        <div onLoad={GetData}>
          {
            data.map((e)=>{
              return(
                <div className="feed_after_login">
                <div className="feed_left">
                    <div className="feed_top">
                       <img src={e.profile_url}/>
                      <p>{e.author}<span className="feed_top_span"></span>{e.source.name ? " in " + e.source.name : "" }</p>
                      <p id="date_after_login">{(e.date)}</p>
                    </div>
                    <div className="feed_middle" onClick={ ()=> IndividualClick(e.id)}>
                       <h2>{e.title}</h2>
                       <p>{e.description}</p>
                    </div>
                    <div className="feed_bottom">
                    <div className="time">
                       
                       <p>{e.reading_time} </p>
                       <p className="theTag">{e.tag}</p>
                       
                       </div>
                       <div className="bookmark" onClick={()=>BookmarkClick(e.id)}>
                       <img src="https://img.icons8.com/external-kmg-design-basic-outline-kmg-design/22/000000/external-bookmark-ui-essential-kmg-design-basic-outline-kmg-design.png"/>
                       </div>
                    </div>
                    {/* <hr id="hr_line_1"></hr> */}
                </div>
                <div className="feed_right" >
                <img src={e.urlToImage}/>
                {/* <hr id="hr_line_2"></hr> */}
                </div>
                
                </div>
                )
              
            })
          }
        </div>
        <RightsideLogin/>
        </div>
    )
}