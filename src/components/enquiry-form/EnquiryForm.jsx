import React from "react";
import styles from "@/components/enquiry-form/EnquiryForm.module.css";
const EnquiryForm = ({ show, onClose }) => {
  return (
    <div>
      <div id="inquiryPanel" className={`${styles.InquiryPanel} ${styles.InquiryForm} ${show ? "active" : ""}`}>
        <div className={`${styles.InquiryHeader}`}>
          <h2 className="div-text color-0355ac mb-0">Connect with us</h2>
          <button type="button" id="closeInquiry" className="close-btn" onClick={onClose}>
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
            />
            <span
              id="RequiredFieldValidator5"
              style={{ color: "Red", fontSize: "X-Small", display: "none" }}
            >
              name is required.
            </span>
          </div>

          <div className="col-md-12 form-group">
            <input
              name="ctl00$txtqemail"
              type="text"
              id="txtqemail"
              className="form-control"
              placeholder="Enter E-mail Id *"
            />
            <span
              id="RequiredFieldValidator7"
              style={{ color: "Red", fontSize: "X-Small", display: "none" }}
            >
              Valid email is required.
            </span>
            <span
              id="RegularExpressionValidator2"
              style={{ color: "Red", fontSize: "X-Small", display: "none" }}
            >
              Please enter valid email_id.
            </span>
          </div>

          <div className="col-12 form-group">
            <input
              name="ctl00$txtqmobile"
              type="text"
              maxlength="12"
              id="txtqmobile"
              className="form-control"
              placeholder="Enter Phone Number *"
              onkeypress="return isNumber(event)"
            />
            <span
              id="RequiredFieldValidator8"
              style={{ color: "Red", fontSize: "X-Small", display: "none" }}
            >
              contact no is required.
            </span>
            <span
              id="RegularExpressionValidator3"
              style={{ color: "Red", display: "none" }}
            >
              Enter a valid 10-digit mobile number!
            </span>
          </div>

          <div className="col-12 form-group">
            <textarea
              name="ctl00$txtqmessage"
              id="txtqmessage"
              className="form-control"
              placeholder="Message / Requirement *"
              style={{ resize: "none" }}
              height="100px"
              
            />
            <span
              id="RequiredFieldValidator9"
              style={{ color: "Red", fontSize: "X-Small", display: "none" }}
            >
              Please,leave us a message.
            </span>
          </div>
          <div className="col-12 form-group">
            <div id="recaptchaQuickEnquiry">
              <div style={{ width: "304px", height: "78px" }}>
                <div>
                  <iframe
                    title="reCAPTCHA"
                    width="304"
                    height="78"
                    role="presentation"
                    name="a-39t4khcizwnb"
                    frameborder="0"
                    scrolling="no"
                    sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation"
                    src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6Lf1gnYaAAAAAGxhEvL6V4DAqQxjgGZrXthjAbbq&amp;co=aHR0cHM6Ly93d3cudGl6enljbG91ZC5jb206NDQz&amp;hl=en-GB&amp;v=A7KpaEASfhDcK0nXxgQEyyYv&amp;size=normal&amp;anchor-ms=20000&amp;execute-ms=30000&amp;cb=4hh49anjq6c7"
                  ></iframe>
                </div>
                <textarea
                  id="g-recaptcha-response"
                  name="g-recaptcha-response"
                  className="g-recaptcha-response"
                  style={{ width: "250px", height: "80px", border: "1px solid rgb(193, 193, 193)", margin: "10px 25px", padding: "0px", resize: "none", display: "none" }}
                ></textarea>
              </div>
            </div>
          </div>
          <div className="col-12 mt-20 form-group mb-0">
            <a
              id="btnqsubmit"
              className="tp-btn-black"
              
            >
              <span className="tp-btn-black-filter d-inline-flex align-items-center">
                <span className="tp-btn-black-text">Submit</span>
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
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnquiryForm;