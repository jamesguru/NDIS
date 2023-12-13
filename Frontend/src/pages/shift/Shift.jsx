import { useState } from "react";
import 
"./shift.css";
import { FaArrowLeft, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
const Shift = () => {
  const [open,setOpen] = useState(false);
  const handleCaseNotes=() =>{
    setOpen(!open)
  }
  return (
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
              requested a break to rest. A 15-minute break was provided, and the
              employee resumed duties afterward.{" "}
            </td>
          </tr>
          <tr>
          <td>2023-12-12 08:00 AM</td>
            <td>Head Home</td>
            <td>
              The employee reported feeling unwell during the shift and
              requested a break to rest. A 15-minute break was provided, and the
              employee resumed duties afterward.{" "}
            </td>
          </tr>
        </table>

        <div className="add_casenotes">
          <span>Add CaseNotes</span>
          <FaPlus className="add_casenotes_icon" onClick={handleCaseNotes}/>
        </div>

        {
          open && <div className="casenotes_inputs">
          <label htmlFor="">Case</label>
          <input type="text" />
          <label htmlFor="">Notes</label>
          <textarea name="" id="" cols="30" rows="10"></textarea>
          <button>Submit</button>
        </div>
        }
      </div>
    </div>
  );
};

export default Shift;
