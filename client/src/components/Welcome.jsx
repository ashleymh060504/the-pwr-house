import React from "react";
import "../styles/homePage.css";

const Welcome = () => {
    return (
        <div className= "img-fluid background-image" >
            <section>
                <h1>Welcome.</h1>
                <br></br>
                <p>This site is for all of you parents out there, working from home and facing the daily challenge of balancing both work and the needs of your child(ren), sometimes simultaneously!</p>
                <p>Create an account today to get organized, separating your "Work" and "Home" tasks and calendar, while keeping it all in one place!</p>
            </section>
            <br></br>
            <section>
                <h4>COMING SOON!</h4>
                <br></br>
                <p>Connect with other PWR's by visiting PWR Connect!</p>
                <p>Ask or answer questions of other PWR's, get advice or ideas, share your tips and tricks, etc! <br></br> Make connections and be encouraged!</p>
            </section>
        </div>
    );
}

export default Welcome;