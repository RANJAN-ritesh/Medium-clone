import { Link, useParams } from "react-router-dom";
import "./deletePopup.css";

export const DeletePopup = () => {
  const { id } = useParams();

  const handleDelete = () => {
    fetch(`http://localhost:3001/blogs/${id}`, {
      method: "DELETE",
    });
  };
  return (
    <div className="contain">
      <div className="heading">
        <h1>Delete story</h1>
      </div>
      <div>
        <p>Are you sure you want to delete this story?</p>
        <Link to="/stories/*">
          {" "}
          <button id="cancelBtn">Cancel</button>
        </Link>
        <Link to="/stories/*">
          <button onClick={handleDelete} id="deleteBtn">
            Delete
          </button>
        </Link>
      </div>
    </div>
  );
};
