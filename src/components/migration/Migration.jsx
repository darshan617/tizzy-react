import Image from "next/image";
import React from "react";
import bannerImg from "@/assets/images/about-img.jpg";
import MigrationAutomatedPlatformImg from "@/assets/images/Migration-Automated-Platform.jpg";
import CloudyImg from "@/assets/images/cloudy.svg";

const Migration = () => {
  return (
    <>
      <section
        className="home-banner position-relative"
        style={{ backgroundColor: "var(--color-d1e9e5)" }}
      >
        <div className="container h-100">
          <div className="row h-100">
            <div
              className="col-lg-6 col-md-12 col-12 d-flex align-items-center aos-init aos-animate"
              data-aos="zoom-in"
              data-aos-easing="linear"
              data-aos-duration="800"
            >
              <div className="banner-img img-zoom">
                <Image
                  src={bannerImg}
                  className="img zoom"
                  alt="about img"
                  width={500}
                  height={500}
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-12 d-flex align-items-center">
              <div className="banner-text">
                <h1 className="title">Data Migration Service</h1>
                <p className="p-content">
                  Data Migration is considered as one of the biggest costs
                  during development. It always depends on size of data to be
                  migrated. Migration can be from one environment to another or
                  from one company to other.
                </p>
                <a href="/contact" className="tp-btn-black mt-50">
                  <span className="tp-btn-black-filter d-inline-flex align-items-center">
                    <span className="tp-btn-black-text">Get Started</span>
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
      </section>

      <section className="migration-section position-relative pt-100 pb-100">
        <div className="container">
          <div className="row position-relative">
            <div className="col-lg-6 col-md-12 col-12 d-flex align-items-center order-md-div">
              <div className="automated-text">
                <h2
                  className="title aos-init aos-animate"
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="800"
                >
                  Automated Platform
                </h2>
                <div
                  className="Migration-text aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="1000"
                >
                  <p>
                    Data Migration to Cloud is the primary service provided by
                    our company. Pre-Migration checks are done to see if the
                    host and client both can perform the migration without any
                    errors. If there are any chances of errors then it is solved
                    before starting migration.
                  </p>
                  <p>
                    Complete backup is taken to make sure in case of any data
                    loss or disaster the important data can be recovered.
                    Usually, data migration time depends on Instance
                    type/configuration and internet speed. Bandwidth limit or
                    charges needs to be checked calculating the overall size of
                    the data to be migrated.
                  </p>
                </div>
                <p
                  className="p-content aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="1200"
                >
                  We are thriving to built a fully automated platform that can
                  help our clients to manage their cloud computing services and
                  save cost. Research and innovation are our core business
                  principles.
                </p>

                <div className="row">
                  <div
                    className="col-lg-6 col-md-6 col-12 p-0 d-lg-flex aos-init aos-animate"
                    data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="1200"
                  >
                    <div className="migration-list">
                      <h2 className="p-content color-1e58b4">
                        Migration Service by leading Cloud Computing Companies
                      </h2>
                      <ul className="mig">
                        <li>
                          <Image src={CloudyImg} className="svg" alt="cloudy" />
                          AWS Migration Service
                        </li>
                        <li>
                          <Image src={CloudyImg} className="svg" alt="cloudy" />
                          Microsoft Azure Migration Service
                        </li>
                        <li>
                          <Image src={CloudyImg} className="svg" alt="cloudy" />
                          Google Cloud Migration Service
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className="col-lg-6 col-md-6 col-12 p-0 d-lg-flex aos-init aos-animate"
                    data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="1400"
                  >
                    <div className="migration-list">
                      <h3 className="p-content color-1e58b4">Migration</h3>
                      <ul className="mig">
                        <li>
                          <Image src={CloudyImg} className="svg" alt="cloudy" />
                          Cloud Instance
                        </li>
                        <li>
                          <Image src={CloudyImg} className="svg" alt="cloudy" />
                          Application
                        </li>
                        <li>
                          <Image src={CloudyImg} className="svg" alt="cloudy" />
                          High Availability Database
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
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
                  src={MigrationAutomatedPlatformImg}
                  className="img zoom"
                  alt="migration automated platform"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Migration;
