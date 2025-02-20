import React from "react";
import HomeHeader from "../components/HomeHeader";
import Login from "../components/Login";
import Register from "../components/Register";
// import './homeBackground.css';


function Home() {
  return (
    <div className="background-image">
      <HomeHeader />
      <div className="container text-center">
        <div className="row">
            <div className="col">
                <Register />
            </div>
            <div className="col">
                <Login />
            </div>
        </div>
      </div>
    </div>
  );
}

export default Home;