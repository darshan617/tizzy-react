import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { selectUserData, setUserData } from "@/redux/slices/userSlice";
import {
  useGetOtpVerifiedMutation,
  useResendOtpMutation,
} from "@/redux/apis/signupApi";
import { useRouter } from "next/router";
import styles from "@/components/auth/sign-in/SignInForm.module.css";
import { BsCheckCircleFill } from "react-icons/bs";
import { FaKey } from "react-icons/fa";
import { useToast } from "@/custom-hooks/toast/ToastProvider";

const RESEND_COOLDOWN = 30;

const VerifyOtp = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { showToast } = useToast();

  const [otpDetails, setOtpDetails] = useState({
    mobile: "",
    email: "",
    otp: "",
  });
  const [cooldown, setCooldown] = useState(0);

  const userData = useSelector(selectUserData);
  const [getOtpVerified, { isLoading }] = useGetOtpVerifiedMutation();
  const [resendOtp, { isLoading: isResending }] = useResendOtpMutation();

  useEffect(() => {
    let source = userData;
    if (!source || (!source.email && !source.mobile && !source.phone)) {
      try {
        const saved =
          sessionStorage.getItem("otpUser") || Cookies.get("signupData");

        source = saved ? JSON.parse(saved) : null;
      } catch (error) {
        console.error("Failed to load OTP user details:", error);
        source = null;
      }
    }

    if (!source) return;

    setOtpDetails((prev) => ({
      ...prev,
      mobile: source.mobile || source.phone || "",
      email: source.email || "",
    }));
  }, [userData]);

  useEffect(() => {
    if (cooldown <= 0) return;
    const t = setTimeout(() => setCooldown((c) => c - 1), 1000);
    return () => clearTimeout(t);
  }, [cooldown]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!otpDetails.email && !otpDetails.mobile) {
      showToast("Session expired. Please sign up again.", "error");
      return;
    }

    if (!/^\d{6}$/.test(otpDetails.otp)) {
      showToast("Please enter a valid 6-digit OTP.", "error");
      return;
    }

    try {
      const res = await getOtpVerified({
        body: {
          mobile: otpDetails.mobile,
          email: otpDetails.email,
          otp: otpDetails.otp,
        },
      }).unwrap();

      const ok =
        res?.success === true ||
        res?.status === true ||
        res?.status === "success";

      console.log("OTP verification response:", res);

      if (ok) {
        const user = res?.data?.user ?? res?.data;

        if (user && typeof user === "object") {
          const { token, token_type, ...profile } = user;
          const cookieOptions = { expires: 7, path: "/" };

          Cookies.set("userData", JSON.stringify(profile), cookieOptions);

          if (token) {
            Cookies.set("token", token, cookieOptions);
            Cookies.set("token_type", token_type || "Bearer", cookieOptions);
          }

          dispatch(setUserData(profile));
        }

        Cookies.remove("signupData", { path: "/" });

        setOtpDetails((prev) => ({ ...prev, otp: "" }));

        showToast(res?.message || "Email verified successfully.", "success");

        // Redirect to home and reload the application
        window.location.replace("/");
      } else {
        showToast(res?.message || "OTP verification failed.", "error");
      }
    } catch (error) {
      showToast(
        error?.data?.message ||
          error?.error ||
          "Invalid or expired OTP. Please try again.",
        "error",
      );
    }
  };

  const handleResend = async (e) => {
    e.preventDefault();
    if (cooldown > 0 || isResending) return;

    if (!otpDetails.email && !otpDetails.mobile) {
      showToast("Session expired. Please sign up again.", "error");
      return;
    }

    try {
      const res = await resendOtp({
        body: {
          email: otpDetails.email,
          mobile: otpDetails.mobile,
        },
      }).unwrap();

      showToast(
        res?.message || "A new OTP has been sent to your email.",
        "success",
      );
      setCooldown(RESEND_COOLDOWN);
    } catch (error) {
      showToast(
        error?.data?.message || "Could not resend OTP. Please try again.",
        "error",
      );
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

                <form
                  id="otp-form"
                  onSubmit={handleSubmit}
                  noValidate
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="700"
                  className="aos-init aos-animate"
                >
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
                        inputMode="numeric"
                        autoComplete="one-time-code"
                        value={otpDetails.otp}
                        onChange={(e) =>
                          setOtpDetails((prev) => ({
                            ...prev,
                            otp: e.target.value.replace(/\D/g, "").slice(0, 6),
                          }))
                        }
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    id="submit"
                    disabled={isLoading}
                    className="btn btn-register mb-4 text-white d-flex align-items-center justify-content-center gap-2"
                  >
                    {isLoading ? "Verifying..." : "Verify OTP"}
                  </button>
                </form>

                <div
                  className="text-center sync-card-height2 aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="800"
                >
                  <p className="text-muted m-0" style={{ fontSize: "1rem" }}>
                    Didn&apos;t receive the code?{" "}
                    <a
                      href="#"
                      id="resend-link"
                      className="text-decoration-none fw-semibold"
                      style={{
                        color: "#1665b6",
                        opacity: cooldown > 0 || isResending ? 0.6 : 1,
                      }}
                      onClick={handleResend}
                    >
                      {isResending
                        ? "Sending..."
                        : cooldown > 0
                          ? `Resend (${cooldown}s)`
                          : "Resend"}
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

export default VerifyOtp;
