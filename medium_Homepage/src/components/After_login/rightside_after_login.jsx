import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { Searchtag } from "../../redux/action"

export const RightsideLogin = ()=>{
  let navigate = useNavigate()

  const HandleTag = (str)=>{
    localStorage.setItem("tag",(JSON.stringify(str)))
    
    navigate("/tags")
  }

    return(
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
                <p onClick={()=>HandleTag("NFT's")}>NFT'S</p>
                <p onClick={()=>HandleTag("WEB-3")}>WEB 3.0</p>
                <p onClick={()=>HandleTag("Meetings")}>Meetings</p>
              </div>
              <div>
                <p onClick={()=>HandleTag("NATO")}>NATO</p>
                <p onClick={()=>HandleTag("Psychology")}>Psychology</p>
              </div>
              <div>
                <p onClick={()=>HandleTag("Philosophy")}>Philosophy</p>
                <p onClick={()=>HandleTag("Nature")}>Nature</p>
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
    )
}