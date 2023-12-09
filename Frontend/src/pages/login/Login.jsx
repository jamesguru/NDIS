import "./login.css";
const Login = () => {
  return (
    <div className="login-container">
     
      <form>
      <h2>Login</h2>
        <label htmlFor="username">Email:</label>
        <input type="text" id="username" name="username" />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />

        <button type="submit" className="login-btn">Login</button>
      </form>
    </div>
  );
}

export default Login