import React, { useState } from "react";
import styles from "@/components/auth/sign-in/SignInForm.module.css";
import {
  useRegisterMutation,
  useSearchGstinMutation,
} from "@/redux/apis/signupApi";
import { useDispatch } from "react-redux";
import { setUserData } from "@/redux/slices/userSlice";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { FaFile, FaPhoneAlt, FaUser } from "react-icons/fa";
import Link from "next/link";
import { BsCheckCircleFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { useToast } from "@/custom-hooks/toast/ToastProvider";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MOBILE_REGEX = /^\d{10}$/;

const initialState = {
  name: "",
  email: "",
  mobile: "",
  terms_and_conditions: false,
  gstin: "",
  company_name: "",
  company_address: "",
  city: "",
  country: "",
  state: "",
  zip_code: "",
  pan_no: "",
};

const SignupForm = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { showToast } = useToast();

  const [register, { isLoading: isRegistering }] = useRegisterMutation();
  const [searchGstin, { isLoading: isSearching }] = useSearchGstinMutation();

  const [userDetails, setUserDetails] = useState(initialState);
  const [isValidGstIn, setIsValidGstIn] = useState(false);

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;

    setUserDetails((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // If the GSTIN is edited, the previously fetched company data is stale
    if (name === "gstin" && isValidGstIn) {
      setIsValidGstIn(false);
      setUserDetails((prev) => ({
        ...prev,
        gstin: value,
        company_name: "",
        company_address: "",
        city: "",
        country: "",
        state: "",
        zip_code: "",
        pan_no: "",
      }));
    }
  };

  const validate = () => {
    if (!userDetails.name.trim()) return "Please enter your name.";
    if (!EMAIL_REGEX.test(userDetails.email.trim()))
      return "Please enter a valid email address.";
    if (!MOBILE_REGEX.test(userDetails.mobile.trim()))
      return "Please enter a valid 10-digit mobile number.";
    if (!userDetails.terms_and_conditions)
      return "Please accept the Terms & Conditions.";
    return null;
  };

  // Register button is enabled only when required fields are valid
  // and the Terms checkbox is ticked. GSTIN stays optional.
  const isFormValid =
    userDetails.name.trim().length > 0 &&
    EMAIL_REGEX.test(userDetails.email.trim()) &&
    MOBILE_REGEX.test(userDetails.mobile.trim()) &&
    userDetails.terms_and_conditions;

  const handleRegister = async (e) => {
    e?.preventDefault();

    if (!isFormValid || isRegistering) return;

    const validationError = validate();
    if (validationError) {
      showToast(validationError, "error");
      return;
    }

    try {
      const res = await register({ body: userDetails }).unwrap();

      if (res?.success) {
        // THIS is what the OTP page needs: without it, email/mobile are empty
        // there and OTP verification can never work.
        const signupData = {
          name: userDetails.name,
          email: userDetails.email,
          mobile: userDetails.mobile,
        };

        dispatch(setUserData(signupData));
        Cookies.set("signupData", JSON.stringify(signupData), {
          expires: 1,
          path: "/",
        });

        showToast(
          res?.message || "Registered successfully. Please verify your OTP.",
          "success",
        );
        router.push("/auth/otp-verfication");
      } else {
        showToast(res?.message || "Registration failed.", "error");
      }
    } catch (error) {
      showToast(
        error?.data?.message || "Registration failed. Please try again.",
        "error",
      );
    }
    // Form is intentionally NOT cleared here, so the user keeps their input on error.
  };

  const handleSearchGstin = async () => {
    if (!userDetails.gstin.trim()) {
      showToast("Please enter a GSTIN.", "error");
      return;
    }

    try {
      const res = await searchGstin({
        body: { gstin: userDetails.gstin.trim() },
      }).unwrap();

      if (res?.success) {
        const d = res?.data || {};

        setIsValidGstIn(true);
        setUserDetails((prev) => ({
          ...prev,
          company_name: d.company_name || "",
          company_address: d.company_address || "",
          city: d.city || "",
          country: d.country || "",
          state: d.state || "",
          zip_code: d.pincode || "",
          pan_no: d.pan_no || "",
        }));
        showToast("GSTIN details fetched.", "success");
      } else {
        setIsValidGstIn(false);
        showToast(res?.message || "Invalid GSTIN.", "error");
      }
    } catch (error) {
      setIsValidGstIn(false);
      showToast(
        error?.data?.message || "Could not fetch GSTIN details.",
        "error",
      );
    }
  };

  return (
    <>
      <div className="auth-wrapper">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-11 col-xl-10">
              <div className="auth-card d-flex flex-column flex-md-row">
                {/* Left Side: Register Form */}
                <div
                  className="col-md-6 col-lg-6 auth-left aos-init aos-animate"
                  data-aos="fade-right"
                  data-aos-easing="linear"
                  data-aos-duration="900"
                >
                  <h2
                    className="p-content mb-0 aos-init aos-animate"
                    data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="500"
                  >
                    Create Account
                  </h2>
                  <p
                    className="text-muted mb-4 aos-init aos-animate"
                    data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="900"
                  >
                    Sign up quickly and start managing your cloud services
                  </p>

                  <form
                    id="form"
                    onSubmit={handleRegister}
                    noValidate
                    data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="700"
                    className="aos-init aos-animate"
                  >
                    <div className="mb-3">
                      <div className="position-relative">
                        <FaUser className="input-icon" />
                        <input
                          type="text"
                          name="name"
                          id="name"
                          className="form-control auth-input"
                          placeholder="Name"
                          value={userDetails.name}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="mb-3">
                      <div className="position-relative">
                        <IoMdMail className="input-icon" />
                        <input
                          type="email"
                          name="email"
                          id="email"
                          className="form-control auth-input"
                          placeholder="Email Address"
                          value={userDetails.email}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="mb-3">
                      <div className="position-relative">
                        <FaPhoneAlt className="input-icon" />
                        <input
                          type="text"
                          name="mobile"
                          id="mobile"
                          className="form-control auth-input"
                          placeholder="Mobile Number"
                          inputMode="numeric"
                          maxLength={10}
                          value={userDetails.mobile}
                          onChange={(e) =>
                            setUserDetails((prev) => ({
                              ...prev,
                              mobile: e.target.value
                                .replace(/\D/g, "")
                                .slice(0, 10),
                            }))
                          }
                        />
                      </div>
                    </div>

                    <div className="mb-3">
                      <div className="search-box">
                        <div className="position-relative">
                          <FaFile className="input-icon" />
                          <input
                            type="text"
                            name="gstin"
                            id="gstin"
                            className="form-control auth-input"
                            placeholder="GSTIN"
                            value={userDetails.gstin}
                            onChange={handleChange}
                          />
                          <button
                            id="search"
                            type="button"
                            onClick={handleSearchGstin}
                            disabled={isSearching}
                          >
                            {isSearching ? "Searching..." : "Search"}
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* isValidGstIn is only true when the API returned success: true */}
                    {isValidGstIn && (
                      <>
                        <div className="mb-3" id="CompanyName">
                          <div className="position-relative">
                            <FaUser className={styles.inputIcon} />
                            <input
                              type="text"
                              name="company_name"
                              id="company_name"
                              className="form-control auth-input"
                              placeholder="Company Name"
                              value={userDetails.company_name}
                              readOnly
                              disabled
                            />
                          </div>
                        </div>
                        <div className="mb-3" id="CompanyAddress">
                          <div className="position-relative">
                            <FaFile className={styles.inputIcon} />
                            <input
                              type="text"
                              name="company_address"
                              id="company_address"
                              className="form-control auth-input"
                              placeholder="Company Address"
                              value={userDetails.company_address}
                              readOnly
                              disabled
                            />
                          </div>
                        </div>
                      </>
                    )}

                    <div className="mb-4">
                      <div className="form-check">
                        <input
                          type="checkbox"
                          name="terms_and_conditions"
                          id="terms_and_conditions"
                          className="form-check-input"
                          checked={userDetails.terms_and_conditions}
                          onChange={handleChange}
                        />
                        <label
                          className="form-check-label text-muted ms-1"
                          htmlFor="terms_and_conditions"
                          style={{ fontSize: "0.9rem" }}
                        >
                          I Agree to the{" "}
                          <a
                            href="#"
                            className="text-decoration-none fw-medium"
                            style={{ color: "#1665b6" }}
                          >
                            Terms &amp; Conditions
                          </a>
                        </label>
                      </div>
                    </div>

                    <button
                      type="submit"
                      id="submit"
                      aria-disabled={!isFormValid || isRegistering}
                      tabIndex={!isFormValid || isRegistering ? -1 : 0}
                      style={{
                        opacity: !isFormValid || isRegistering ? 0.6 : 1,
                        cursor:
                          !isFormValid || isRegistering
                            ? "not-allowed"
                            : "pointer",
                        pointerEvents:
                          !isFormValid || isRegistering ? "none" : "auto",
                      }}
                      className="btn btn-register mb-4 text-white d-flex align-items-center justify-content-center gap-2"
                    >
                      {isRegistering && (
                        <span
                          className="spinner-border spinner-border-sm"
                          role="status"
                        ></span>
                      )}
                      <span id="btn-text">
                        {isRegistering ? "Registering..." : "Register"}
                      </span>
                    </button>
                  </form>

                  <div
                    className="text-center aos-init aos-animate"
                    data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="800"
                  >
                    <p className="text-muted m-0" style={{ fontSize: "1rem" }}>
                      Already have an account?{" "}
                      <Link
                        href="/auth/login"
                        className="text-decoration-none fw-semibold"
                        style={{ color: "#1665b6" }}
                      >
                        Login
                      </Link>
                    </p>
                  </div>
                </div>

                {/* Right Side: Illustration & Information */}
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
    </>
  );
};

export default SignupForm;
