import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { IndividualPage, Like } from "../redux/action";

export const Blogs = ()=>{
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
        <div onLoad={GetData}>
          {
            data.map((e)=>{
              return(
                <div id="feed">
                <div id="feed_left">
                    <div id="feed_top">
                       <img src={e.profile_url}/>
                      <p>{e.author}<span id="feed_top_span"></span>{e.source.name ? " in " + e.source.name : "" }</p>
                    </div>
                    <div id="feed_middle" onClick={ ()=> IndividualClick(e.id)}>
                       <h2>{e.title}</h2>
                       <p>{e.description}</p>
                    </div>
                    <div id="feed_bottom">
                    <div id="time">
                       <p>{(e.date)}</p>
                       <p>{e.reading_time} </p>
                       </div>
                       <div id="bookmark" onClick={()=>BookmarkClick(e.id)}>
                       <img src="https://img.icons8.com/external-kmg-design-basic-outline-kmg-design/22/000000/external-bookmark-ui-essential-kmg-design-basic-outline-kmg-design.png"/>
                       </div>
                    </div>
                </div>
                <div id="feed_right" >
                <img src={e.urlToImage}/>
                </div>
                </div>
                )
              
            })
          }
        </div>
     
    )
}