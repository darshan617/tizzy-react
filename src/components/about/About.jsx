import Image from "next/image";
import React from "react";
import AboutImg from "@/assets/images/about-img.jpg";
import StrongPlatformImg from "@/assets/images/Strong-Platform.jpg";
import AutomatedPlatformImg from "@/assets/images/Automated-Platform.jpg";
import styles from "./About.module.css";

const About = () => {
  return (
    <>
      <section
        className={`${styles.homeBanner} position-relative`}
        style={{ backgroundColor: "var(--color-d1e9e5);" }}
      >
        <div className="container h-100">
          <div className="row h-100">
            <div className="col-lg-6 col-md-12 col-12 d-flex align-items-center order-md-div">
              <div className="banner-text">
                <h1 className="title">About Tizzy Cloud</h1>
                <p className="p-content">
                  Tizzy Cloud is a team of enthusiastic techies specialized in
                  Cloud Computing services. Since inception we are focused on
                  educating rather just selling services.. Gaining trust of our
                  elite clients we have a customer retain ratio of almost 94%.
                </p>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-12 col-12 d-flex align-items-center aos-init aos-animate"
              data-aos="zoom-in"
              data-aos-easing="linear"
              data-aos-duration="800"
            >
              <div className="banner-img img-zoom">
                <Image
                  src={AboutImg}
                  className="img zoom"
                  alt="about img"
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="strong-platform-section position-relative pt-100 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-12">
              <div
                className="banner-img img-zoom aos-init aos-animate"
                data-aos="zoom-in"
                data-aos-easing="linear"
                data-aos-duration="600"
              >
                <Image
                  src={StrongPlatformImg}
                  className="img zoom"
                  alt="Strong Platform"
                  width={500}
                  height={500}
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-12">
              <div className="banner-text">
                <h2
                  className="title aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="800"
                >
                  Strong Platform
                </h2>
                <p
                  className="p-content aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="1000"
                >
                  Hundreds of companies are served under this strong platform of
                  our company and thousands of email users are sending or
                  receiving emails almost every second.
                </p>
                <p
                  className="p-content aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="1200"
                >
                  Our country is heading towards an era of digital
                  transformation and cutting-edge technology. Enhancing skills
                  with innovation and adopting technologies always results in
                  scalable growth of business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.automatedPlatform} pt-100 pb-100`}>
        <div className="container">
          <div className="row position-relative">
            <div className="col-lg-6 col-md-12 col-12 d-flex align-items-center order-md-div">
              <div className="automated-text">
                <h2
                  className="title aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="800"
                >
                  Automated Platform
                </h2>
                <p
                  className="p-content aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="1000"
                >
                  We are thriving to built a fully automated platform that can
                  help our clients to manage their cloud computing services and
                  save cost. Research and innovation are our core business
                  principles.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-12">
              <div
                className="banner-img img-zoom aos-init aos-animate"
                data-aos="zoom-in"
                data-aos-easing="linear"
                data-aos-duration="1200"
              >
                <Image
                  src={AutomatedPlatformImg}
                  className="img zoom"
                  alt="Automated Platform"
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
