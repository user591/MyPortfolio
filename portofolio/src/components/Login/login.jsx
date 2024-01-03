import React, { useState } from "react";
import { useAuth } from "../../AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Logo from "../Navbar/Logo";

function LoginForm() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:4000/login", credentials);

      if (res.status === 200) {
        login(res.data);
        console.log("Login with: ", credentials.username);

        navigate("/");
      } else {
        console.error("Login failed");
      }
    } catch (error) {
      console.error("Error during login:", error.message);
      alert("An error occurred during login. Please try again later.");
    }
  };

  return (
    <>
    <Logo>
    </Logo>
    <div className="w-full max-w-md mx-auto mt-10 ">
      <form className="bg-white shadow-2xl rounded-xl px-8 pt-6 pb-8 mb-4">
        <h2 className="flex font-bold text-primary text-3xl mb-2 justify-center">
          Login
        </h2>
        <div className="mb-4 mt-10">
          <label
            htmlFor="username"
            className="block text-font text-sm font-bold mb-2"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className="w-full bg-gray-200 text-dark p-3 rounded-md focus:ring-primary focus:border-primary"
            placeholder="Enter your username"
            onChange={handleInputChange}
            value={credentials.username}
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-font text-sm font-bold mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full bg-gray-200 text-dark p-3 rounded-md focus:ring-primary focus:border-primary"
            placeholder="Enter your password"
            onChange={handleInputChange}
            value={credentials.password}
            required
          />
        </div>
        <div className="flex items-center justify-end">
          <button
            className="bg-primary text-white py-2 px-4 rounded-full focus:outline-none focus:shadow-outline-blue active:bg-primary-dark"
            type="button"
            onClick={handleLogin}
          >
            Log In
          </button>
        </div>
      </form>
    </div>
    </>
  );
}

export default LoginForm;
