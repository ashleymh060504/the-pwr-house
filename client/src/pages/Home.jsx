import React from "react";
import HomeHeader from "../components/HomeHeader";
import Login from "../components/Login";
import Register from "../components/Register";
import hero from "../assets/PWR Hero.jpeg";


function Home() {
  return (
    <div>
      <HomeHeader />
      <img src={hero} class="img-fluid" alt="Siblings sitting together outside" style={{ opacity: 0.2}}></img>
      <div className="container text-center">
        <div className="row">
            <div className="col" style={{ maxWidth: "800px", margin: "auto" }}>
                <Register />
            </div>
            <div className="col" style={{ maxWidth: "300px", maxHeight: "100px"}}>
                <Login />
            </div>
        </div>
      </div>
    </div>
  );
}

export default Home;