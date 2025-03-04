import React from "react";
import HomeHeader from "../components/HomeHeader";
import Login from "../components/Login";
import Register from "../components/Register";
import Welcome from "../components/Welcome";


function Home() {
  return (
    <div>
      <HomeHeader />
      <Welcome />
      <div className="container text-center">
        <div className="row">
            <div className="col-sm-12 col-md-6">
                <Register />
            </div>
            <div className="col-sm-12 col-md-6">
                <Login />
            </div>
        </div>
      </div>
    </div>
  );
}

export default Home;