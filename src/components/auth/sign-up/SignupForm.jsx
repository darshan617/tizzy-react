import React, { useState } from "react";
import styles from "@/components/auth/sign-in/SignInForm.module.css";
import {
  useRegisterMutation,
  useSearchGstinMutation,
} from "@/redux/apis/signupApi";
import { useDispatch, useSelector } from "react-redux";
import { setUserData } from "@/redux/slices/userSlice";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { FaCheckCircle, FaFile, FaPhoneAlt, FaUser } from "react-icons/fa";
import Link from "next/link";
import { BsCheckCircleFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
const SignupForm = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [register] = useRegisterMutation();
  const [searchGstin] = useSearchGstinMutation();
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    mobile: "",
    gstin: "",
    company_name: "",
    company_address: "",
    terms_and_conditions: false,
    country: "",
    state: "",
    city: "",
    zip_code: "",
    pan_no: "",
  });

  const [isValidGstIn, setIsValidGstIn] = useState(false);

  const handleChange = (e) => {
    const { name, value, checked } = e?.target;
    if (name === "terms_and_conditions") {
      setUserDetails((prev) => ({
        ...prev,
        terms_and_conditions: checked,
      }));
    } else {
      setUserDetails((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleRegister = async () => {
    try {
      const res = await register({
        body: userDetails,
      });
      if (res?.data?.success) {
        // Cookies.set("userData", JSON.stringify(userDetails));
        dispatch(setUserData(userDetails));
        router?.push("/auth/otp-verfication");
      }
    } catch (error) {
      console.log("error", error);
    }
    setUserDetails({
      name: "",
      email: "",
      mobile: "",
      gstin: "",
      company_name: "",
      company_address: "",
      terms_and_conditions: false,
      country: "",
      state: "",
      city: "",
      zip_code: "",
      pan_no: "",
    });
  };
  const handleSearchGstin = async () => {
    try {
      const res = await searchGstin({
        body: {
          gstin: userDetails?.gstin,
        },
      });

      if (res?.data?.success) {
        const compnayName = res?.data?.data?.company_name;
        const companyAddress = res?.data?.data?.company_address;
        const city = res?.data?.data?.city;
        const country = res?.data?.data?.country;
        const state = res?.data?.data?.state;
        const zip_code = res?.data?.data?.pincode;
        const pan_no = res?.data?.data?.pan_no;

        setIsValidGstIn(true);
        setUserDetails((prev) => ({
          ...prev,
          company_name: compnayName,
          company_address: companyAddress,
          city: city,
          country: country,
          state: state,
          zip_code: zip_code,
          pan_no: pan_no,
        }));
        // dispatch(setUserData(res?.data?.data));
      } else {
        setIsValidGstIn(false);
      }
    } catch (error) {
      console.log("error", error);
      setIsValidGstIn(false);
    }
  };
  return (
    <>
      <div className="auth-wrapper">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-11 col-xl-10">
              <div className="auth-card d-flex flex-column flex-md-row">
                {/* <!-- Left Side: Register Form --> */}
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

                  <div
                    id="success-message"
                    className="alert alert-success d-none fw-medium aos-init aos-animate"
                    data-aos="fade-up"
                  ></div>

                  <form
                    id="form"
                    data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="700"
                    className="aos-init aos-animate"
                  >
                    <input
                      type="hidden"
                      name="_token"
                      value="49bCtBGtsVPAXpx4stYi8YxfV3GiZNpnfA15MYVV"
                      autocomplete="off"
                    />{" "}
                    <div className="mb-3">
                      <div className="position-relative">
                        <FaUser className="input-icon" />

                        <input
                          type="text"
                          name="name"
                          id="name"
                          className="form-control auth-input"
                          placeholder="Name"
                        />
                      </div>
                      <div className="text-danger" id="error-name"></div>
                    </div>
                    <div className="mb-3">
                      <div className="position-relative">
                        <IoMdMail className="input-icon" />
                        <input
                          type="text"
                          name="email"
                          id="email"
                          className="form-control auth-input"
                          placeholder="Email Address"
                        />
                      </div>
                      <div className="text-danger" id="error-email"></div>
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
                        />
                      </div>
                      <div className="text-danger" id="error-mobile"></div>
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
                          />

                          <button id="search" type="button">
                            Search
                            <span
                              id="spinner2"
                              className="spinner-border spinner-border-sm d-none"
                              role="status"
                            ></span>
                          </button>
                        </div>
                      </div>
                      <div className="text-danger" id="error-gstin"></div>
                    </div>
                    <div className="mb-3 d-none" id="CompanyName">
                      <div className="position-relative">
                        <i className="fa fa-user input-icon"></i>
                        <input
                          type="text"
                          name="company_name"
                          id="company_name"
                          className="form-control auth-input"
                          placeholder="Company Name"
                          readonly=""
                        />
                      </div>
                      <div
                        className="text-danger"
                        id="error-company_name"
                      ></div>
                    </div>
                    <div className="mb-3 d-none" id="CompanyAddress">
                      <div className="position-relative">
                        <i className="fa fa-user input-icon"></i>
                        <input
                          type="text"
                          name="company_address"
                          id="company_address"
                          className="form-control auth-input"
                          placeholder="Company Address"
                        />
                      </div>
                      <div
                        className="text-danger"
                        id="error-company_address"
                      ></div>
                    </div>
                    <div className="mb-4">
                      <div className="form-check">
                        <input
                          type="checkbox"
                          name="terms_and_conditions"
                          id="terms_and_conditions"
                          className="form-check-input"
                        />
                        <label
                          className="form-check-label text-muted ms-1"
                          for="termsCheck"
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
                        <div
                          className="text-danger"
                          id="error-terms_and_conditions"
                        ></div>
                      </div>
                    </div>
                    <button
                      type="submit"
                      id="submit"
                      className="btn btn-register mb-4 text-white d-flex align-items-center justify-content-center gap-2"
                    >
                      <span
                        id="spinner"
                        className="spinner-border spinner-border-sm d-none"
                        role="status"
                      ></span>
                      <span id="btn-text">Register</span>
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
                      <a
                        href="/auth/login"
                        className="text-decoration-none fw-semibold"
                        style={{ color: "#1665b6;" }}
                      >
                        Login
                      </a>
                    </p>
                  </div>
                </div>

                {/* <!-- Right Side: Illustration & Information --> */}
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
    </>
  );
};

export default SignupForm;
