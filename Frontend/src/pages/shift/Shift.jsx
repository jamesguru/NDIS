import { useState, useEffect } from "react";
import "./shift.css";
import { FaArrowLeft, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const Shift = () => {
  const [open, setOpen] = useState(true);
  const [hours, setHours] = useState(0);
  const storedSeconds = parseInt(localStorage.getItem("stopwatchSeconds")) || 0;
  const [seconds, setSeconds] = useState(storedSeconds);
  const [isRunning, setIsRunning] = useState(false);
  const [userLocation, setUserLocation] = useState({});
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());
  const handleCaseNotes = () => {
    setOpen(!open);
  };

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
  const handleClockIn = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude, accuracy } = position.coords
          console.log(position)
          const coords = {"lat":latitude,"long":longitude};
          setUserLocation(coords)
          console.log('user location',userLocation)
          if(accuracy > 50){
              console.log('location is likely incorrect')
              setCurrentTime(new Date().toLocaleTimeString());
              console.log(currentTime)
              console.log(typeof(currentTime))
          }else{
            console.log('location is correct')
          }
          
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );

      console.log(userLocation);
      startStopwatch()
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

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
              <strong>ID:</strong>1
            </li>
            <li>
              <strong>Location: </strong>Delawere Ave, 3:00pm - 11:00pm
            </li>
            <li>
              <strong>Date and Time: </strong>2023-12-12 08:00 AM - 04:00 PM
            </li>
            <li>
              <strong>Type:</strong> Morning
            </li>
            <li>
              <strong>Duration:</strong> 8 hours
            </li>
            <li>
              <strong>Status:</strong> Pending
            </li>
            <li>
              <strong>Notes:</strong> Lunch break at 5:00 PM
            </li>
          </ul>

          <button className="shift_clockin_btn">Bid</button>
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
        <button className="button" onClick={handleClockIn}>
          Clock In
        </button>
        <button className="button" onClick={stopStopwatch}>
          Clock Out
        </button>
      </div>
    </div>
  );
};

export default Shift;
