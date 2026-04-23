import Image from "next/image";
import React from "react";
import ArrowButton from "../../arrow-button/ArrowButton";
import heroBannerImg from "@/assets/home/hero-banner/home-banner.png";
import styles from "@/components/home/home-banner/HomeBanner.module.css";
const HeroBanner = () => {
  return (
    <section className="home-banner position-relative">
      <div className="container h-100">
        <div className="row h-100">
          {/* Left Content */}
          <div className="col-lg-6 col-md-6 col-12">
            <div className="banner-text">
              <h1 className="title">Tizzy® Cloud Email Plans</h1>

              <h2 className="title">
                <span
                  className="d-inline-block weight-Regular"
                  style={{ color: "#333233" }}
                >
                  at ₹
                </span>{" "}
                792.
              </h2>

              <p>
                Tizzy Mail, Microsoft 365 and Google Workspace — migrations, and
                quick support that keeps your team productive and compliant.
              </p>

              <ArrowButton text="Get Start Now" link="#" />
            </div>
          </div>

          {/* Right Image */}
          <div className="col-lg-6 col-md-6 col-12 d-flex align-items-end">
            <div
              className={`banner-img home-banner-img  ${styles.HerobannerImgWrapper}`}
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              <Image
                src={heroBannerImg}
                alt="Home Banner"
                className="img"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  objectPosition: "bottom",
                }}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
