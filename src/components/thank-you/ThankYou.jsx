import React from "react";
import styles from "@/components/thank-you/ThankYou.module.css"

const ThankYou = () => {
  return (
    <section className={`${styles.thankyouWrapper}`}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8 col-12">
            <div className="position-relative text-center">
              <div className={`${styles.icon}`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.8"
                    d="M3 8l9 6 9-6M4 6h16a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2z"
                  ></path>
                </svg>
              </div>
              <h1 className={`${styles.thankYouTitle}`}>Thank You!</h1>
              <p className={`${styles.para}`}>
                Thanks for reaching out! We’ve received your request
                successfully, and our team will get back to you shortly
                regarding your mail. We’re excited to help you get started with
                a smooth and reliable email experience.
              </p>
              <div className="actions">
                <a href="/" className="tp-btn-black mt-50">
                  <span className="tp-btn-black-filter d-inline-flex align-items-center">
                    <span className="tp-btn-black-text">Go to Home</span>
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
      </div>
    </section>
  );
};

export default ThankYou;
