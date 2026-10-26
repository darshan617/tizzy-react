import React, { useState } from "react";
import styles from "@/components/auth/sign-in/SignInForm.module.css";
import { BsCheckCircleFill } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { useLoginMutation } from "@/redux/apis/loginApi";
import { setUserData } from "@/redux/slices/userSlice";
import { useToast } from "@/custom-hooks/toast/ToastProvider";

// const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const SignInForm = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { showToast } = useToast();

  const [login, { isLoading: isLogging }] = useLoginMutation();

  const [userDetails, setUserDetails] = useState({
    mobile: "",
    remember: false,
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setUserDetails((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const mobile = (userDetails?.mobile ?? "").trim();

    if (!mobile) {
      showToast("Please enter your mobile number.", "error");
      return;
    }

    if (!/^\d{10}$/.test(mobile)) {
      showToast("Please enter a valid 10-digit mobile number.", "error");
      return;
    }

    try {
      const res = await login({
        body: { mobile },
      }).unwrap();

      if (res?.success === true) {
        sessionStorage.setItem("otpUser", JSON.stringify(res.data));

        showToast(res.message || "OTP sent successfully.", "success");

        router.push("/auth/otp-verfication");
      } else {
        showToast(res?.message || "Login failed.", "error");
      }
    } catch (error) {
      showToast(
        error?.data?.message || "Unable to send OTP. Please try again.",
        "error",
      );
    }
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
                  <form id="form" onSubmit={handleLogin} noValidate>
                    <div className="mb-3">
                      <div className="position-relative">
                        <FaPhoneAlt className="input-icon" />

                        <input
                          type="tel"
                          name="mobile"
                          maxLength={10}
                          id="Phone"
                          className="form-control auth-input"
                          placeholder="Enter your Mobile No."
                          autoComplete="tel"
                          value={userDetails.mobile}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    {/* <div className="mb-4">
                      <div className="position-relative">
                        <FaLock className="input-icon" />

                        <input
                          type={showPassword ? "text" : "password"}
                          name="password"
                          id="password"
                          className="form-control auth-input"
                          placeholder="Enter your password"
                          autoComplete="current-password"
                          value={userDetails.password}
                          onChange={handleChange}
                        />

                        <i
                          className="toggle-password"
                          id="togglePasswordBtn"
                          role="button"
                          aria-label={
                            showPassword ? "Hide password" : "Show password"
                          }
                          onClick={() => setShowPassword((prev) => !prev)}
                          style={{ cursor: "pointer" }}
                        >
                          {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </i>
                      </div>
                    </div> */}

                    {/* Remember Me */}
                    <div className="form-check mb-4">
                      <input
                        className="form-check-input mt-1"
                        type="checkbox"
                        name="remember"
                        id="rememberCheck"
                        checked={userDetails.remember}
                        onChange={handleChange}
                      />

                      <label
                        className="form-check-label text-muted ms-1"
                        htmlFor="rememberCheck"
                        style={{ fontSize: "0.9rem", fontWeight: 500 }}
                      >
                        Remember Me
                      </label>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      id="submit"
                      disabled={isLogging}
                      className="btn btn-register mb-4 text-white d-flex align-items-center justify-content-center gap-2"
                    >
                      {isLogging && (
                        <span
                          className="spinner-border spinner-border-sm"
                          role="status"
                        ></span>
                      )}
                      <span id="btn-text">
                        {isLogging ? "Logging in..." : "Login"}
                      </span>
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
                    style={{ fontSize: "0.95rem", fontWeight: 500 }}
                  >
                    Don&apos;t have an account?{" "}
                    <Link
                      href="/auth/signup"
                      className="text-decoration-none fw-semibold"
                      style={{ color: "#1665b6" }}
                    >
                      Create an Account
                    </Link>
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
                      24/7 Support
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
