import React, { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import styles from "@/components/enquiry-form/EnquiryForm.module.css";
import { usePathname, useRouter } from "next/navigation";
import { SlEnvolope } from "react-icons/sl";

const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

const EnquiryForm = () => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [captchaToken, setCaptchaToken] = useState(null);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const recaptchaRef = useRef(null);
  const pathname = usePathname();
  const router = useRouter();

  if (pathname === "/thank-you") return null;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[0-9]{10}$/;

  const validate = () => {
    const newErrors = {};

    if (!name.trim()) newErrors.name = "name is required.";

    if (!email.trim()) newErrors.email = "Valid email is required.";
    else if (!emailRegex.test(email))
      newErrors.email = "Please enter valid email_id.";

    if (!phone.trim()) newErrors.phone = "contact no is required.";
    else if (!phoneRegex.test(phone))
      newErrors.phone = "Enter a valid 10-digit mobile number!";

    if (!message.trim()) newErrors.message = "Please, leave us a message.";

    if (!captchaToken)
      newErrors.captcha = "Please verify that you are not a robot.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) return;

    setSubmitting(true);
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          message,
          captchaToken,
        }),
      });

      if (!res.ok) throw new Error("Submission failed");

      setShow(false);
      router.push("/thank-you");
    } catch (err) {
      setErrors((prev) => ({
        ...prev,
        form: "Something went wrong. Please try again.",
      }));
    } finally {
      setSubmitting(false);
      recaptchaRef.current?.reset();
      setCaptchaToken(null);
    }
  };

  return (
    <>
      <button
        type="button"
        id="inquiryBtn"
        className="inquiry-sticky-btn"
        onClick={() => setShow(true)}
      >
        <span className="inquiry-icon">
          <SlEnvolope />
        </span>{" "}
        Inquiry Now
      </button>

      <div
        id="inquiryPanel"
        className={`${styles.InquiryPanel} ${styles.InquiryForm} ${show ? "active" : ""}`}
      >
        <div className={`${styles.InquiryHeader}`}>
          <h2 className="div-text color-0355ac mb-0">Connect with us</h2>
          <button
            type="button"
            id="closeInquiry"
            className="close-btn"
            onClick={() => setShow(false)}
          >
            ×
          </button>
        </div>

        <div className={`${styles.InquiryBody}`}>
          <div className="col-md-12 form-group">
            <input
              name="ctl00$txtqName"
              type="text"
              id="txtqName"
              className="form-control"
              placeholder="Enter Name *"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && (
              <span
                id="RequiredFieldValidator5"
                style={{ color: "Red", fontSize: "X-Small" }}
              >
                {errors.name}
              </span>
            )}
          </div>

          <div className="col-md-12 form-group">
            <input
              name="ctl00$txtqemail"
              type="text"
              id="txtqemail"
              className="form-control"
              placeholder="Enter E-mail Id *"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && (
              <span
                id="RequiredFieldValidator7"
                style={{ color: "Red", fontSize: "X-Small" }}
              >
                {errors.email}
              </span>
            )}
          </div>

          <div className="col-12 form-group">
            <input
              name="ctl00$txtqmobile"
              type="tel"
              inputMode="numeric"
              maxLength={10}
              id="txtqmobile"
              className="form-control"
              placeholder="Enter Phone Number *"
              value={phone}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, "");
                setPhone(value);
              }}
            />
            {errors.phone && (
              <span
                id="RegularExpressionValidator3"
                style={{ color: "Red", fontSize: "X-Small" }}
              >
                {errors.phone}
              </span>
            )}
          </div>

          <div className="col-12 form-group">
            <textarea
              name="ctl00$txtqmessage"
              id="txtqmessage"
              className="form-control"
              placeholder="Message / Requirement *"
              style={{ resize: "none" }}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            {errors.message && (
              <span
                id="RequiredFieldValidator9"
                style={{ color: "Red", fontSize: "X-Small" }}
              >
                {errors.message}
              </span>
            )}
          </div>

          <div className="col-12 form-group">
            <div id="recaptchaQuickEnquiry">
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={SITE_KEY}
                onChange={(token) => {
                  setCaptchaToken(token);
                  setErrors((prev) => ({ ...prev, captcha: undefined }));
                }}
                onExpired={() => setCaptchaToken(null)}
              />
            </div>
            {errors.captcha && (
              <span style={{ color: "Red", fontSize: "X-Small" }}>
                {errors.captcha}
              </span>
            )}
          </div>

          {errors.form && (
            <div className="col-12 form-group">
              <span style={{ color: "Red", fontSize: "X-Small" }}>
                {errors.form}
              </span>
            </div>
          )}

          <div className="col-12 mt-20 form-group mb-0">
            <button
              type="button"
              id="btnqsubmit"
              className="tp-btn-black"
              onClick={handleSubmit}
              disabled={submitting}
            >
              <span className="tp-btn-black-filter d-inline-flex align-items-center">
                <span className="tp-btn-black-text">
                  {submitting ? "Submitting..." : "Submit"}
                </span>
                <span className="tp-btn-black-circle">
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 9L9 1M9 1H1M9 1V9"
                      stroke="currentcolor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EnquiryForm;
