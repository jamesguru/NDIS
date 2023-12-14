import { useState } from "react";
import { Link } from "react-router-dom";
import "./staff.css";
import { FaUser } from "react-icons/fa";
import { AiOutlineEye } from 'react-icons/ai';
const Staff = () => {
  const [profile, setProfile] = useState(false);
  
  const handleProfile = () => {
    setProfile(!profile);
  };

  

  return (
    <div className="staff">
      <div className="stafftop">
        <span className="staff_shifts">My Shifts(10)</span>

        <div className="staff_profile">
          <div className="staff_icon">
            <FaUser size={18} color="#444" className="profile_icon" />
            <span className="staff_name" onClick={handleProfile}>
              John Doe
            </span>
          </div>

          {profile && (
            <div className="staff_account">
              <span>My Account</span>
              <span>My Statements</span>
              <Link to="/myshifts">
                <span>Shifts</span>
              </Link>

              <Link to="/">
                <span>Logout</span>
              </Link>
            </div>
          )}
        </div>
      </div>

      <div className="staff_main">
        <div className="staff_main_card">
          <div className="staff_main_card_date">
            <span>SUN</span>
            <span>23</span>
          </div>

          <div className="staff_main_card_info">
            <span>Delawere Ave, 3:00pm - 11:00pm</span>
            <span>Notes: Lunch break at 5:00 PM</span>
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
            <span>23</span>
          </div>

          <div className="staff_main_card_info">
            <span>Delawere Ave, 3:00pm - 11:00pm</span>
            <span>Notes: Lunch break at 5:00 PM</span>
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
            <span>23</span>
          </div>

          <div className="staff_main_card_info">
            <span>Delawere Ave, 3:00pm - 11:00pm</span>
            <span>Notes: Lunch break at 5:00 PM</span>
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
            <span>23</span>
          </div>

          <div className="staff_main_card_info">
            <span>Delawere Ave, 3:00pm - 11:00pm</span>
            <span>Notes: Lunch break at 5:00 PM</span>
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
            <span>23</span>
          </div>

          <div className="staff_main_card_info">
            <span>Delawere Ave, 3:00pm - 11:00pm</span>
            <span>Notes: Lunch break at 5:00 PM</span>
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
