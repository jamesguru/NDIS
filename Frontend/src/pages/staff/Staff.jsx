import { useState, useEffect } from "react";
import moment from "moment";
import { Link, useNavigate } from "react-router-dom";
import "./staff.css";
import { FaUser } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { AiOutlineEye } from "react-icons/ai";
import { logOut } from "../../redux/userRedux";
import { useSelector } from "react-redux";
import { publicRequest } from "../../requestMethods";
const Staff = () => {
  const user = useSelector((state) => state.user);
  const [profile, setProfile] = useState(false);
  const [data, setData] = useState([]);
  const [unassignedShifts, setUnassignedShifts] = useState([]);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    const getShifts = async () => {
      try {
        const res = await publicRequest.post("/shifts/me", {
          email: user.currentUser.email,
        });
        setData(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getShifts();
  }, []);

  useEffect(() => {
    const getShifts = async () => {
      try {
        const res = await publicRequest.get("/shifts/unassigned");
        setUnassignedShifts(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getShifts();
  }, []);

  const handleProfile = () => {
    setProfile(!profile);
  };


  const showStatus =(clockIn, clockout)=>{

    if(clockIn.length === 0 && clockout.length === 0){
      return 'Pending'
    }else if(clockIn.length > 0 && clockout.length === 0){
      return 'Ongoing'
    }else{
      return 'Completed'
    }

  }

  const handleLogout = () => {
    dispatch(logOut());
    navigate("/login");
  };

  return (
    <div className="staff">
      <div className="stafftop">
        <span className="staff_shifts">All Shifts</span>
        <div className="staff_profile">
          <div className="staff_icon">
            <FaUser size={18} color="#444" className="profile_icon" />
            <span className="staff_name" onClick={handleProfile}>
              {user.currentUser.fullname}
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
        {data.map((shift, index) => (
          <div className={shift?.clockin?.length === 0 && shift?.clockout?.length === 0 || shift?.clockin?.length > 0 && shift?.clockout?.length === 0 ? 'staff_main_card' : 'staff_main_card_none'} key={index}>
            <div className="staff_main_card_date">
              <span>{moment(shift.date).format("ddd DD")}</span>
            </div>

            <div className="staff_main_card_info">
              <span className="shift-location-time">
                {shift.location}, {shift.time}
              </span>
              <span className="shift-notes">Duration: {shift.duration}</span>
            </div>

            <div className="shift_status">
              <span className="shift_status_completed">{showStatus(shift.clockin, shift.clockout)}</span>
            </div>

            <div className="staff_main_card_options">
              <Link to={`/shift/${shift._id}`}>
                <AiOutlineEye size={25} />
              </Link>
            </div>
          </div>
        ))}

        <h3 className="shift-header">Bid shifts</h3>

        {unassignedShifts.slice(0,5).map((shift, index) => (
          <div className="staff_main_card" key={index}>
            <div className="staff_main_card_date">
              <span>{moment(shift.date).format("ddd DD")}</span>
            </div>

            <div className="staff_main_card_info">
              <span className="shift-location-time">
                {shift.location}, {shift.time}
              </span>
              <span className="shift-notes">Duration: {shift.duration}</span>
            </div>

            <div className="shift_status">
              <span className="shift_status_completed">{showStatus(shift.clockin, shift.clockout)}</span>
            </div>

            <div className="staff_main_card_options">
              <Link to={`/shift/${shift._id}`}>
                <AiOutlineEye size={25} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Staff;
