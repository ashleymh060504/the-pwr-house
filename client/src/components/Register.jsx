import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, lastName, email, password }),
      });

      debugger;
      const data = await res.json();
      if (!res.ok) throw new Error(data.message);

      navigate("/dashboard");
    } catch (error) {
      console.error(error);
      alert("Registration failed");
    }
  };
  const buttonStyle = {
    backgroundColor: '#edafb8'
  };
  const formStyle = {
    border: '2px solid #edafb8',
    borderRadius: '10px',
    backgroundColor: '#b0c4b1',
    padding: '50px',
    marginTop: '25px',
    maxWidth: "600px", 
  };

  return (
    <div style={formStyle}>
      <h4 id="register">New users, sign up here!</h4>
      <form className="row g-3" onSubmit={handleSubmit} style={{ marginTop: '40px' }}>
        <div className="col-md-6">
          <label htmlFor="inputName" className="form-label">First Name</label>
          <input type="text" className="form-control" id="inputName" onChange={(e) => setfirstName(e.target.value)} />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputName" className="form-label">Last Name</label>
          <input type="text" className="form-control" id="inputName2" onChange={(e) => setlastName(e.target.value)} />
        </div>
        <div className="col-12">
          <label htmlFor="inputEmail4" className="form-label">Email</label>
          <input type="email" className="form-control" id="inputEmail4" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="col-12">
          <label htmlFor="inputPassword4" className="form-label">Password</label>
          <input type="password" className="form-control" id="inputPassword4" onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="col-12">
          <button type="submit" className="btn" style={buttonStyle}>Sign up</button>
        </div>
      </form>
    </div>
  );
};

export default Register;

