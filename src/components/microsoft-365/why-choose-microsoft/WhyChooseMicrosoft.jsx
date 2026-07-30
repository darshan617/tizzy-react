import Image from "next/image";
import React from "react";
import microsoftWhyChooseImg from "@/assets/images/why-choose-micro.jpg";
import microsoftTizzyLogo from "@/assets/images/microsoft-tizzy-logo.png";
import getStartedImg from "@/assets/images/get-started.jpg";
import styles from "@/components/microsoft-365/why-choose-microsoft/WhyChooseMicrosoft.module.css";
import { FaCheckCircle } from "react-icons/fa";
import Link from "next/link";

const WhyChooseMicrosoft = () => {
  return (
    <>
      <section className="microsoft-why-choose position-relative pt-100 pb-100">
        <div className="microsoft-banner">
          <Image
            src={microsoftWhyChooseImg}
            className={`img ${styles.microsoftWhyChooseImg}`}
            alt="Microsoft Why Choose"
            width={1000}
            height={1000}
          />
        </div>
        <div className="container h-100">
          <div className="row h-100">
            <div className="col-lg-10 col-md-12 col-12 d-flex align-items-center">
              <div className="why-choose-text">
                <Image
                  src={microsoftTizzyLogo}
                  className={`img aos-init aos-animate ${styles.microsoftTizzyLogo}`}
                  alt="Microsoft Tizzy Logo"
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="600"
                  width={500}
                  height={500}
                />
                <h2
                  className="title mb-0 aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="800"
                >
                  Why Choose Microsoft 365 with Tizzy Cloud?
                </h2>
                <ul
                  className="workspace-list mt-40 aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="600"
                >
                  <li>
                    <FaCheckCircle className={`${styles.checkCircle}`} />{" "}
                    <strong>Easy Setup &amp; Migration -</strong> Ensuring a
                    transition to Microsoft 365 with zero data loss or downtime
                  </li>
                  <li>
                    <FaCheckCircle className={`${styles.checkCircle}`} />{" "}
                    <strong>Expert Support -</strong> Support from the beginning
                    for troubleshooting, user, and Microsoft 365 optimisation
                  </li>
                  <li>
                    <FaCheckCircle className={`${styles.checkCircle}`} />{" "}
                    <strong>Customised Plans -</strong> From start-ups to
                    enterprises, get flexible solutions tailored for every
                    company size
                  </li>
                  <li>
                    <FaCheckCircle className={`${styles.checkCircle}`} />{" "}
                    <strong>Robust Security -</strong> Keep your data safe with
                    built-in security features and compliance controls from
                    Microsoft
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={`${styles.getStartedSection} position-relative pt-100 pb-100`}>
        <div className="microsoft-banner">
          <Image
            src={getStartedImg}
            className={`img ${styles.getStartedImg}`}
            alt="Get Started with Microsoft 365"
            width={2000}
            height={2000}
          />
        </div>
        <div className="container">
          <div className="row justify-content-end">
            <div className="col-lg-6 col-md-12 col-12 d-flex align-items-center">
              <div className="why-choose-text position-relative">
                <h2
                  className="title aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="1000"
                >
                  Get Started with Tizzy Cloud <strong>Today</strong>
                </h2>
                <p
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="1200"
                  class="aos-init aos-animate"
                >
                  Elevate your business with Tizzy Microsoft 365 cloud support.
                  We take care of the entire process, from setup to continuous
                  support, allowing you to concentrate on growing your company.
                  Get in touch today with a Tizzy Cloud team member to identify
                  the perfect Microsoft 365 plan for your needs.
                </p>
                <Link
                  href="#"
                  className="tp-btn-black mt-30 aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="1400"
                >
                  <span className="tp-btn-black-filter d-inline-flex align-items-center">
                    <span className="tp-btn-black-text">View Pricing</span>
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
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChooseMicrosoft;
