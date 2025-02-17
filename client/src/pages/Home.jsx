import React from "react";
import HomeHeader from "../components/HomeHeader";
import Login from "../components/Login";
import Register from "../components/Register";


function Home() {
  return (
    <div>
      <HomeHeader />
      <div className="container text-center">
        <div className="row">
            <div className="col">
                <Login />
            </div>
            <div className="col">
                <Register />
            </div>
        </div>
      </div>
    </div>
  );
}

export default Home;