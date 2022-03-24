import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { IndividualPage, Like, Saveitems } from "../../reduxStore/action";
import { Navbar_login } from "./navbar_after_login";
import { RightsideLogin } from "./rightside_after_login";

export const FilterTag = ()=>{
    let tags = JSON.parse(localStorage.getItem("tag"))
    console.log(tags)
    let [items,setItems] = useState([])
    const dispatch = useDispatch()
    const navigate = useNavigate()
    // const tagData = useSelector(store=>store.searchTags)
    // const [tags,setTags] = useState(tagData)
    // console.log("searchTag",tags)
    // console.log("tagData",tagData,"setItems",items)
    // let dispatch = useDispatch()
    useEffect(()=>{
        HandleLoad()
       } ,[])
    const HandleLoad = ()=>{
        
      fetch("http://localhost:3001/display_feeds")
      .then(res=>res.json())
      .then(res=>{
         setItems( res.filter((m)=> m.tag == tags))
      })
    
    }

const HandleTags = (str)=>{
    localStorage.setItem("tag",(JSON.stringify(str)))
    // window.location.reload();
    HandleLoad()
    // navigate("/tags")
    // const tags = useSelector(store=>store.searchTags)

    // const tags = tagData.filter(el=>el.tag===str)

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
        <div onLoad={HandleLoad}>
          {
            items.map((e)=>{
              return(
                <div className="feed_after_login" key={e.id}>
                <div className="feed_left">
                    <div className="feed_top">
                       <img src={e.profile_url}/>
                      <p>{e.author}<span className="feed_top_span"></span>{e.source.name ? " in " + e.source.name : "" }</p>
                      <p id="date_after_login">{(e.date)}</p>
                    </div>
                    <div className="feed_middle" onClick={ ()=> IndividualClick(e.id)} style={{textAlign:"left"}}>
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
        <div className="right_side">
        <div id="upgrade_and_search">
          <button id="updgrade_btn">Upgrade</button>
            <div id="search_under_upgrade">
              <img src="https://img.icons8.com/ios-glyphs/30/000000/search--v1.png"/>
              <input type="text" placeholder="Search"/>
            </div>
          
        </div>
        <div className="connect_with_us">
           <div className="connect_div_1">
             <img src="https://img.search.brave.com/cSPT9S8ZzjPVNfkjbbjI5At5Mhsn7dAQLj1QoB5Vtwg/rs:fit:632:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5R/eE9QakVROTFOOC15/ZUdfbTJSOUlRSGFG/aiZwaWQ9QXBp" id="connect_logo_1"/>
             <p>+</p>
             <img src="https://img.search.brave.com/i1Ns_8508zS07aRea7nDTEcAXM8S3BfAwPHrC38an0k/rs:fit:583:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5x/WlliUXhZQ1d0aTBQ/Z0NPNko4V3pRSGFH/QiZwaWQ9QXBp" id="connect_logo_2"/>
           </div>
           <div className="connect_div_2">
             <p>Discover Medium writers you already follow on Twitter.</p>
           </div>
           <div className="connect_div_3">
           <div>
             <div className="connect_div_3_button" onClick={"#"}>
             <img src="https://img.search.brave.com/i1Ns_8508zS07aRea7nDTEcAXM8S3BfAwPHrC38an0k/rs:fit:583:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5x/WlliUXhZQ1d0aTBQ/Z0NPNko4V3pRSGFH/QiZwaWQ9QXBp" id="connect_logo_3"/>
             <p>Connect to Twitter</p>
             </div>
             <div className="maybe_later">
               <a href="#"><p>Maybe Later</p></a>
             </div>
             </div>
             <hr className="hr_after_divs"/>
           </div>
        </div>

        <div className="recommended_topics">
           <p>Recommended Topics</p>
           <div className="various_tags">
              <div>
                <p onClick={()=>HandleTags("NFT's")}>NFT'S</p>
                <p onClick={()=>HandleTags("WEB-3")}>WEB 3.0</p>
                <p onClick={()=>HandleTags("Meetings")}>Meetings</p>
              </div>
              <div>
                <p onClick={()=>HandleTags("NATO")}>NATO</p>
                <p onClick={()=>HandleTags("Psychology")}>Psychology</p>
              </div>
              <div>
                <p onClick={()=>HandleTags("Philosophy")}>Philosophy</p>
                <p onClick={()=>HandleTags("Nature")}>Nature</p>
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
    )
}