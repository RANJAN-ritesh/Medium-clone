import { Link, useNavigate } from "react-router-dom";

export const NavbarBeforeLogin = () => {
 
  return (
    <div className="NavbarDiv" id="mem">
      <div className="BrandImg">
        <Link to="/">
          {" "}
          <img
            src="https://cdn-static-1.medium.com/sites/medium.com/about/images/Medium-Logo-Black-RGB-1.svg"
            alt=""
          />
        </Link>
      </div>
      <div className="navopt">
        <ul>
          <li>
          <Link className="Linkclass" to="/create">
            <button id="startwriting">
               Get Started
            </button>
            </Link>
          </li>
          <li>
            <div>
              <Link className="Linkclass" to="/signin">
                Sign In
              </Link>
            </div>
          </li>
          <li>
            <div>
              <Link className="Linkclass" to="/write">
                Write
              </Link>
            </div>
          </li>
          <li>
            <div>
              <Link className="Linkclass" to="/membership">
                Membership
              </Link>
            </div>
          </li>
          <li>
            <div>
              <Link className="Linkclass" to="/ourstory">
                Our Story
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

// {user && user.token ? (
//     <>
//       <Link to="/" onClick={handleLogout}>
//         <div style={{ display: "flex", marginRight: "10px" }}>
//           <span>Logout</span>
//           <span>
//             <img className="img" src={user.picture} />
//           </span>
//           <span>
//             <p>{user.name}</p>
//           </span>
//         </div>
//       </Link>
//     </>
//   ) : (
//     <Link to="/signin" >
//       Login
//     </Link>
//   )}
