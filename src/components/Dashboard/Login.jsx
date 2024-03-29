import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./dash.scss";
import Mascot from "./images/Screenshot 2023-04-09 144546 1.svg";
import login from "./images/Vector.svg";
import user from "./images/user.svg";
import pass from "./images/pass.svg";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate("/home");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios
        .post("https://codelinear.in/code/login", { username, password })

        // https://codelinear.in/code/work
        .then((response) => {
          console.log(response);
          if (response.status === 200) {
            console.log(response);
            localStorage.setItem("jwt", username);
            alert(
              "logged in successfully please enter ok to visit the dash board page "
            );
            window.location.reload();
            navigate("/admin");
          } else {
            alert("please enter a valid email address and password");

            // alert("Invalid email or password");
          }
        });

      const token = response.data.token;
      // Do something with the token (e.g. store it in local storage or state)
      alert("loggged in");
    } catch (error) {
      // setError("Incorrect username or password");
      // alert("please enter a valid email address and password");
    }
  };
  return (
    <div className="login-container">
      <div className="rightpart">
        <h2 className="rightpart-login">Login</h2>
        <label>
          <img src={user} alt="" />
          <input
            type="text"
            value={username}
            onChange={handleUsernameChange}
            placeholder="Username"
          />
        </label>

        <br />
        <label>
          <img src={pass} alt="" />
          <input
            placeholder="type"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            style={{
              color: "black",
            }}
          />
        </label>
        <p className="forgot">Forgot Password ?</p>
        <br />
        {error && <div className="error">{error}</div>}
        <button onClick={handleSubmit}>
          <img src={login} alt="" className="arrow-login" />
        </button>
      </div>
      <div className="leftpart">
        <div className="left-upper">
          <img src={Mascot} alt="" className="masco" />
        </div>

        <div className="left-lower">
          <div className="lines"></div>
          <h1 className="left-lower-txt">Codelinear</h1>
        </div>
      </div>
    </div>
  );
}

export default Login;
