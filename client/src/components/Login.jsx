import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message);

      localStorage.setItem("token", data.token);
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
      alert("Login failed");
    }
  };
  const buttonStyle = {
    backgroundColor: '#edafb8'
  };
  const formStyle = {
    border: '2px solid #edafb8',
    borderRadius: '10px',
    padding: '30px',
    marginTop: '25px',
    backgroundColor: '#4a5759',
    color: '#dedbd2'
    // maxWidth: "300px", 
    // maxHeight: "100px"
  };

  return (
    <div style={formStyle}>
      <h5 id="login">Returning users, sign in here!</h5>
      <form onSubmit={handleSubmit} style={{ marginTop: '40px'}}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit" className="btn" style={buttonStyle}>Sign in</button>
      </form>
    </div>
  );
};

export default Login;