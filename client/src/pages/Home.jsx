import React from "react";
import HomeHeader from "../components/HomeHeader";
import Login from "../components/Login";
import Register from "../components/Register";


function Home() {
  return (
    <div>
      <HomeHeader />
      <img src="..." class="img-fluid" alt="..."></img>
      <div className="container text-center">
        <div className="col">
            <div className="col" style={{ maxWidth: "800px", margin: "auto" }}>
                <Register />
            </div>
            <div className="col" style={{ maxWidth: "500px", margin: "auto", marginTop: "20px" }}>
                <Login />
            </div>
        </div>
      </div>
    </div>
  );
}

export default Home;