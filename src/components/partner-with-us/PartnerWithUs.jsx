import Image from "next/image";
import React from "react";
import PartnerImg from "@/assets/images/partners-img.jpg";
import PartnerCheck from "@/assets/images/partners-check.png";

const PartnerWithUs = () => {
  return (
    <section className="partners-section position-relative pt-100 pb-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div
              className="plans-title text-center aos-init aos-animate"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="600"
            >
              <h2 className="title">Partners with us</h2>
            </div>
          </div>
        </div>
        <div className="row mt-30 position-relative">
          <div className="col-xxl-6 col-lg-6 col-md-12 col-12">
            <div className="partners-img img-zoom">
              <Image
                src={PartnerImg}
                width={2000}
                height={600}
                className="img zoom"
                alt="partners img"
              />
            </div>
          </div>
          <div className="col-xxl-6 col-lg-6 col-md-12 col-12">
            <div className="partners-list-box">
              <div
                className="partners-list aos-init aos-animate"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="600"
              >
                <Image
                  src={PartnerCheck}
                  width={1000}
                  height={1000}
                  alt="partners check"
                />
                <h4 className="div-text">
                  Start your journey with zero investment and easy onboarding.
                </h4>
              </div>
              <div
                className="partners-list aos-init aos-animate"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="600"
              >
                <Image
                  src={PartnerCheck}
                  width={1000}
                  height={1000}
                  alt="partners check"
                />
                <h4 className="div-text">
                  We handle the tech while you focus on growing your business.
                </h4>
              </div>
              <div
                className="partners-list aos-init aos-animate"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="800"
              >
                <Image
                  src={PartnerCheck}
                  width={1000}
                  height={1000}
                  alt="partners check"
                />
                <h4 className="div-text">
                  Earn consistent yearly revenue from long-term clients.
                </h4>
              </div>
              <div
                className="partners-list aos-init aos-animate"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1200"
              >
                <Image
                  src={PartnerCheck}
                  alt="partners check"
                />
                <h4 className="div-text">
                  Get complete backend assistance from our expert team.
                </h4>
              </div>
              <div
                className="partners-list aos-init"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1400"
              >
                <Image
                  src={PartnerCheck}
                  width={1000}
                  height={1000}
                  alt="partners check"
                />
                <h4 className="div-text">
                  We assist you in converting leads into successful deals.
                </h4>
              </div>
              <div
                className="partners-list aos-init"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="600"
              >
                <Image
                  src={PartnerCheck}
                  alt="partners check"
                  width={1000}
                  height={1000}
                />
                <h4 className="div-text">
                  Enjoy free hosting, incentives, and special partner rewards.
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerWithUs;
