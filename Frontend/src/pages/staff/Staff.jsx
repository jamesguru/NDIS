import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import "./staff.css";
import { FaUser } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { AiOutlineEye } from 'react-icons/ai';
import { logOut } from "../../redux/userRedux";
const Staff = () => {
  const [profile, setProfile] = useState(false);
  const dispatch = useDispatch();

const navigate = useNavigate();

  const handleProfile = () => {
    setProfile(!profile);
  };

  const handleLogout =()=>{
    dispatch(logOut())
    navigate("/login")
  
  }

  return (
    <div className="staff">
      <div className="stafftop">
        <span className="staff_shifts">All Shifts(10)</span>

        <div className="staff_profile">
          <div className="staff_icon">
            <FaUser size={18} color="#444" className="profile_icon" />
            <span className="staff_name" onClick={handleProfile}>
              John Doe
            </span>
          </div>

          {profile && (
            <div className="staff_account">

            <Link to="/myaccount">
              <span>My Account</span>
              </Link>

              <span>My Statements</span>
              <Link to="/myshifts">
                <span>Shifts</span>
              </Link>

             
                <span onClick={handleLogout}>Logout</span>
              
            </div>
          )}
        </div>
      </div>

      <div className="staff_main">

        <h3 className="shift-header">My shifts</h3>
        <div className="staff_main_card">
          <div className="staff_main_card_date">
            <span>SUN</span>
            <span>23</span>
          </div>

          <div className="staff_main_card_info">
            <span>Delawere Ave, 3:00pm - 11:00pm</span>
            <span>Notes: Lunch break at 5:00 PM</span>
          </div>

          <div className="shift_status">
            <span className="shift_status_ongoing">Ongoing</span>
          </div>

          <div className="staff_main_card_options">
            <Link to="/shift/12345">
             <AiOutlineEye size={25} />
            </Link>
            
          </div>
        </div>
        <div className="staff_main_card">
          <div className="staff_main_card_date">
            <span>TUE</span>
            <span>24</span>
          </div>

          <div className="staff_main_card_info">
            <span>Delawere Ave, 3:00pm - 11:00pm</span>
            <span>Notes: Lunch break at 5:00 PM</span>
          </div>
          <div className="shift_status">
            <span>Completed</span>
          </div>

          <div className="staff_main_card_options">
            <Link to="/shift/12345">
             <AiOutlineEye size={25} />
            </Link>
            
          </div>
        </div>

        <h3 className="shift-header">Bid shifts</h3>

        <div className="staff_main_card">
          <div className="staff_main_card_date">
            <span>THU</span>
            <span>01</span>
          </div>

          <div className="staff_main_card_info">
            <span>Delawere Ave, 3:00pm - 11:00pm</span>
            <span>Notes: Lunch break at 5:00 PM</span>
          </div>

          <div className="shift_status">
            <span>Completed</span>
          </div>

          <div className="staff_main_card_options">
            <Link to="/shift/12345">
             <AiOutlineEye size={25} />
            </Link>
            
          </div>
        </div>
        <div className="staff_main_card">
          <div className="staff_main_card_date">
            <span>SUN</span>
            <span>02</span>
          </div>

          <div className="staff_main_card_info">
            <span>Delawere Ave, 3:00pm - 11:00pm</span>
            <span>Notes: Lunch break at 5:00 PM</span>
          </div>
          <div className="shift_status">
            <span>Completed</span>
          </div>

          <div className="staff_main_card_options">
            <Link to="/shift/12345">
             <AiOutlineEye size={25} />
            </Link>
            
          </div>
        </div>
        <div className="staff_main_card">
          <div className="staff_main_card_date">
            <span>FRI</span>
            <span>12</span>
          </div>

          <div className="staff_main_card_info">
            <span>Delawere Ave, 3:00pm - 11:00pm</span>
            <span>Notes: Lunch break at 5:00 PM</span>
          </div>
          <div className="shift_status">
            <span>Completed</span>
          </div>
          <div className="staff_main_card_options">
            <Link to="/shift/12345">
             <AiOutlineEye size={25} />
            </Link>
            
          </div>
        </div>
        
        
      </div>
    </div>
  );
};

export default Staff;
