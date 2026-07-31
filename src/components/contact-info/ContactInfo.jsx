import React from "react";
import Image from "next/image";
import ContactBgImg from "@/assets/images/contact-bg.png";
import SmartEmailImg from "@/assets/icon/smart-email.png";
import LocationPinImg from "@/assets/icon/location-pin.png";
import PhoneCallImg from "@/assets/icon/phone-call.png";
import InstagramImg from "@/assets/icon/instagram.png";
import FacebookImg from "@/assets/icon/facebook.png";
import LinkedinImg from "@/assets/icon/linkedin.png";
import TwitterImg from "@/assets/icon/twitter.png";
import GoogleReviewsImg from "@/assets/icon/googl-logo.png";
import WhatsappImg from "@/assets/icon/whatsapp.png";
import Link from "next/link";

const ContactInfo = () => {
  return (
    <>
      <section
        className="home-banner h-100 pb-100 pt-100 position-relative"
        style={{ backgroundImage: `url(${ContactBgImg.src})` }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-10 col-12">
              <div className="banner-text p-0 mb-80 text-center">
                <h1 className="title">Contact Info</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-section position-relative">
        <div className="container">
          <div className="row position-relative">
            <div className="col-lg-4 col-md-12 col-12">
              <div
                className="contact-plan-box aos-init aos-animate"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="600"
              >
                <Image src={SmartEmailImg} alt="smart-email" />
                <h2 className="div-text mb-2">Email</h2>
                <div className="mb-20">
                  <h2 className="p-content mb-0 weight-Medium">
                    For Corporate Sales -
                  </h2>
                  <a href="mailto:sales@tizzycloud.com">sales@tizzycloud.com</a>
                </div>
                <div className="mb-20">
                  <h3 className="p-content mb-0 weight-Medium">
                    For Technical Support -{" "}
                  </h3>
                  <a href="mailto:support@tizzycloud.com">
                    support@tizzycloud.com
                  </a>
                </div>
                <div className="">
                  <h4 className="p-content mb-0 weight-Medium">
                    For Billing / Renewal -{" "}
                  </h4>
                  <a href="mailto:accounts@tizzycloud.com">
                    accounts@tizzycloud.com
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-12">
              <div
                className="contact-plan-box aos-init aos-animate"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1000"
              >
                <Image src={LocationPinImg} alt="location-pin" />
                <h3 className="div-text mb-2">CORPORATE OFFICE ADDRESS</h3>
                <h4 className="p-content weight-Bold">
                  Tizzy®Cloud Computing Private Limited
                </h4>
                <p>
                  Office No. 511, Kalpataru Avenue, <br /> Akurli Road,
                  Kandivali East,
                  <br /> Mumbai - 400101, <br />
                  Maharashtra, INDIA
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-12">
              <div
                className="contact-plan-box aos-init aos-animate"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="800"
              >
                <Image src={PhoneCallImg} alt="phone-call" />
                <h4 className="div-text mb-1">Global Helpline</h4>
                <p>
                  {" "}
                  <a href="tel:+919925992599"> +91 9925992599</a>
                </p>
                <div className="social-media-c pt-5">
                  <ul className="d-flex">
                    <li>
                      <Link
                        href="https://www.instagram.com/tizzy_cloud/"
                        title="Instagram"
                        target="_blank"
                      >
                        <Image src={InstagramImg} alt="instagram" />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.facebook.com/tizzycloudmumbai"
                        title="Facebook"
                        target="_blank"
                      >
                        <Image src={FacebookImg} alt="facebook" />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.linkedin.com/company/tizzy-cloud"
                        title="LinkedIn"
                        target="_blank"
                      >
                        <Image src={LinkedinImg} alt="linkedin" />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://twitter.com/tizzy_cloud"
                        title="Twitter"
                        target="_blank"
                      >
                        <Image src={TwitterImg} alt="twitter" />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://goo.gl/maps/esg8rK3ftHYF2KRA9"
                        title="Google Reviews"
                        target="_blank"
                      >
                        <Image
                          src={GoogleReviewsImg}
                          alt="Google Reviews"
                        />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://api.whatsapp.com/send?phone=919925992599"
                        title="Whatsapp"
                        target="_blank"
                      >
                        <Image src={WhatsappImg} alt="Whatsapp" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="iframe-banner">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7535.662339906239!2d72.855722!3d19.202575!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b730ec5f42c7%3A0xe2a6eb0fac916142!2sTizzy%20Cloud%20Computing%20Private%20Limited!5e0!3m2!1sen!2sin!4v1768912004924!5m2!1sen!2sin"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default ContactInfo;
