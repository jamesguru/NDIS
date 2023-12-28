import { useState, useEffect } from "react";
import "./shift.css";
import { FaArrowLeft, FaPlus } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { publicRequest } from "../../requestMethods";
import { useSelector } from "react-redux";
const Shift = () => {
  const [open, setOpen] = useState(true);
  const [hours, setHours] = useState(0);
  const [shift, setShift] = useState({});
  const user = useSelector((state) => state.user);
  const storedSeconds = parseInt(localStorage.getItem("stopwatchSeconds")) || 0;
  const [seconds, setSeconds] = useState(storedSeconds);
  const [isRunning, setIsRunning] = useState(false);
  const [userLocation, setUserLocation] = useState({});
  const [accuracy, setAccuracy] = useState(0);
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString()
  );
  const location = useLocation();
  const shiftId = location.pathname.split("/")[2];

  const handleCaseNotes = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const getActivity = async () => {
      try {
        const res = await publicRequest.get("/shifts/find/" + shiftId);

        setShift(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    getActivity();
  }, [shiftId]);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => {
          const newSeconds = prevSeconds + 1;
          localStorage.setItem("stopwatchSeconds", newSeconds.toString());
          return newSeconds;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const startStopwatch = () => {
    setIsRunning(true);
  };

  const stopStopwatch = () => {
    setIsRunning(false);
    const hoursWorked = seconds / 3600;
    setHours(hoursWorked);
    setSeconds(0);
  };

  const formatTime = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const remainingSeconds = totalSeconds % 60;

    return `${hours}:${String(minutes).padStart(2, "0")}:${String(
      remainingSeconds
    ).padStart(2, "0")}`;
  };
  const handleClockIn = async () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude, accuracy } = position.coords;
          const coords = { lat: latitude, lng: longitude };
          setUserLocation(coords);
          setAccuracy(accuracy);
          setCurrentTime(new Date().toLocaleTimeString());
          if (accuracy > 50) {
            console.log("location is likely incorrect");
          } else {
            console.log("location is correct");
          }
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );

      
      try {
        if (accuracy && userLocation && currentTime) {
          await publicRequest.put(`/shifts/clockin/${shiftId}`, {
            time: currentTime,
            coords: userLocation,
            accuracy,
          });

          window.location.reload();
        }
      } catch (error) {
        console.log(error);
      }
      startStopwatch();
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  const handleClockOut = async () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude, accuracy } = position.coords;
          const coords = { lat: latitude, lng: longitude };
          setUserLocation(coords);
          setAccuracy(accuracy);
          setCurrentTime(new Date().toLocaleTimeString());
          if (accuracy > 50) {
            console.log("location is likely incorrect");
          } else {
            console.log("location is correct");
          }
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );

      
      try {
        if (accuracy && userLocation && currentTime) {
          await publicRequest.put(`/shifts/clockout/${shiftId}`, {
            time: currentTime,
            coords: userLocation,
            accuracy,
          });

          window.location.reload();
        }
      } catch (error) {
        console.log(error);
      }
     stopStopwatch()
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };


  const handleBid = async() =>{
    try {

      await publicRequest.put(`/shifts/assign/${shiftId}`,
        {
          "location":shift.location,
          "date":shift.date,
          "time": shift.time,
          "type":shift.type,
          "duration":shift.type,
          "staffEmail":user.currentUser.email,
          "client": shift.client,
          "notes":shift.notes
      }
      )

      window.location.reload()
      
    } catch (error) {
      console.log();
    }
  }

  return (
    <div className="shift-container">
      <div className="shift">
        <Link to="/staff">
          <span className="myshifts_back">
            <FaArrowLeft /> Back
          </span>
        </Link>
        <div className="shift_details">
          <ul>
            <li>
              <strong>ID:</strong>
              {shift._id}
            </li>
            <li>
              <strong>Location: </strong>
              {shift.location}
            </li>
            <li>
              <strong>Date and Time: </strong>
              {shift.date} {shift.time}
            </li>
            <li>
              <strong>Type:</strong> {shift.type}
            </li>
            <li>
              <strong>Duration:</strong> {shift.duration}
            </li>
            <li>
              <strong>Status:</strong> Pending
            </li>
            <li>
              <strong>Notes:</strong> {shift.notes}
            </li>
          </ul>

          {shift.staffEmail ? (
            ""
          ) : (
            <button className="shift_clockin_btn" onClick={handleBid}>Bid</button>
          )}
        </div>

        <div className="shift_casenotes">
          <table>
            <tr>
              <th>Date/Time</th>
              <th>Case</th>
              <th>Notes</th>
            </tr>

            <tr>
              <td>2023-12-12 04:00 PM</td>
              <td>Sickness</td>
              <td>
                The employee reported feeling unwell during the shift and
                requested a break to rest. A 15-minute break was provided, and
                the employee resumed duties afterward.{" "}
              </td>
            </tr>
            <tr>
              <td>2023-12-12 08:00 AM</td>
              <td>Head Home</td>
              <td>
                The employee reported feeling unwell during the shift and
                requested a break to rest. A 15-minute break was provided, and
                the employee resumed duties afterward.{" "}
              </td>
            </tr>
          </table>

          <div className="add_casenotes">
            <span>Add CaseNotes</span>
            <FaPlus className="add_casenotes_icon" onClick={handleCaseNotes} />
          </div>

          {open && (
            <div className="casenotes_inputs">
              <label htmlFor="">Case</label>
              <input type="text" />
              <label htmlFor="">Notes</label>
              <textarea name="" id="" cols="30" rows="10"></textarea>
              <button>Submit</button>
            </div>
          )}
        </div>
      </div>
      <div className="button-container">
        <span>Time: {formatTime(seconds)}</span>
        <span>Hours Worked: {hours.toFixed(2)}</span>
        {shift?.clockin?.length === 0 && shift.staffEmail && (
          <button className="button" onClick={handleClockIn}>
            Clock In
          </button>
        )}
        {shift?.clockout?.length === 0 && shift.staffEmail && (
          <button className="button" onClick={handleClockOut}>
            Clock Out
          </button>
        )}
      </div>
    </div>
  );
};

export default Shift;
