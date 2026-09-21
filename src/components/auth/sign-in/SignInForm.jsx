import React, { useState } from "react";
import styles from "@/components/auth/sign-in/SignInForm.module.css";
import { BsCheckCircleFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

const SignInForm = () => {
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  console.log(userDetails);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Login Details:", userDetails);
  };

  return (
    <div className={`${styles.authWrapper}`}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11 col-xl-10">
            <div
              className={`${styles.authCard} d-flex flex-column flex-md-row`}
            >
              {/* Left Side: Login Form */}
              <div
                className="col-md-6 col-lg-6 auth-left aos-init aos-animate"
                data-aos="fade-right"
                data-aos-easing="linear"
                data-aos-duration="900"
              >
                <h2
                  className="p-content mb-1 aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="500"
                >
                  Client Access Portal
                </h2>

                <p
                  className="text-muted mb-4 aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="900"
                >
                  Sign in to your account
                </p>

                <div
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="700"
                  className="aos-init aos-animate"
                >
                  <form id="form" onSubmit={handleSubmit}>
                    <input
                      type="hidden"
                      name="_token"
                      value="49bCtBGtsVPAXpx4stYi8YxfV3GiZNpnfA15MYVV"
                      autoComplete="off"
                    />

                    <div className="mb-3">
                      <div className="position-relative">
                        <IoMdMail className="input-icon" />

                        <input
                          type="text"
                          name="email"
                          id="email"
                          className="form-control auth-input"
                          placeholder="Enter your email"
                          value={userDetails.email}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="text-danger" id="error-email"></div>
                    </div>

                    <div className="mb-4">
                      <div className="position-relative">
                        <FaLock className="input-icon" />

                        <input
                          type={showPassword ? "text" : "password"}
                          name="password"
                          id="password"
                          className="form-control auth-input"
                          placeholder="Enter your password"
                          value={userDetails.password}
                          onChange={handleChange}
                        />

                        <i
                          className="toggle-password"
                          id="togglePasswordBtn"
                          onClick={() =>
                            setShowPassword((prev) => !prev)
                          }
                          style={{
                            cursor: "pointer",
                          }}
                        >
                          {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </i>
                      </div>

                      <div
                        className="text-danger"
                        id="error-password"
                      ></div>
                    </div>

                    {/* Remember Me */}
                    <div className="form-check mb-4">
                      <input
                        className="form-check-input mt-1"
                        type="checkbox"
                        name="remember"
                        id="rememberCheck"
                      />

                      <label
                        className="form-check-label text-muted ms-1"
                        htmlFor="rememberCheck"
                        style={{
                          fontSize: "0.9rem",
                          fontWeight: 500,
                        }}
                      >
                        Remember Me
                      </label>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      id="submit"
                      className="btn btn-register mb-4 text-white d-flex align-items-center justify-content-center gap-2"
                    >
                      <span
                        id="spinner"
                        className="spinner-border spinner-border-sm"
                        role="status"
                        style={{
                          display: "none",
                        }}
                      ></span>

                      <span id="btn-text">Login</span>
                    </button>
                  </form>
                </div>

                {/* Create Account */}
                <div
                  className="text-center sync-card-height aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="800"
                >
                  <p
                    className="text-muted m-0"
                    style={{
                      fontSize: "0.95rem",
                      fontWeight: 500,
                    }}
                  >
                    Don't you have an account?{" "}
                    <a
                      href="/auth/signup"
                      className="text-decoration-none fw-semibold"
                      style={{
                        color: "#1665b6",
                      }}
                    >
                      Create an Account
                    </a>
                  </p>
                </div>
              </div>

              <div
                className={`${styles.authRight} col-md-6 col-lg-6 aos-init aos-animate`}
                data-aos="fade-left"
                data-aos-easing="linear"
                data-aos-duration="900"
                
              >
                <div
                  className={`${styles.authRightContent} aos-init aos-animate`}
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="800"
                >
                  <h3>Access your account securely</h3>

                  <ul>
                    <li>
                      <BsCheckCircleFill
                        size={18}
                        style={{ marginRight: "10px" }}
                        className="text-success"
                      />{" "}
                      Manage cloud Server
                    </li>

                    <li>
                      <BsCheckCircleFill
                        size={18}
                        style={{ marginRight: "10px" }}
                        className="text-success"
                      />{" "}
                      Access Cloud Storage
                    </li>

                    <li>
                      <BsCheckCircleFill
                        size={18}
                        style={{ marginRight: "10px" }}
                        className="text-success"
                      />{" "}
                      247 Support
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
