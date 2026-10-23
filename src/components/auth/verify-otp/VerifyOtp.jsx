import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useSelector } from "react-redux";
import { selectUserData } from "@/redux/slices/userSlice";
import {
  useGetOtpVerifiedMutation,
  useResendOtpMutation,
} from "@/redux/apis/signupApi";
import { useRouter } from "next/router";
import styles from "@/components/auth/sign-in/SignInForm.module.css";
import { BsCheckCircleFill } from "react-icons/bs";
import { FaKey } from "react-icons/fa";

const VerifyOtp = () => {
  const router = useRouter();

  const [otpDetails, setOtpDetails] = useState({
    mobile: "",
    email: "",
    otp: "",
  });

  const userData = useSelector(selectUserData);
  const [getOtpVerified, { isLoading }] = useGetOtpVerifiedMutation();
  const [resendOtp] = useResendOtpMutation();

  useEffect(() => {
    setOtpDetails((prev) => ({
      ...prev,
      mobile: userData?.mobile || "",
      email: userData?.email || "",
    }));
  }, [userData]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await getOtpVerified({
        body: otpDetails,
      }).unwrap();

      if (res?.success) {
        Cookies.set("userData", JSON.stringify(res?.data?.user));
        setOtpDetails((prev) => ({
          ...prev,
          otp: "",
        }));

        router.push("/");
      }
    } catch (error) {
      console.error("OTP verification failed:", error);
    }
  };

  const handleResend = async (e) => {
    e.preventDefault();

    try {
      const res = await resendOtp({
        body: {
          email: otpDetails.email,
          mobile: otpDetails.mobile,
        },
      }).unwrap();
      // optionally show a success toast here
    } catch (error) {
      console.error("OTP resend failed:", error);
    }
  };

  return (
    <div className={styles.authWrapper}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11 col-xl-10">
            <div
              className={`${styles.authCard} d-flex flex-column flex-md-row overflow-hidden`}
            >
              <div
                className="auth-left w-100 w-md-50 aos-init aos-animate"
                data-aos="fade-right"
                data-aos-easing="linear"
                data-aos-duration="900"
                style={{ background: "#fff", zIndex: "1" }}
              >
                <h2
                  className="p-content mb-0 aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="500"
                >
                  Verify Email
                </h2>
                <p
                  className="text-muted mb-4 aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="900"
                >
                  Please enter the 6-digit OTP sent to your email address.
                </p>

                <div
                  id="success-message"
                  className="alert alert-success d-none fw-medium aos-init aos-animate"
                  data-aos="fade-up"
                ></div>

                <form
                  id="otp-form"
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="700"
                  className="aos-init aos-animate"
                >
                  <input
                    type="hidden"
                    name="_token"
                    // value="ItF9LhoRJ2U9LluWL7z1MIkxvnk902yyZvPALdSP"
                    autocomplete="off"
                    value={otpDetails.otp}
                    onChange={(e) =>
                      setOtpDetails((prev) => ({
                        ...prev,
                        otp: e.target.value,
                      }))
                    }
                  />{" "}
                  <div className="mb-4">
                    <div className="position-relative">
                      <FaKey className={styles.inputIcon} />
                      <input
                        type="text"
                        name="otp"
                        id="otp"
                        className={`${styles.otpInput} form-control auth-input`}
                        placeholder="XXXXXX"
                        maxLength={6}
                        value={otpDetails.otp}
                        onChange={(e) =>
                          setOtpDetails((prev) => ({
                            ...prev,
                            otp: e.target.value,
                          }))
                        }
                      />
                    </div>
                    <div className="text-danger" id="error-otp"></div>
                  </div>
                  <button
                    type="submit"
                    id="submit"
                    className="btn btn-register mb-4 text-white d-flex align-items-center justify-content-center gap-2"
                    onClick={handleSubmit}
                  >
                    <span
                      id="spinner"
                      className="spinner-border spinner-border-sm"
                      role="status"
                      style={{ display: "none !important" }}
                    ></span>
                    <span id="btn-text">Verify OTP</span>
                  </button>
                </form>

                <div
                  className="text-center sync-card-height2 aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="800"
                >
                  <p className="text-muted m-0" style={{ fontSize: "1rem" }}>
                    Didn't receive the code?{" "}
                    <a
                      href="#"
                      id="resend-link"
                      className="text-decoration-none fw-semibold"
                      style={{ color: "#1665b6" }}
                      onClick={handleResend}
                    >
                      Resend
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

export default VerifyOtp;
