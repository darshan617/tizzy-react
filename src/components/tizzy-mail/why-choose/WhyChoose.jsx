import Image from "next/image";
import React from "react";
import whyChooseBg from "@/assets/images/Why-Choose-Tizzy-Mail-bg.png";

const WhyChoose = () => {
  const whyChooseData = [
    {
      title: "Fast Performance",
      description:
        "Rapid synchronised email experiences with any email clients, such as Outlook and Thunderbird. This will ensure the sending and receiving of emails with large attachments using our optimised POP, IMAP, and SMTP.",
     
    },
    {
      title: "Special Security Measures",
      description:
        "Strong protection for your business communications along with advanced safeguards, such as SSL/TLS encryption, DKIM, SPF, etc., and spam and antivirus filtering. All these measures keep your data safe from threats and illegitimate access.",
      
    },
    {
      title: "Guaranteed Backup of Data",
      description:
        "Thanks to automated scheduled backups on AWS S3 Buckets every 30 days, vital data stored in our facilities can be kept and restored when required.",
    },
    {
      title: "Simple Webmail Interface",
      description:
        "An easily accessible webmail platform where your email can be equipped with drag-and-drop, auto-complete addressing, and a search engine fully indexed to make information speedy.",
      
    },
    {
      title: "Scalable Storage Options",
      description:
        "Users can select the plan that best suits their business, ranging from 10GB to 1 TB of storage per user.",
     
    },
  ];

  return (
    <section className="data-backup-section why-choose-tizzy position-relative pt-80 pb-80">
      <div className="why-choose-tizzy">
        <Image
          src={whyChooseBg}
          className="img"
          alt="Why Choose Tizzy Mail Background"
        />
      </div>
      <div className="container container-1760">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-9 col-md-12 col-12">
            <div className="workspace-plan-title text-center">
              <h2
                className="div-sub-title aos-init aos-animate"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="800"
              >
                Why Choose Tizzy Mail?
              </h2>
            </div>
          </div>
        </div>
        <div className="row mt-50 justify-content-end">
          <div className="col-xl-8 col-lg-9 col-md-12 col-12">
            <div className="row justify-content-start">
              {whyChooseData.map((item, index) => (
                <div
                  key={index}
                  className={`col-xl-4 col-lg-4 col-md-12 col-12 data-backup-bottom aos-init`}
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="800"
                >
                  <div className="data-backup-box">
                    <h3 className="div-text">{item.title}</h3>
                    <p className="p-0">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;