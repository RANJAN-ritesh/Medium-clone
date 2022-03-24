import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Popup } from "../popUp/popup";
import { PublishPopup } from "../popUp/publishPopup";
import "./writeBlog.css";
export const WriteBlog = () => {
  const user = useSelector(store => store.user)
  console.log("user",user)
const navigate = useNavigate()
  const initState = {
    title:"",
    body : ""
  }

  const [data, setData] = useState(initState)

  const {title, body} = data

  const handleChange = (e) => {

     const {name, value} = e.target
     setData({...data, [name] : value})

  }

  const handlePublish = () => {

    axios.post("http://localhost:3001/blogs",{
      title : title,
      body : body,
      date : new Date().toLocaleDateString()
    })
  }

  const [isOpen, setIsOpen] = useState(false)
  const togglePopup = () => {
    setIsOpen(!isOpen)
  };



  return (
    <div>
      <div className="navBar">
        <div className="divOne">
          <div className="mediumLogo" onClick={()=>navigate("/loggedIn")}>
            <img
              src="https://miro.medium.com/max/1400/1*psYl0y9DUzZWtHzFJLIvTw.png"
              alt=""
            />
          </div>
        <div className="userNameDiv"><span>Draft in {user.name}</span></div>
        </div>

        <div className="divTwo">
          <button className="publistBtn" onClick={togglePopup}>Publish</button>

          {isOpen && <Popup handleClose={togglePopup} content={<div><PublishPopup handlePublish={handlePublish} /> </div>}/>}

          <div>
            <select name="" className="dropDown">
              <option value="#">...</option>
              <option value="#">Add to publication</option>
              <option value="#">Share draft link</option>
              <option value="#">Share to twitter</option>
              <option value="#">Manage unlisted setting</option>
              <option value="#">Change featured image</option>
              <option value="#">Change display title/subtitle</option>
              <option value="#">Change tags</option>
              <option value="#">See revision history</option>
              <option value="#">More setting</option>
              <option value="#">Hints and keyboard shortscuts</option>
              <option value="#">More help</option>
            </select>
          </div>
          <div>
            <img
              src="https://www.seekpng.com/png/detail/941-9416917_notifications-bell-button-free-icon-svg-psd-png.png"
              alt=""
            />
          </div>
          <div className="userIcon"><img src={user.picture} alt="" /></div>
        </div>
      </div>
      <input className="title" type="text" name="title" value={title} placeholder="Title"  onChange={handleChange}/>
      <input className="body" type="text" name="body" value={body} placeholder="Tell your story..." onChange={handleChange} />
    </div>
  );
};
