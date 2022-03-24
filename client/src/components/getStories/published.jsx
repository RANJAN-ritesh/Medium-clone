import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Published = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    fetch("http://localhost:3001/blogs")
      .then((d) => d.json())
      .then((res) => {
        setData(res);
        console.log(res);
      });
  };

  const deleteBlog = (id) => {
    axios
      .delete(`http://localhost:3001/blogs/${id}`)
      .then((res) => console.log(res));
    getData();
  };
  return (
    <div className="parentDiv">
      {data.map((e) => (
        <div key={e.id} className="blogItem">
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to={`/openblog/${e.id}`}
          >
           <div className="blogText">

           <strong>
              <p>{e.title}</p>
            </strong>
           </div>
          </Link>

         <div className="blogText">
         <p>{e.body}</p>
         </div>
          <p>Publish on {e.date}</p>
          <img
            src="https://www.pngfind.com/pngs/m/78-782308_png-file-share-icon-ios-png-transparent-png.png"
            alt=""
          />
          <button onClick={() => deleteBlog(e.id)}>
            <img src="https://thumbs.dreamstime.com/b/delete-icon-line-style-any-projects-use-website-mobile-app-presentation-201128570.jpg" />
          </button>
        </div>
      ))}
    </div>
  );
};
