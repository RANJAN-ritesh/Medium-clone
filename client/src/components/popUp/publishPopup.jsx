import { Link } from "react-router-dom";
import "./publishPopup.css";

export const PublishPopup = (props) => {
    console.log(props)
  return (
    <div className="contDiv">
      {/* left div */}
      <div className="wrapperDiv">
        <div >
          <p>Story Preview</p>
          <div className="aboveNote">
            Including a high quality image in your story to make it more
            invitiing to readers.
          </div>
        </div>
        <div className="noteDiv">
          <strong>Note :</strong> Changes here will affect how your story
          appears in public places like Medium’s homepage and in subscribers’
          inboxes — not the contents of the story itself.
        </div>
      </div>

      {/* right div */}

      <div className="rightDiv">
        Publishing to: user
        <p>
          Add or change tags (up to 5) so readers know what your story is about
        </p>
        <input type="text" placeholder="Add a tag..." />
        <p>Learn more about what happens to your post when you publish.</p>
        <Link to="/stories/*">
          <button onClick={props.handlePublish}>Publish Now</button>
        </Link>
        <span>Schedule for later</span>
      </div>
    </div>
  );
};
