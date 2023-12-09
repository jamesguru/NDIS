
import { Link } from 'react-router-dom';
import './sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/admin/dashboard">Dashboard</Link>
      <Link to="/admin/users">Users</Link>
      <Link to="/admin/settings">Settings</Link>
      {/* Add more links as needed */}
    </div>
  );
};

export default Sidebar;
