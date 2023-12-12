import { useState } from "react";
import { Link } from "react-router-dom";
import "./staff.css";
import { FaUser } from "react-icons/fa";
const Staff = () => {
  const [profile, setProfile] = useState(false);
  const handleProfile = () => {
    setProfile(!profile);
  };

  return (
    <div className="staff">
      <div className="stafftop">
        <span className="staff_shifts">My Shifts</span>

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
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Date and Time</th>
              <th>Location</th>
              <th>Type</th>
              <th>Duration</th>
              <th>Status</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>2023-12-12 08:00 AM - 04:00 PM</td>
              <td>Main Office</td>
              <td>Morning</td>
              <td>8 hours</td>
              <td>Scheduled</td>
              <td>No special notes</td>
            </tr>
            <tr>
              <td>2</td>
              <td>2023-12-13 01:00 PM - 09:00 PM</td>
              <td>Warehouse</td>
              <td>Afternoon</td>
              <td>8 hours</td>
              <td>Ongoing</td>
              <td>Lunch break at 5:00 PM</td>
            </tr>

            <tr>
              <td>3</td>
              <td>2023-12-14 09:00 AM - 05:00 PM</td>
              <td>Conference Room</td>
              <td>Morning</td>
              <td>8 hours</td>
              <td>Scheduled</td>
              <td>Team meeting</td>
            </tr>
            <tr>
              <td>4</td>
              <td>2023-12-15 02:00 PM - 10:00 PM</td>
              <td>Customer Support Center</td>
              <td>Afternoon</td>
              <td>8 hours</td>
              <td>Ongoing</td>
              <td>High call volume</td>
            </tr>
            <tr>
              <td>5</td>
              <td>2023-12-16 10:00 AM - 06:00 PM</td>
              <td>Remote Work</td>
              <td>Morning</td>
              <td>8 hours</td>
              <td>Scheduled</td>
              <td>Project deadline</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Staff;
