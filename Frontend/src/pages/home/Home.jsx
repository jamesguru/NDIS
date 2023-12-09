import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="wrapper">
      <div className="desc">
          <span className="phrase">Empowering Caregivers: <span className="blue-text">Compassion in Every Click.</span></span>
          <button className="get-started">Get Started</button>
      </div>
      <div className="gif">
          <img src="../../../public/analytic.png" alt="" />
      </div>
      </div>
    </div>
  )
}

export default Home