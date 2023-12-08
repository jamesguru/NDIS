import {  useState } from "react";
import "./Navbar.scss";
import { Link} from "react-router-dom";
//import {Link} from "react-router-dom"

const Navbar = () => {
  
  const [open, setOpen] = useState(false);
 

  const currentUser = {
    id: 1,
    username: "John Doe",
    isSeller: true,
  };

  return (
    <div className= "navbar">
      <div className="container">
        <div className="logo">

          <Link to="/" className="link">
          <span className="text">Attuined Pathways</span>
          </Link>
         

          <span className="dot">.</span>
        </div>
        <div className="links">
          
          <span>Sign in</span>
          {!currentUser?.isSeller && <span>Become a Seller</span>}
          {!currentUser && <button>Join</button>}
          {currentUser && (
            <div className="user" onClick={() => setOpen(!open)}>
              <img
                src="https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166__340.jpg"
                alt=""
              />
              <span>{currentUser?.username}</span>
              {open && (
                <div className="options">
                  {currentUser?.isSeller && (
                    <>
                      <Link className="link" to="/mygigs">Gigs</Link >
                      <Link className="link" to="/add">Add New Gig</Link >
                    </>
                  )}

                  <Link className="link" to="/orders">Orders</Link>
                  <Link className="link" to="/messages">Messages</Link>
                  <span>Logout</span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;