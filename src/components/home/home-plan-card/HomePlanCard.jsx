import Image from "next/image";
import React from "react";
import dataRecoveryImg from "@/assets/home/home-plan-cards/data-recovery.png";
import emailImg from "@/assets/home/home-plan-cards/email.png";
import verifiedImg from "@/assets/home/home-plan-cards/verified.png";
const HomePlanCard = () => {
  const CARD_DATA = [
    {
      img: emailImg,
      title: "Email Send/Receive Speed",
      desc: `Email Send/ Receive Speed Fastest Outlook/Any Email Application Sync Speed`,
    },
    {
      img: dataRecoveryImg,
      title: "Backup & Restore",
      desc: `Automated 30 days scheduled backup on AWS S3 Bucket`,
    },
    {
      img: verifiedImg,
      title: "AWS Security Standardsd",
      desc: `AWS Foundational Security Best Practices, CIS AWS Foundations Benchmark & PCI DSS`,
    },
  ];

  return (
    <section className="home-plan-section">
      <div className="container">
        <div className="row">
          {/* Box 1 */}
          {CARD_DATA?.map((card, idx) => {
            return (
              <div className="col-lg-4 col-md-4 col-xl-4 col-sm-4 col-12">
                <div
                  className="home-plan-box"
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="600"
                  style={{ height: "-webkit-fill-available" }}
                >
                  <div className="text-center">
                    <Image
                      src={card?.img}
                      alt="email"
                      width={60}
                      height={60}
                      data-aos="zoom-in"
                      data-aos-easing="linear"
                      data-aos-duration="600"
                    />
                    <h2 className="div-text mb-1">{card?.title}</h2>
                    <p>{card?.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HomePlanCard;
