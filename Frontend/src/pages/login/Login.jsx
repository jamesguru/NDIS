import Navbar from "../../components/navbar/Navbar";
import "./login.css";
import { Link } from "react-router-dom";
import Footer from "../../components/footer/Footer"
const Login = () => {
  return (

    <div>
<Navbar />
<div className="login-container">
      <form>
      <h2>Login</h2>
        <label htmlFor="username">Email:</label>
        <input type="text" id="username" name="username" />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />

        <Link to="/staff" className="link">
            <button className="login-btn">Login</button>
          </Link>
      </form>
    </div>

    <Footer/>
    </div>
    
  );
}

export default Login