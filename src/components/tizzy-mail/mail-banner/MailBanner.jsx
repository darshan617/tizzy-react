import React from "react";
import Image from "next/image";
import bannerImg from "@/assets/images/banner-img.png";
import styles from "@/components/tizzy-mail/mail-banner/MailBanner.module.css";
import { LuArrowUpRight } from "react-icons/lu";
import Link from "next/link";

const MailBanner = () => {
  return (
    <section
      className={`h-100 position-relative ${styles.homeBanner}`}
      style={{ background: "#d6d6f2" }}
    >
      <div className="container h-100">
        <div className="row h-100">
          <div className="col-lg-6 col-md-12 col-12 d-flex align-items-center">
            <div className={`banner-text ${styles.bannerText}`}>
              <h1 className="title mb-0">Tizzy® Mail</h1>
              <p className="p-content">
                Tizzy® Mail users will never have to worry about delayed
                emails, missing incoming mails, spam issues, IP blacklisting,
                DNS-related problems, email spoofing, or data backup and
                restore.
                <br /> All our plans are designed with robust solutions to
                handle commonly faced email issues.
              </p>
              <div className="d-flex flex-column flex-lg-row gap-5 mt-40">
                <span onClick={() => {
                  const pricing = document.getElementById("pricing");
                  if (pricing) {
                    pricing.scrollIntoView({ behavior: "smooth" });
                  }
                }} className="tp-btn-black" >
                  <span className="tp-btn-black-filter d-inline-flex align-items-center">
                    <span className="tp-btn-black-text" style={{ cursor: "pointer" }}>View Pricing</span>
                    <span className="tp-btn-black-circle" style={{ cursor: "pointer" }}>
                      <LuArrowUpRight size={18} />
                    </span>
                  </span>
                </span>
              </div>

              <div className="DedicatedSupport d-flex gap-5 mt-40">
                <div
                  className="w-50 d-flex flex-column justify-content-between uptime position-relative aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="600"
                >
                  <div>
                    <span className="div-sub-title d-inline-block mb-0">
                      99.99%
                    </span>
                    <br />
                    <span className="small-text color-000000 d-inline-block mb-0">
                      Uptime
                    </span>
                  </div>
                  <h2 className="p-content mb-0">Dedicated Support</h2>
                </div>

                <div
                  className="w-50 aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="600"
                >
                  <h3 className="div-sub-title">AI Based Spam Protection</h3>
                  <h4 className="p-content mb-0">Dedicated Support</h4>
                </div>
              </div>
            </div>
          </div>

          <div
            className="col-lg-6 col-md-12 col-12 d-flex align-items-end aos-init aos-animate"
            data-aos="zoom-in"
            data-aos-easing="linear"
            data-aos-duration="600"
          >
            <div className={`banner-img home-banner-img ${styles.bannerImg}`}>
              <Image
                src={bannerImg}
                className={`img ${styles.bannerImg}`}
                alt="banner img"
                width={500}
                height={500}

              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MailBanner;
