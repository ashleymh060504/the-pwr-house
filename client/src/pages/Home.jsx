import React from "react";
import Login from "../components/Login";
import Register from "../components/Register";


function Home() {
  return (
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
  );
}

export default Home;