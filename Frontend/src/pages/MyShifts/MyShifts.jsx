import { DataGrid } from '@mui/x-data-grid';
import './myshifts.css'

const Shifts = () => {
    const shifts = [
        { id: 1, dateAndTime: '2023-12-12 08:00 AM - 04:00 PM', location: 'Main Office',  type: 'Morning', duration: '8 hours', status: 'Scheduled', notes: 'No special notes' },
        { id: 2, dateAndTime: '2023-12-13 01:00 PM - 09:00 PM', location: 'Warehouse',  type: 'Afternoon', duration: '8 hours', status: 'Ongoing', notes: 'Lunch break at 5:00 PM' },
        { id: 3, dateAndTime: '2023-12-14 09:00 AM - 05:00 PM', location: 'Main Office',  type: 'Day', duration: '8 hours', status: 'Completed', notes: 'No notes' },
        { id: 4, dateAndTime: '2023-12-15 10:00 AM - 06:00 PM', location: 'Warehouse',  type: 'Morning', duration: '8 hours', status: 'Scheduled', notes: 'Break at 2:00 PM' },
        { id: 5, dateAndTime: '2023-12-16 02:00 PM - 10:00 PM', location: 'Remote',  type: 'Afternoon', duration: '8 hours', status: 'Ongoing', notes: 'No notes' },
        { id: 6, dateAndTime: '2023-12-17 08:00 AM - 04:00 PM', location: 'Main Office',  type: 'Day', duration: '8 hours', status: 'Scheduled', notes: 'No special notes' },
        { id: 7, dateAndTime: '2023-12-18 01:00 PM - 09:00 PM', location: 'Warehouse',  type: 'Afternoon', duration: '8 hours', status: 'Ongoing', notes: 'Lunch break at 5:00 PM' },
        
      ];
      
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'dateAndTime', headerName: 'Date and Time', width: 200 },
    { field: 'location', headerName: 'Location', width: 150 },
   
    { field: 'type', headerName: 'Type', width: 120 },
    { field: 'duration', headerName: 'Duration', width: 120 },
    { field: 'status', headerName: 'Status', width: 120 },
    { field: 'notes', headerName: 'Notes', width: 200 },
  ];

  return (
    <div className="myshifts">
      <div className="myshifts_top">
      <span className="myshifts_header">Name: John Doe</span>
        <span className="myshifts_header">All/Past shifts</span>
      </div>

      <div>
        <DataGrid rows={shifts} columns={columns} pageSize={10} />
      </div>
    </div>
  );
};

export default Shifts;
