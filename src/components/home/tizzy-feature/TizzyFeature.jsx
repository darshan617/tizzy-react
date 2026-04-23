import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "@/components/home/tizzy-feature/TizzyFeature.module.css";
// import images
import aboutImg from "@/assets/home/tizzy-feature/home-about-img.jpg";
import ratingImg from "@/assets/home/tizzy-feature/rating.png";
import clientsImg from "@/assets/home/tizzy-feature/clients-appreciate.png";

import feature1 from "@/assets/home/tizzy-feature/features-img.png";
import feature2 from "@/assets/home/tizzy-feature/features-img02.png";
import feature3 from "@/assets/home/tizzy-feature/features-img03.png";
import feature4 from "@/assets/home/tizzy-feature/features-img04.png";
import feature5 from "@/assets/home/tizzy-feature/features-img05.png";
import feature6 from "@/assets/home/tizzy-feature/features-img06.png";
import ArrowButton from "@/components/arrow-button/ArrowButton";

const TizzyFeature = () => {
  const [currentTab, setCurrentTab] = useState(0);
  console.log(currentTab);

  const TAB_DATA = [
    {
      id: 0,
      img: feature1,
      desc: [
        "New Faster and Improved User-Friendly Webmail Interface. Fully Indexed Search engine returns results almost immediately.",
        "Forgot Password Feature, Skin or Layout change and much more is available in our latest Webmail version.",
      ],
    },
    {
      id: 1,
      img: feature2,
      desc: [
        "Auto discovery setup in all Email Clients like Outlook, Thunderbird etc. Faster Send/Receive or Sync of emails/folders. Sending emails with attachments is fast so delivery time of email to recipient inbox is also much shorter.",
      ],
    },
    {
      id: 2,
      img: feature3,
      desc: [
        `Filtering based on Reverse DNS Blacklisting, PTR DNS Record, DKIM, Greylisting, SPF, URL Blacklisting, Third Party Antivirus Scanner, IP Blacklisting, Domain Blacklisting or Email Address Blacklisting and Detecting/Blocking Abuse/Attacks.`,
      ],
    },
    {
      id: 3,
      img: feature4,
      desc: [
        `Managing DNS with all required records to make sure there is no warning or error shown when checking the overall Email Health for the domain. Email sent from such DNS of a Domain results in inbox delivery within seconds of sending it.`,
      ],
    },
    {
      id: 4,
      img: feature5,
      desc: [
        `Its very easy to manage your Email Accounts in few clicks. The IT manager of your company can now create, edit features or delete any of the Email Account in no time. You can update password or disable webmail and do lot more with various features.`,
      ],
    },
    {
      id: 5,
      img: feature6,
      desc: [
        `SSL and TLS Encryption is enabled for both incoming and outgoing emails. For incoming email you can set SSL and for Outgoing you can set TLS as Security Type while setting up your emails with any of Email Client like Outlook, Thunderbird etc.`,
      ],
    },
  ];

  return (
    <section className="home-about-section position-relative pt-100 pb-100">
      <div className="container">
        <div className="row position-relative">
          {/* LEFT IMAGE */}
          <div className="col-lg-6 col-md-6 col-12">
            <div
              className={`home-about-left position-relative img-zoom ${styles.aboutImgWrapper}`}
              data-aos="zoom-in"
              data-aos-duration="600"
            >
              <Image src={aboutImg} alt="home about" className="img zoom" />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="col-lg-6 col-md-6 col-12">
            <div className="home-about-right">
              <h2
                className="div-sub-title"
                data-aos="fade-up"
                data-aos-duration="600"
              >
                Features of Tizzy® Mail
              </h2>

              <p data-aos="fade-up" data-aos-duration="900">
                Tizzy Mail can be setup in automatic or manual mode on any
                device and in any email application. <br />
                It also has a user friendly Webmail Interface to access from
                browser. Creating your business email address is very fast and
                easy on Tizzy® Mail for eg. sales@YourCompanyName.com
              </p>

              <ArrowButton link="#" text="GET START NOW" />

              {/* RATINGS */}
              <div
                className="google-rating"
                data-aos="zoom-in"
                data-aos-duration="1500"
              >
                <div className="google-img">
                  <p className="mb-0">4.6 stars out of 5</p>
                  <Image
                    src={ratingImg}
                    alt="Rating"
                    style={{ height: "auto" }}
                  />
                </div>

                <div className="google-img">
                  <Image
                    src={clientsImg}
                    alt="Clients Appreciate"
                    style={{ height: "auto" }}
                  />
                  <p className="mt-2 mb-0">
                    Clients appreciate our email hosting, cloud setups &
                    Workspace support
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* TABS */}
        <div className="row mt-50">
          <div className="col-lg-12">
            <ul
              className={`nav nav-tabs flex-nowrap features-tabs ${styles.tabBtns}`}
              role="tablist"
              data-aos="fade-up"
            >
              {[
                "Faster Desktop and Mobile Webmail",
                "Faster POP, IMAP and SMTP Protocols",
                "Integrated Spam, Antivirus and Email Filtering",
                "DNS Management",
                "Email Account Management",
                "SSL/TLS Security",
              ].map((tab, i) => (
                <li className={`nav-item `} key={i}>
                  <button
                    className={`nav-link d-flex justify-content-between align-items-start ${
                      currentTab === i ? "active" : ""
                    }`}
                    type="button"
                    onClick={() => setCurrentTab(i)}
                  >
                    <span>{tab}</span>
                    <span className={styles.toogleIcon}>
                      {currentTab === i ? "-" : "+"}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
            {console.log(TAB_DATA[currentTab]?.id === currentTab)}
            {/* TAB CONTENT */}
            <div className="tab-content mt-50">
              <div
                key={currentTab}
                className={`tab-pane fade show active ${styles.tab}`}
                id={`tab${currentTab}`}
              >
                <div className="row">
                  <div className="col-lg-6">
                    <div className="features-img img-zoom">
                      <Image
                        src={TAB_DATA?.[currentTab]?.img}
                        alt={`Feature ${currentTab}`}
                      />
                    </div>
                  </div>

                  <div className="col-lg-6 d-flex align-items-center">
                    <div className="features-text">
                      {TAB_DATA?.[currentTab]?.desc?.map((item) => {
                        return <p>{item}</p>;
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TizzyFeature;
