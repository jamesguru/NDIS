import "./account.css";
import { FaArrowLeft } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { logOut } from "../../redux/userRedux";
import { Link,useNavigate} from "react-router-dom";
const Account = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout =()=>{
    dispatch(logOut())
    navigate("/login")
  
  }

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
        <input type="text" placeholder={user.currentUser.username}/>
        <label htmlFor="">Full Name</label>
        <input type="text" placeholder={user.currentUser.fullname}/>
        <label htmlFor="">Email</label>
        <input type="text" placeholder={user.currentUser.email}/>
        <label htmlFor="">Phone</label>
        <input type="text" placeholder={user.currentUser.phone} />
        <label htmlFor="">Address</label>
        <input type="text"placeholder={user.currentUser.address}/>
        <label htmlFor="">Gender</label>
        <input type="text" placeholder={user.currentUser.gender}/>
        <label htmlFor="">Staff ID</label>
        <input type="text" placeholder={user.currentUser.staffID}/>
        <button className="update-myaccount">Update</button>
        <button className="logout-myAccount" onClick={handleLogout}>Logout</button>
        
    </div>
  )
}

export default Account