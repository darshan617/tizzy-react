import React, { useState } from "react";

const login = () => {
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });
  console.log(userDetails);

  const handleChange = (e) => {
    const { name, value } = e?.target;
    setUserDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = () => {

  }

  return (
    <div>
      <input
        name="email"
        type="email"
        placeholder="Enter your email"
        value={userDetails?.email}
        onChange={handleChange}
      />
      <input
        name="password"
        type="password"
        placeholder="Enter your password"
        value={userDetails?.password}
        onChange={handleChange}
      />
      <button onChange={handleLogin}>Login</button>
    </div>
  );
};

export default login;
