import "./account.css";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
const Account = () => {
  return (
    <div className="myaccount">
        <Link to="/staff">
        <span className="myshifts_back">
          <FaArrowLeft /> Back
        </span>
      </Link>
        <h2>My account</h2>
        <hr />
        <label htmlFor="">Username</label>
        <input type="text" value="Johndoe"/>
        <label htmlFor="">Full Name</label>
        <input type="text" value="John Doe"/>
        <label htmlFor="">Email</label>
        <input type="text" value="johndoe@gmail.com"/>
        <label htmlFor="">Password</label>
        <input type="password" value="Johndoe"/>
        <label htmlFor="">Phone</label>
        <input type="text" placeholder="+107 678 182"/>
        <label htmlFor="">Address</label>
        <input type="text" placeholder="Deleware Australia"/>
        <label htmlFor="">Gender</label>
        <input type="text" placeholder="Male"/>
        <label htmlFor="">Staff ID</label>
        <input type="text" placeholder="AP100"/>
        <button className="update-myaccount">Update</button>
        <button className="logout-myAccount">Logout</button>
        
    </div>
  )
}

export default Account